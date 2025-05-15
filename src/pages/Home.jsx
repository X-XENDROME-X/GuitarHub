import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header>
        <section className="hero">
          <div className="hero-content">
            <h1>Start Your Guitar Journey with Confidence</h1>
            <p>
              Unlock the joy of playing guitar with our beginner-friendly
              lessons. Join a community of aspiring musicians and enhance your
              skills today!
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Begin Your Journey
              </Link>
              <Link to="/lessons" className="btn btn-secondary">
                Explore Lessons
              </Link>
            </div>
          </div>
          <div className="hero-video">
            <video
              controls
              poster="/images/thumbnail.png"
              width="100%"
              height="400"
              autoPlay
              muted
              loop
              id="hero-video"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              <source src="/videos/video.webm" type="video/webm" />
              <p>
                Your browser does not support the video tag.{" "}
                <a href="/videos/video.mp4">Download the video here</a>.
              </p>
            </video>
          </div>
        </section>
      </header>

      <section className="features">
        <h2>
          Discover Your Next Favorite Lesson and Enhance Your Skills Today
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/images/Practice.svg" alt="Weekly Practice Schedule" />
            <h3>Explore Our Weekly Practice Schedule</h3>
            <p>
              Stay on track with our Weekly Practice Schedule designed for
              beginners.
            </p>
            <Link to="/lessons" className="btn-link">
              Watch &gt;
            </Link>
          </div>
          <div className="feature-card">
            <img src="/images/guitar.svg" alt="Chord Diagrams Icon" />
            <h3>Master Essential Chords</h3>
            <p>
              Access detailed diagrams and audio for perfecting your chord
              transitions.
            </p>
            <Link to="/chords" className="btn-link">
              View {'>'}
            </Link>
          </div>
          <div className="feature-card">
            <img src="/images/guitar-player.svg" alt="Practice Tips Icon" />
            <h3>Boost Your Practice</h3>
            <p>
              Download our helpful PDF card for quick reference on practice
              tips.
            </p>
            <Link to="/resources" className="btn-link">
              Download &gt;
            </Link>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>Dedicated instructors passionate about teaching guitar.</p>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/KevinWilliams.jpg" alt="Kevin Williams" />
            <h3>Kevin Williams</h3>
            <p>Lead Instructor</p>
            <p className="member-bio">
              Kevin has over 10 years of experience teaching guitar to
              beginners.
            </p>
            <div className="social-links">
              <a href="#" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="team-member">
            <img src="/images/NathanJones.jpg" alt="Nathan Jones" />
            <h3>Nathan Jones</h3>
            <p>Guitar Coach</p>
            <p className="member-bio">
              Nathan specializes in chord progressions and strumming techniques
              for new players.
            </p>
            <div className="social-links">
              <a href="#" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hiring">
        <h2>We're hiring!</h2>
        <p>Join our team and inspire future guitarists.</p>
        <Link to="/contact" className="btn btn-primary">
          Open Positions
        </Link>
      </section>

      <section className="testimonial">
        <blockquote>
          "GuitarHub transformed my guitar skills! The lessons are easy to
          follow and incredibly effective."
        </blockquote>
        <div className="testimonial-author">
          <img src="/images/BrendonPhillips.jpg" alt="Brendon Phillips" />
          <p className="author-name">Brendon Phillips</p>
          <p className="author-title">Beginner Guitarist</p>
        </div>
      </section>
    </>
  );
}

export default Home;