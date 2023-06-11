import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} PhoneCave. All Rights Reserved
        </p>
        <div className="footer-links">
          <a href="/privacypolicy">Privacy Policy</a>
          <span className="footer-separator"></span>
          <a href="/termsofuse">Terms of Use</a>
          <span className="footer-separator"></span>
          <a href="/salesandrefunds">Sales and Refunds</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;