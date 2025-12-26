import "../styles/ProjectCard.css";

export default function ProjectCard({ title, type, content, tags }) {
  return (
    <div className="projectcard">
      <h3>{title} · {type}</h3>
      <p>{content}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}