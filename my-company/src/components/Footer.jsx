function Footer() {
    return (
        <footer style={{ backgroundColor: '#222', color: 'white', textAlign: 'center', padding: '20px', marginTop: 'auto', boxShadow: '0 -2px 5px rgba(0,0,0,0.2)' }}>
            <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;