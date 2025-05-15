import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src="/images/blogo.png" alt="GuitarHub Logo" height="120" />
      </Link>
      <button
        type="button"
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/chords">Chords Library</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/discussion">Discussion Board</Link>
        <Link to="/contact" className="contact-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;