import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
} from 'react-icons/fa';

export default function SocialRow({ icons }) {
  const iconSize = 28;
  const getSocialIcon = name => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return <FaFacebook size={iconSize} />;
      case 'instagram':
        return <FaInstagram size={iconSize} />;
      case 'youtube':
        return <FaYoutube size={iconSize} />;
      case 'tiktok':
        return <FaTiktok size={iconSize} />;
      case 'spotify':
        return <FaSpotify size={iconSize} />;
      default:
        return <FaFacebook size={iconSize} />;
    }
  };

  return (
    <div className="social-row">
      {icons.items.map((icon, index) => {
        return (
          <div key={index}>
            <a href={icon.valueUrl} target="_blank" rel="noopener noreferrer">
              {getSocialIcon(icon.name)}
            </a>
          </div>
        );
      })}
    </div>
  );
}
