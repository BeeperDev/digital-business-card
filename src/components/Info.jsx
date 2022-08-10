import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="info-container">
      <img src="/me.jpg" alt="my profile picture" />
      <h2>Erica Dayton</h2>
      <p>Fullstack Developer</p>
      <a href="https://beeperdev.com/" className="blocked">
        ericadayton.website
      </a>
      <a href="mailto:beeperdev.erica@gmail.com" className="btn email">
        <HiMail /> <span>Email</span>
      </a>
      <a href="https://www.linkedin.com/in/beeperdev/" className="btn linkedin">
        <FaLinkedin /> <span>LinkedIn</span>
      </a>
    </div>
  );
}
