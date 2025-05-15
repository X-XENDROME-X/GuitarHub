import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <Link to="/contact">Contact Us</Link>
        <a href="mailto:info@guitarhub.com">Email Us</a>
      </div>
      <div className="social-icons">
        <a href="#" title="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" title="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" title="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <p className="copyright">© 2025 GuitarHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;