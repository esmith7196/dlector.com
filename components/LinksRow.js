import React from 'react';

export default function LinksRow({ links }) {
  return (
    <div>
      {links.map((link, index) => {
        return (
          <button className="link-btn" key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </button>
        );
      })}
    </div>
  );
}
