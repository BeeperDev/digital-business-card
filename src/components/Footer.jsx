import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-flex-wrapper">
        <a href="https://twitter.com/beeperdev">
          <FaTwitterSquare />
        </a>
        <a href="https://www.facebook.com/layton.erica/">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/ericalayton/">
          <FaInstagramSquare />
        </a>
        <a href="https://github.com/BeeperDev">
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
}
