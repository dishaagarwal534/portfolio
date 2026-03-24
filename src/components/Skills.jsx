import "../styles/skills.css";

function Skills() {
  return (
    <div id="skills" className="skills-container">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend Development</h3>
          <p>HTML, CSS, Bootstrap, JavaScript, React.js</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>MySQL</p>
        </div>

        <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <p>Git, JIRA, VS Code</p>
        </div>

        <div className="skill-card">
          <h3>Soft Skills</h3>
          <p>
            Problem Solving, Self-learning, Communication, Client Engagement,
            Team Collaboration
          </p>
        </div>

      </div>

    </div>
  );
}

export default Skills;