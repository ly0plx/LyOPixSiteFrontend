import '../styles/SocialLinks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SingleInput() {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="https://discord.gg/EK89tgrmm2"><FontAwesomeIcon icon={faDiscord} /></a>
        </li>
        <li>
          <a href="mailto:tanner.ordonez@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </li>
        <li>
          <a href="https://github.com/ly0plx"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
      </ul>
    </div>
  )
}