import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '15px 20px', display: 'flex', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '30px' }}>
                <li>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>About</Link>
                </li>
                <li>
                    <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>Services</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;