import "../styles/experience.css";

function Experience() {
  return (
    <div id="experience" className="experience-container">

      <div className="experience-item">
        <h3>Kritikal Solutions — Software Engineer</h3>
        <span className="experience-date">17 June 2024 – Present</span>

        <h4>Cloud-Based Image Processing Platform</h4>
        <ul>
          <li>Engineered components of a cloud-based image processing pipeline on AWS enabling automated upload and extraction of large image datasets.</li>
          <li>Implemented ZIP file extraction and preprocessing workflows reducing manual data preparation time.</li>
          <li>Designed backend triggers to initialize GPU-enabled compute instances for large-scale image analysis.</li>
          <li>Built cloud pipeline modules for upload, extraction and instance initialization for automated processing.</li>
          <li>Received the <b>High Flyer Award (Team Recognition)</b> for delivering a scalable cloud processing solution.</li>
        </ul>

        <p className="tech">
          Technologies: AWS, Python Backend, GPU Instances, Cloud Development, Git
        </p>


        <h4>Medical Device Monitoring Web Application</h4>
        <ul>
          <li>Built a React.js web dashboard to monitor medical device status, patient sessions and treatment analytics.</li>
          <li>Implemented responsive UI components for device usage and patient session visualization.</li>
          <li>Integrated frontend modules with REST APIs to retrieve real-time device and patient data.</li>
          <li>Deployed the application on AWS cloud infrastructure for secure clinical access.</li>
          <li>Collaborated with QA and product teams to validate workflows and billing records.</li>
        </ul>

        <p className="tech">
          Technologies: React.js, JavaScript, AWS Cloud, REST APIs, Git
        </p>


        <h4>Medical Device Interface Application</h4>
        <ul>
          <li>Designed UI screens for a medical device using Crank Storyboard.</li>
          <li>Implemented dynamic screen transitions and configuration modules.</li>
          <li>Worked with firmware and QA teams to integrate UI with embedded logic.</li>
          <li>Delivered regular client demonstrations and incorporated product feedback.</li>
          <li>Awarded the <b>High Flyer Award</b> for exceptional delivery.</li>
        </ul>

        <p className="tech">
          Technologies: Crank Storyboard, Lua Scripting, JIRA
        </p>
      </div>


      <div className="experience-item">
        <h3>Kritikal Solutions — SSDD Intern</h3>
        <span className="experience-date">Dec 2023 – Jun 2024</span>

        <h4>iOS Application – GSPro</h4>
        <ul>
          <li>Developed UI components for a medical iOS application using Swift and Xcode.</li>
          <li>Integrated Bluetooth Low Energy (BLE) communication between mobile app and device.</li>
          <li>Supported application testing and deployment using TestFlight.</li>
          <li>Collaborated with cross-functional teams to improve application stability.</li>
        </ul>

        <p className="tech">
          Technologies: Swift, Xcode, TestFlight
        </p>
      </div>

    </div>
  );
}

export default Experience;