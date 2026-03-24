import "../styles/about.css";
import profile from "../assets/profile picture.jpg";

function About() {
  return (
    <div id="about" className="about-container">

      <div className="about-text">
        <h2>Hi! I'm Disha Agarwal</h2>

        <p>
          Software Engineer with a strong interest in frontend development and
          building scalable software solutions.
        </p>

        <p>
          Skilled in JavaScript, HTML, CSS, and React for developing responsive
          user interfaces. Experienced in collaborating within Agile teams,
          writing maintainable code, and contributing to end-to-end software
          development.
        </p>
      </div>

      <div className="about-image">
        <div className="profile-circle">
          <img src={profile} alt="Disha Agarwal" />
        </div>
      </div>

    </div>
  );
}

export default About;