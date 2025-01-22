import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="logo footer-logo">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <p>© 2024 Physics Society, IIT Delhi. All rights reserved.</p>
      <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      </nav>
      <div className="logo footer-logo">
        <img src="./assets/insta.png" alt="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;