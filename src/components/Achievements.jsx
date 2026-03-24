import "../styles/achievements.css";

function Achievements() {
  return (
    <div id="achievements" className="achievements-container">

      <h2 className="achievements-title">Achievements</h2>

      <div className="achievement-card">
        <h3>🏆 High Flyer Award (Individual)</h3>
        <p>
          Awarded for outstanding performance at Kritikal Solutions for
          delivering the <b>Medical Device Interface Application</b>.
        </p>
      </div>

      <div className="achievement-card">
        <h3>🏆 High Flyer Award (Team)</h3>
        <p>
          Recognized as part of the team for successfully building a
          <b> Cloud-Based Image Processing Platform</b>.
        </p>
      </div>

    </div>
  );
}

export default Achievements;