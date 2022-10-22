import React from 'react';

export default function LinksRow({ links }) {
  return (
    <div>
      {links.map((link, index) => {
        return (
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <button className="link-btn" key={index}>
              {link.label}
            </button>
          </a>
        );
      })}
    </div>
  );
}
