import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} PhoneCave. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;