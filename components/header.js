import Link from 'next/link';

const linkStyle = {
  marginRight: 20
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    <Link href="/App">
      <a style={linkStyle}>App</a>
    </Link>
  </div>
);

export default Header;