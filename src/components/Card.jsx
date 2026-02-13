import React from "react";

export default function Card({ title, image, description, link, pdf }) {
  return (
    <article className="project">

      {image && (
        <img src={image} alt={title} />
      )}

      <h3>{title}</h3>

      {description && <p>{description}</p>}

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      )}

      {pdf && (
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          Voir le certificat
        </a>
      )}

    </article>
  );
}
