import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube, 
  faSnapchat, 
} from '@fortawesome/free-brands-svg-icons';


const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons w-fit" >
      {/* Facebook */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className='border-1 rounded-full p-1 m-1' size="sm" />
      </a>
      {/* Twitter */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className='border-1 rounded-full p-1 m-1' size="sm" />
      </a>
      {/* Instagram */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className='border-1 rounded-full p-1 m-1' size="sm" />
      </a>
      {/* LinkedIn */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className='border-1 rounded-full p-1 m-1' size="sm" />
      </a>
      {/* YouTube */}
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className='border-1 rounded-full p-1 m-1' size="sm" />
      </a>
      {/* Snapchat */}
      <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSnapchat} className='border-1 rounded-full p-1 m-1' size="sm" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;