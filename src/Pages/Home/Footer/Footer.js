import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className='footer'>
            <h2>INVENTO</h2>
            <p>Copyright &copy; Antu Howlader Sajal</p>
            <div className="social-icon-container">
                <FaFacebook className='social-icon' /> <FaInstagram className='social-icon' /> <FaTwitter className='social-icon' /> <FaLinkedin className='social-icon' /> <FaGooglePlus className='social-icon' />
            </div>

        </footer>
    );
};

export default Footer;