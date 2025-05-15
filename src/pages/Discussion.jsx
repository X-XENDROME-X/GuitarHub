import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Discussion() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    links: [""], // Starting with one empty link field
    description: "",
    author: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [linkErrors, setLinkErrors] = useState([""]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const POSTS_PER_PAGE = 3;

  // Character limits from database schema
  const TITLE_MAX_LENGTH = 100;
  const DESCRIPTION_MAX_LENGTH = 200;
  const MAX_LINKS = 3;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`);
      console.log("Fetch response:", response);
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched posts:", data);
        setPosts(data);
      } else {
        throw new Error("Failed to fetch posts");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Error fetching posts. Please try again later.");
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Get current page of posts
  const getCurrentPagePosts = () => {
    const startIndex = currentPage * POSTS_PER_PAGE;
    return posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  };

  // Navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  // First, update your handlePaste function to handle it correctly
const handlePaste = (e) => {
    // Get the field name from the target
    const { name } = e.target;
    // Get plain text from clipboard
    const pastedText = e.clipboardData.getData('text/plain');
    
    if (name === 'description') {
      // Get cursor position
      const cursorPos = e.target.selectionStart;
      
      // Calculate the new content by inserting pasted text at cursor position
      const textBefore = formData.description.substring(0, cursorPos);
      const textAfter = formData.description.substring(cursorPos);
      
      // Check if pasting would exceed character limit
      const newText = textBefore + pastedText + textAfter;
      if (newText.length <= DESCRIPTION_MAX_LENGTH) {
        setFormData({
          ...formData,
          description: newText
        });
      }
    }
    
    // Prevent default paste behavior
    e.preventDefault();
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle character limits
    if (name === "title" && value.length > TITLE_MAX_LENGTH) return;
    if (name === "description" && value.length > DESCRIPTION_MAX_LENGTH) return;

    setFormData({ ...formData, [name]: value });
  };

  // Handle link changes
  const handleLinkChange = (index, value) => {
    const updatedLinks = [...formData.links];
    updatedLinks[index] = value;

    // Clear error for this link
    const updatedLinkErrors = [...linkErrors];
    updatedLinkErrors[index] = "";
    setLinkErrors(updatedLinkErrors);

    setFormData({ ...formData, links: updatedLinks });
  };

  // Add new link field
  const addLinkField = () => {
    if (formData.links.length < MAX_LINKS) {
      setFormData({ ...formData, links: [...formData.links, ""] });
      setLinkErrors([...linkErrors, ""]);
    }
  };

  // Remove link field
  const removeLinkField = (index) => {
    if (formData.links.length > 1) {
      const updatedLinks = [...formData.links];
      updatedLinks.splice(index, 1);

      const updatedLinkErrors = [...linkErrors];
      updatedLinkErrors.splice(index, 1);

      setFormData({ ...formData, links: updatedLinks });
      setLinkErrors(updatedLinkErrors);
    }
  };

  // Function to validate URL format
  const validateURL = (url) => {
    if (!url) return true; // Empty links are allowed (except first one)

    // URL validation regex pattern
    const urlPattern =
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/\w-]*)*\/?$/;
    return urlPattern.test(url);
  };

  // Function to ensure URL has proper protocol
  const formatURL = (url) => {
    if (!url) return "";

    if (!url.match(/^https?:\/\//i)) {
      return "https://" + url;
    }

    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");
    setLinkErrors(formData.links.map(() => ""));

    // Validate all links
    let hasLinkError = false;
    const newLinkErrors = formData.links.map((link, index) => {
      // First link is required
      if (index === 0 && !link.trim()) {
        hasLinkError = true;
        return "The first link is required";
      }

      if (link.trim() && !validateURL(link)) {
        hasLinkError = true;
        return "Please enter a valid URL (e.g., www.example.com)";
      }
      return "";
    });

    if (hasLinkError) {
      setLinkErrors(newLinkErrors);
      setIsSubmitting(false);
      return;
    }

    // Format links and filter out empty ones (except the first one which is required)
    const formattedMainLink = formatURL(formData.links[0]);
    const formattedAdditionalLinks = formData.links
      .slice(1)
      .filter((link) => link.trim() !== "")
      .map((link) => formatURL(link));

    // Create submission data
    const submissionData = {
      title: formData.title,
      link: formattedMainLink,
      additionalLinks: formattedAdditionalLinks,
      description: formData.description,
      author: formData.author,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSuccess(
          "Resource shared successfully! Thank you for contributing to the community."
        );
        setFormData({
          title: "",
          links: [""],
          description: "",
          author: "",
        });
        setLinkErrors([""]);
        fetchPosts();
        setCurrentPage(0); // Go back to first page after adding a new post
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Failed to submit resource. Please try again."
        );
      }
    } catch (err) {
      console.error("Submit error:", err);
      setError(
        "Error submitting resource. Please check your network connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="discussion-page">
      {/* Hero Section */}
      <section className="discussion-hero">
        <div className="discussion-hero-content">
          <h1>Community Discussion Board</h1>
          <p>
            Share and discover guitar learning resources with the GuitarHub
            community. Find helpful tutorials, chord charts, technique guides,
            and more.
          </p>
          {/* Hero Image */}
          <div className="discussion-hero-image-container">
            <img
              className="discussion-hero-image"
              src="/images/discussion.png"
              alt="Guitar Discussion Board"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section - Two column layout */}
      <section className="discussion-main-content">
        <div className="discussion-container">
          {error && <div className="alert alert-error">{error}</div>}

          <div className="discussion-content-columns">
            {/* Recent Posts Column */}
            <div className="discussion-posts-column">
              <div className="discussion-section-header">
                <h2>Recent Posts</h2>
                <p>Explore resources shared by fellow guitarists</p>
              </div>

              <div className="posts-grid">
                {posts.length > 0 ? (
                  <>
                    {getCurrentPagePosts().map((post, index) => (
                      <div className="post-card" key={index}>
                        <h3>{post.title}</h3>
                        <div className="post-card-content">
                          <p>{post.description}</p>
                        </div>
                        <div className="post-card-footer">
                          <span className="post-author">
                            Posted by: {post.author || "Anonymous"}
                          </span>
                        </div>

                        {/* Links Section */}
                        <div className="post-links-container">
                          {/* Main Link */}
                          {post.link && (
                            <a
                              href={post.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="resource-link">
                              Visit Resource 1 &rarr;
                            </a>
                          )}

                          {/* Additional Links */}
                          {post.additionalLinks &&
                            post.additionalLinks.map((link, i) => (
                              <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resource-link">
                                Visit Resource {i + 2} &rarr;
                              </a>
                            ))}
                        </div>
                      </div>
                    ))}

                    {/* Pagination Controls */}
                    {posts.length > POSTS_PER_PAGE && (
                      <div className="pagination-controls">
                        {currentPage > 0 && (
                          <button
                            className="pagination-arrow up-arrow"
                            onClick={goToPrevPage}
                            aria-label="Previous posts">
                            ↑
                          </button>
                        )}

                        {currentPage < totalPages - 1 && (
                          <button
                            className="pagination-arrow down-arrow"
                            onClick={goToNextPage}
                            aria-label="Next posts">
                            ↓
                          </button>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <p className="no-posts-message">
                    No resources have been shared yet. Be the first to
                    contribute!
                  </p>
                )}
              </div>
            </div>

            {/* Share a Resource Column */}
            <div className="discussion-form-column">
              <div className="discussion-section-header">
                <h2>Share a Resource</h2>
                <p>
                  Help fellow guitarists by sharing useful learning materials
                </p>
              </div>

              <div className="submit-form-container">
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}

                <form className="resource-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">
                      Title{" "}
                      <span className="character-limit">
                        ({formData.title.length}/{TITLE_MAX_LENGTH})
                      </span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      placeholder="E.g., Beginner Chord Transition Guide"
                      className={
                        formData.title.length >= TITLE_MAX_LENGTH
                          ? "input-limit-reached"
                          : ""
                      }
                    />
                  </div>

                  {/* Multiple Links Section */}
                  <div className="form-links-container">
                    <label>
                      Links{" "}
                      <span className="link-limit">(Max {MAX_LINKS})</span>
                    </label>

                    {formData.links.map((link, index) => (
                      <div key={index} className="link-input-group">
                        <div className="form-group link-form-group">
                          <input
                            type="text"
                            value={link}
                            onChange={(e) =>
                              handleLinkChange(index, e.target.value)
                            }
                            placeholder={
                              index === 0
                                ? "Main resource (required)"
                                : `Additional resource ${index + 1}`
                            }
                            className={linkErrors[index] ? "input-error" : ""}
                            required={index === 0} // Only the first link is required
                          />
                          {linkErrors[index] && (
                            <p className="form-error">{linkErrors[index]}</p>
                          )}
                        </div>

                        <div className="link-controls">
                          {/* Remove button (don't allow removing the first link) */}
                          {index > 0 && (
                            <button
                              type="button"
                              className="link-control-btn remove-link-btn"
                              onClick={() => removeLinkField(index)}
                              aria-label="Remove link">
                              −
                            </button>
                          )}

                          {/* Add button (only show on last item if under max) */}
                          {index === formData.links.length - 1 &&
                            formData.links.length < MAX_LINKS && (
                              <button
                                type="button"
                                className="link-control-btn add-link-btn"
                                onClick={addLinkField}
                                aria-label="Add another link">
                                +
                              </button>
                            )}
                        </div>
                      </div>
                    ))}

                    <p className="form-note">
                      Enter valid URLs such as www.example.com
                    </p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">
                      Description{" "}
                      <span className="character-limit">
                        ({formData.description.length}/{DESCRIPTION_MAX_LENGTH})
                      </span>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        onPaste={handlePaste}
                        placeholder="Brief description of the resource and how it might help other guitarists..."
                        className={formData.description.length >= DESCRIPTION_MAX_LENGTH ? "input-limit-reached" : ""}
                    />

                  </div>

                  <div className="form-group">
                    <label htmlFor="author">Your Name (optional)</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-submit-wrapper">
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Post"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discussion;
