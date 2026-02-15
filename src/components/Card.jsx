export default function Card({ title, image, description, resume, level }) {
  return (
    <article className="project">

      {image && <img src={image} alt={title} />}

      <h3>{title}</h3>

      {(description || level) && (
        <p>{description || `Niveau : ${level}`}</p>
      )}

      {resume && (
        <ul>
          {resume.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}

    </article>
  );
}
