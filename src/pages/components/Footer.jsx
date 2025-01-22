import './Footer.css';

function Footer() {
  return (
    <footer>
      <a className="logo footer-logo" href="/">
        <img src="./assets/logo.png" alt="logo" />
      </a>
      <p>© 2025 Physics Society, IIT Delhi. All rights reserved.</p>
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
      <a className="logo footer-logo" href="https://www.instagram.com/physoc.iitd" target='_blank' rel='noreferrer'>
        <img src="./assets/insta.png" alt="Instagram" className='social-icon' />
      </a>
    </footer>
  );
}

export default Footer;