import { Link } from "react-router-dom";

function Lessons() {
  return (
    <>
      <header>
        <section className="lesson-hero">
          <div className="lesson-hero-content">
            <h1>Your Guitar Learning Hub</h1>
            <img
              src="/images/lessons.jpg"
              alt="Guitar Lessons"
              className="lesson-hero-image"
            />
            <p>
              Develop your skills with a weekly practice schedule, expert video
              tutorials, and practical tips designed for beginners.
            </p>
            <div className="lesson-hero-info">
              <div className="lesson-info-card">
                <h3>Weekly Plan</h3>
                <p>
                  Follow a structured 7-day schedule to build habits and
                  confidence.
                </p>
              </div>
              <div className="lesson-info-card">
                <h3>Video Lessons</h3>
                <p>
                  Watch concise tutorials to master chords and techniques
                  visually.
                </p>
              </div>
              <div className="lesson-info-card">
                <h3>Pro Tips</h3>
                <p>Get advice from instructors to accelerate your progress.</p>
              </div>
            </div>
            <div className="lesson-hero-cta">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </header>

      <section className="lesson-features" id="weekly-schedule">
        <div className="lesson-section-header">
          <h2>Weekly Practice Schedule</h2>
          <p>
            A repeatable plan to help you improve consistently—perfect for
            beginners and regular practice.
          </p>
        </div>
        <div className="lesson-schedule-container">
          <table className="lesson-practice-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Focus Area</th>
                <th>Duration</th>
                <th>Tips & Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Tuning & Warm-Up</td>
                <td>15 mins</td>
                <td>
                  Tune with an app (e.g., GuitarTuna); play 1-2-3-4 finger
                  exercise.
                </td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Core Chords (G, C, D)</td>
                <td>25 mins</td>
                <td>
                  Practice clean chord shapes; aim for 10 smooth switches.
                </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Strumming Fundamentals</td>
                <td>20 mins</td>
                <td>Use Down-Down-Up pattern at 60 BPM; focus on rhythm.</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Chord Transitions</td>
                <td>20 mins</td>
                <td>Switch G to C to D; target 15 clean transitions.</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Song Practice</td>
                <td>30 mins</td>
                <td>
                  Play "Wonderwall" (Em, G, D, A7sus4); match strumming to
                  tempo.
                </td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>Fingerpicking Intro</td>
                <td>25 mins</td>
                <td>
                  Thumb on bass, fingers on strings 1-3; try "House of the
                  Rising Sun."
                </td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Review & Jam</td>
                <td>30 mins</td>
                <td>
                  Revisit weak areas; play along with a backing track or
                  metronome.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="lesson-schedule-note">
            Repeat this schedule weekly, increasing tempo or complexity as you
            improve!
          </p>
        </div>
      </section>

      <section className="lesson-testimonial" id="video-demo">
        <div className="lesson-section-header">
          <h2>Video Tutorials</h2>
          <p>
            Follow along with these short, focused lessons to see techniques in
            action.
          </p>
        </div>
        <div className="lesson-features-grid">
          <div className="lesson-feature-card">
            <video controls width="100%" height="300">
              <source src="/videos/g-major-demo.mp4" type="video/mp4" />
              <p>
                Your browser does not support the video tag.{" "}
                <a href="/videos/g-major-demo.mp4">Download the video here</a>.
              </p>
            </video>
            <h3>G Major Chord</h3>
            <p>A guide to perfect finger placement for G Major.</p>
          </div>
          <div className="lesson-feature-card">
            <video controls width="100%" height="300">
              <source src="/videos/strumming-demo.mp4" type="video/mp4" />
              <p>
                Your browser does not support the video tag.{" "}
                <a href="/videos/strumming-demo.mp4">Download the video here</a>
                .
              </p>
            </video>
            <h3>Strumming Basics</h3>
            <p>Learn a Down-Down-Up pattern to build rhythm confidence.</p>
          </div>
          <div className="lesson-feature-card">
            <video controls width="100%" height="300">
              <source src="/videos/transition-demo.mp4" type="video/mp4" />
              <p>
                Your browser does not support the video tag.{" "}
                <a href="/videos/transition-demo.mp4">Download the video here</a>
                .
              </p>
            </video>
            <h3>Chord Transitions</h3>
            <p>Master transitioning from G to D smoothly.</p>
          </div>
        </div>
      </section>

      <section className="lesson-team">
        <div className="lesson-section-header">
          <h2>Tips for Beginner Guitarists</h2>
          <p>
            Boost your progress with these practical tips from our instructors.
          </p>
        </div>
        <div className="lesson-team-grid">
          <div className="lesson-team-member">
            <h3>Practice Daily</h3>
            <p className="lesson-member-bio">
              Even 15 minutes a day builds muscle memory faster than irregular
              long sessions.
            </p>
          </div>
          <div className="lesson-team-member">
            <h3>Use a Metronome</h3>
            <p className="lesson-member-bio">
              Start slow (60 BPM) and increase speed as you get comfortable.
            </p>
          </div>
          <div className="lesson-team-member">
            <h3>Stay Relaxed</h3>
            <p className="lesson-member-bio">
              Keep your shoulders and wrists loose to avoid strain and improve
              dexterity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lessons;