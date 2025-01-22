import './Header.css';

function Header() {
  return (
    <header>
        <a href='/' className= 'logo'><img  src="./assets/logo.png" alt="logo" /></a>
        <nav className='navbar'>
            <ul className='nav-links header-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/gallary">Gallary</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/team">Our Team</a></li>
            </ul>
        </nav>
        <button className='login-btn'>Login/Signup</button>
    </header>
  );
}

export default Header;