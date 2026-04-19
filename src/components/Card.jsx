import "../styles/Card.css";

export default function Card({
  title,
  subtitle,
  content,
  tags,
  onClick,
  image,
  imageAlt,
  className,
  innerRef,
}) {
  const isClickable = typeof onClick === "function";
  const combinedClassName = `card ${className || ""} ${isClickable ? "clickable" : ""}`.trim();
  
  return (
    <div 
      className={combinedClassName}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      ref={innerRef}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
    >
      {image && (
        <img 
          src={image} 
          alt={imageAlt || title} 
          className="card-image"
        />
      )}
      <h3>
        {title}
        {subtitle && ` · ${subtitle}`}
      </h3>
      <p>{content}</p>
      {tags && tags.length > 0 && (
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
