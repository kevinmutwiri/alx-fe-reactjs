import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#fffaf0', minHeight: 'calc(100vh - 120px)' }}>
            <h1 style={{ color: '#2c3e50' }}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ display: 'block', width: '95%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: 'block', width: '95%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ display: 'block', width: '95%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd', minHeight: '100px' }}
                    required
                />
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}>Send Message</button>
            </form>

        </div>
    );
}

export default Contact;