function Resources() {
  return (
    <>
      <header>
        <section className="resources-hero">
          <div className="resources-hero-content">
            <h1>Your Guitar Resources Hub</h1>
            <img
              src="/images/resources.jpg"
              alt="Guitar Resources"
              className="resources-hero-image"
            />
            <p>
              Access downloadable chord charts, video tutorials, and external
              tools to accelerate your guitar journey.
            </p>
            <div className="resources-hero-info">
              <div className="resources-info-card">
                <h3>Chord Charts</h3>
                <p>Download PDFs with essential chord diagrams and guides.</p>
              </div>
              <div className="resources-info-card">
                <h3>Video Tutorials</h3>
                <p>Watch curated YouTube lessons for hands-on learning.</p>
              </div>
              <div className="resources-info-card">
                <h3>External Links</h3>
                <p>Explore trusted platforms like JustinGuitar for more.</p>
              </div>
            </div>
            <div className="resources-hero-cta">
              <a href="#downloads" className="btn btn-primary">
                Get Resources
              </a>
            </div>
          </div>
        </section>
      </header>

      <section className="resources-downloads" id="downloads">
        <div className="resources-section-header">
          <h2>Downloadable Chord Charts</h2>
          <p>Grab these PDFs to practice chords anytime, anywhere.</p>
        </div>
        <div className="resources-downloads-grid">
          <div className="resources-download-card">
            <i className="fas fa-file-pdf fa-3x"></i>
            <h3>Basic Chord Charts</h3>
            <p>Essential charts for beginners covering basic open chords.</p>
            <a
              href="/resources/Basic_Chord_Charts.pdf"
              download
              className="btn btn-secondary"
            >
              Download
            </a>
          </div>
          <div className="resources-download-card">
            <i className="fas fa-file-pdf fa-3x"></i>
            <h3>Chords & Finger Movements</h3>
            <p>
              Open, closed, and advanced chords with finger placement tips.
            </p>
            <a
              href="/resources/Chords_&_Finger_Movements.pdf"
              download
              className="btn btn-secondary"
            >
              Download
            </a>
          </div>
          <div className="resources-download-card">
            <i className="fas fa-file-pdf fa-3x pdf-icon"></i>
            <h3>Chord Types Guide</h3>
            <p>Covers Major, Minor, 7th, Diminished, Barre, and more.</p>
            <a
              href="/resources/Chord_Types_Guide.pdf"
              download
              className="btn btn-secondary"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      <section className="resources-tutorials" id="tutorials">
        <div className="resources-section-header">
          <h2>YouTube Tutorials</h2>
          <p>Learn visually with these beginner-friendly video lessons.</p>
        </div>
        <div className="resources-tutorials-grid">
          <div className="resources-tutorial-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/lRJ_d3PqPIQ?si=-dtp_dLNL9sL1P2N"
              title="Basic Chords for Beginners"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Basic Chords Tutorial</h3>
            <p>Master C, G, D, and more with JustinGuitar.</p>
          </div>
          <div className="resources-tutorial-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/n45PDizCRLw?si=RkQh4ZmW-KOFibQ3"
              title="Strumming Patterns"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Strumming Patterns</h3>
            <p>Learn simple strumming techniques to play songs.</p>
          </div>
          <div className="resources-tutorial-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/ZYbxYoG6Mo0?si=u5NUxV9l3GWaJ3TO"
              title="Barre Chords Made Easy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Barre Chords Basics</h3>
            <p>Unlock barre chords with this easy guide.</p>
          </div>
        </div>
      </section>

      <section className="resources-links" id="external-links">
        <div className="resources-section-header">
          <h2>External Learning Tools</h2>
          <p>Enhance your skills with these trusted guitar platforms.</p>
        </div>
        <div className="resources-links-grid">
          <div className="resources-link-card">
            <h3>JustinGuitar</h3>
            <p>Free lessons from a top guitar instructor.</p>
            <a
              href="https://www.justinguitar.com"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit Site
            </a>
          </div>
          <div className="resources-link-card">
            <h3>Yousician</h3>
            <p>Interactive app for guitar practice.</p>
            <a
              href="https://yousician.com/guitar"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit Site
            </a>
          </div>
          <div className="resources-link-card">
            <h3>Ultimate Guitar</h3>
            <p>Chord sheets and tabs for thousands of songs.</p>
            <a
              href="https://www.ultimate-guitar.com"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Visit Site
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;