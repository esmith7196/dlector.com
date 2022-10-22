import React from 'react';

export default function LinksRow({ links }) {
  return (
    <div>
      {links.map((link, index) => {
        return (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <button className="link-btn">{link.label}</button>
          </a>
        );
      })}
    </div>
  );
}
