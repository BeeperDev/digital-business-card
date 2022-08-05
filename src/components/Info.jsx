export default function Info() {
  return (
    <div className="info-container">
      <img src="/me.jpg" alt="my profile picture" />
      <h2>Erica Dayton</h2>
      <p>Fullstack Developer</p>
      <a href="beeperdev.com" className="blocked">
        ericadayton.website
      </a>
      <a href="mailto:beeperdev.erica@gmail.com" className="btn">
        <span>icon</span>Email
      </a>
      <a href="https://www.linkedin.com/in/beeperdev/" className="btn">
        <span>icon</span>LinkedIn
      </a>
    </div>
  );
}
