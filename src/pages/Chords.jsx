import { Link } from "react-router-dom";

function Chords() {
  return (
    <>
      <header>
        <section className="chords-hero">
          <div className="chords-hero-content">
            <h1>Your Chords Library</h1>
            <img
              src="/images/chords.jpg"
              alt="Chords Library"
              className="chords-hero-image"
            />
            <p>
              Explore essential guitar chords with diagrams, finger placements,
              and progressions to elevate your playing.
            </p>
            <div className="chords-hero-info">
              <div className="chords-info-card">
                <h3>Chord Diagrams</h3>
                <p>
                  Visual guides showing exact finger positions for each chord.
                </p>
              </div>
              <div className="chords-info-card">
                <h3>Progressions</h3>
                <p>Learn common sequences like C-G-Am-F to play songs.</p>
              </div>
              <div className="chords-info-card">
                <h3>Practice Tools</h3>
                <p>Use interactive aids to master chord transitions.</p>
              </div>
            </div>
            <div className="chords-hero-cta">
              <a href="#chord-table" className="btn btn-primary">
                View Chords
              </a>
            </div>
          </div>
        </section>
      </header>

      <section className="chords-features" id="chord-table">
        <div className="chords-section-header">
          <h2>Common Chord Progressions</h2>
          <p>
            Practice these popular progressions to build your song repertoire.
          </p>
        </div>
        <div className="chords-table-container">
          <table className="chords-progression-table">
            <thead>
              <tr>
                <th>Progression</th>
                <th>Key</th>
                <th>Chords</th>
                <th>Song Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I-IV-V-I</td>
                <td>C Major</td>
                <td>C - F - G - C</td>
                <td>"Sweet Home Alabama" by Lynyrd Skynyrd</td>
              </tr>
              <tr>
                <td>I-V-vi-IV</td>
                <td>G Major</td>
                <td>G - D - Em - C</td>
                <td>"Let It Be" by The Beatles</td>
              </tr>
              <tr>
                <td>ii-V-I</td>
                <td>C Major</td>
                <td>Dm - G - C</td>
                <td>"Autumn Leaves" (Jazz Standard)</td>
              </tr>
              <tr>
                <td>vi-IV-I-V</td>
                <td>A Minor</td>
                <td>F - D - Am - E</td>
                <td>"Zombie" by The Cranberries</td>
              </tr>
              <tr>
                <td>I-IV-I-V</td>
                <td>D Major</td>
                <td>D - G - D - A</td>
                <td>"Country Roads" by John Denver</td>
              </tr>
              <tr>
                <td>I-vi-IV-V</td>
                <td>C Major</td>
                <td>C - Am - F - G</td>
                <td>"I’m Yours" by Jason Mraz</td>
              </tr>
              <tr>
                <td>I-iii-IV-V</td>
                <td>G Major</td>
                <td>G - Bm - C - D</td>
                <td>"Brown Eyed Girl" by Van Morrison</td>
              </tr>
              <tr>
                <td>vi-IV-V-I</td>
                <td>E Minor</td>
                <td>C - A - B - E</td>
                <td>"All the Small Things" by Blink-182</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="chords-diagrams" id="chord-diagrams">
        <div className="chords-section-header">
          <h2>Chord Diagrams</h2>
          <p>
            Master these chords with clear visuals and finger placement guides.
          </p>
        </div>
        <div className="chords-diagrams-grid">
          <div className="chords-diagram-card">
            <img
              src="/images/c-chord.png"
              alt="C Major Chord Diagram"
              className="chord-image"
            />
            <h3>C Major</h3>
            <p>
              Fingers: 1st (2nd fret, B), 2nd (3rd fret, D), 3rd (3rd fret, A)
            </p>
          </div>
          <div className="chords-diagram-card">
            <img
              src="/images/g-chord.png"
              alt="G Major Chord Diagram"
              className="chord-image"
            />
            <h3>G Major</h3>
            <p>
              Fingers: 2nd (3rd fret, low E), 3rd (3rd fret, A), 1st (2nd fret,
              high E)
            </p>
          </div>
          <div className="chords-diagram-card">
            <img
              src="/images/am-chord.png"
              alt="A Minor Chord Diagram"
              className="chord-image"
            />
            <h3>A Minor</h3>
            <p>Fingers: 1st (1st fret, B), 2nd (2nd fret, D)</p>
          </div>
          <div className="chords-diagram-card">
            <img
              src="/images/f-chord.png"
              alt="F Major Chord Diagram"
              className="chord-image"
            />
            <h3>F Major</h3>
            <p>Fingers: Barre 1st fret, 2nd (3rd fret, G), 3rd (3rd fret, D)</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chords;