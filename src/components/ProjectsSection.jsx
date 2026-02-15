
import Card from "./Card"; // ⚠️ Très important : importer Card !

export default function ProjectsSection({ id, title, data }) {
  if (!data || data.length === 0) {
    return null; // Pas de données, on ne rend rien
  }

  return (
    <section id={id} className="project">
      <h2>{title}</h2>

      <div className="cards-grid">
        {data.map((item, index) => (
          <Card
            key={item.id || index}
            title={item.title}
            image={item.image}
            description={item.description}
            link={item.link}
            pdf={item.pdf}
            
resume={item.resume_write_up}
level={item.level}

          />
        ))}
      </div>
    </section>
  );
}
