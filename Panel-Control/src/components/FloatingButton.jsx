import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FloatingButton = () => {
  return (
    <Link to="/contact" className="floating-button">
      <div className="floating-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </Link>
  );
};

export default FloatingButton;
