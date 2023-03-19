import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container" id='footer'>
                <div className="footer-left">
                    <h3>About Us</h3>
                    <p>We are a small startup offering walking tours with locals in Stockholm. Our mission is to help foreign professionals and unemployed individuals make some extra money by showing off the beautiful city of Stockholm.</p>
                </div>
                <div className="footer-right">
                    <h3>Contact Us</h3>
                    <div className="footer-contact-info">
                        <p>Email: info@walkingtours.com</p>
                        <p>Phone: +46 70 123 4567</p>
                    </div>
                    <div className="footer-social-media">
                        <a href="https://www.facebook.com/walkingtoursstockholm"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/walkingtoursstockholm"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © Walking Tours Stockholm</p>
            </div>
        </footer>
    )
}

export default Footer
