import "../styles/certifications.css";

function Certifications() {
  return (
    <div id="certifications" className="certifications-container">

      <h2 className="certifications-title">Certifications</h2>

      <div className="cert-card">
        <h3>📜 Basics of Web Development Bootcamp</h3>
        <p>Devtown</p>
        <span className="status completed">Completed</span>
      </div>

      <div className="cert-card">
        <h3>📜 Front-End Web Development Bootcamp</h3>
        <p>CRC Training — 40 Hours</p>
        <span className="status completed">Completed</span>
      </div>

      <div className="cert-card">
        <h3>📜 AWS Certified Developer – Associate (DVA-C02)</h3>
        <p>Amazon Web Services</p>
        <span className="status progress">In Progress</span>
      </div>

    </div>
  );
}

export default Certifications;