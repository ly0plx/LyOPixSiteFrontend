import '../styles/SocialLinks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'Discord',
      icon: faDiscord,
      url: 'https://discord.gg/EK89tgrmm2',
      color: '#5865F2'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/ly0plx',
      color: '#ffffff'
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:me@lyopix.com',
      color: '#dc2626'
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com',
      color: '#1DA1F2'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com',
      color: '#0A66C2'
    }
  ];

  return (
    <div className="social-links">
      <div className="social-links-container">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="social-link"
            aria-label={link.name}
            target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
            rel={link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
            style={{ '--social-color': link.color }}
          >
            <div className="social-icon-wrapper">
              <FontAwesomeIcon icon={link.icon} className="social-icon" />
            </div>
            <span className="social-tooltip">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}