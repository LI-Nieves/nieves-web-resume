import { useState } from 'react'
import picOfMe from './assets/me.png'
import './App.css'
import LangButton from './components/LangButton'
import SkillGroup from './components/SkillGroup'


function App(props) {
  // data
  const PROGRAM_LANG = props.program_lang;
  const TECH_SKILLS = props.tech_skills;
  const SOFTWARE = props.software;
  const SPEAK = props.speak;

  // states
  const [lang, setLang] = useState(0);
  const [speak, setSpeak] = useState(0);

  // For programming languages functionality
  const programmingLanguages = PROGRAM_LANG.map((l) => (
    <LangButton
      key={l.id}
      name={l.name}
      proficiency={l.proficiency}
      desc={l.desc}
      isPressed={l.name === lang.name}
      setLang={setLang}
      />
  ))

  let langDesc;
  const langHelp = "Click on the buttons for more information. Proficiency levels: (highest) Confident > Comfortable > Capable (lowest).";
  if (lang === 0) {
    langDesc = "";
  } else {
    langDesc = `Proficiency: ${lang.proficiency}. ${lang.desc}`;
  }  

  // For tech skills + software functionality
  const techSkillLength = `row row-cols-1 row-cols-md-${TECH_SKILLS.length} g-4`;
  const techSkills = TECH_SKILLS.map((s) => (
    <SkillGroup
      key = {s.id}
      title = {s.title}
      skills = {s.skills}
    />
  ));

  const softwareLength = `row row-cols-1 row-cols-md-${SOFTWARE.length} g-4`;
  const softwareSkills = SOFTWARE.map((s) => (
    <SkillGroup
      key = {s.id}
      title = {s.title}
      skills = {s.skills}
    />
  ));

  // For spoken language functionality
  const spokenLang = SPEAK.map((l) => (
    <LangButton
      key={l.id}
      name={l.name}
      comp={l.comp}
      verbal={l.verbal}
      isPressed={l.name === speak.name}
      setSpeak={setSpeak}
      />
  ))

  let speakDesc;
  if (speak === 0) {
    speakDesc = "";
  } else {
    speakDesc = `Comprehension proficiency: ${speak.comp}.\n Verbal/written proficiency: ${speak.verbal}.`;
  }

  return (
    <>
      {/* <nav class="navbar fixed-top bg-body-tertiary" id="nav-bar-custom">
        <div class="container-fluid">
          <div className="navbar-nav">
                <a class="nav-link acthttp://162.157.118.78:26357/gameive" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </nav> */}

      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary" id="nav-bar-custom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#home">Welcome!</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="#skills">Skills</a>
              <a class="nav-link" aria-current="page" href="#experience">Work Experience</a>
              <a class="nav-link" aria-current="page" href="#education">Education</a>
              <a class="nav-link" aria-current="page" href="#projects">Projects</a>
              <a class="nav-link" aria-current="page" href="#licenses">Licenses & Certifications</a>
              <a class="nav-link" aria-current="page" href="#volunteer">Volunteering</a>
              <a class="nav-link" aria-current="page" href="#interests">Interests</a>
            </div>
        </div>
      </nav> */}

      {/* <div id="nav-bar-custom">
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="default.asp">Work</a>
        </div>
        <div>
          <a href="default.asp">Education</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="default.asp">Licenses</a>
        </div>
      </div> */}
      

      <h1 id="home">Lee Nieves</h1>

      {/* Section: Biography */}
      <div className="bio">
        <div className="picture">
          <img src={picOfMe} className="picOfMe" alt="An incredibly flattering photo of Lee"></img>
        </div>
        <div className="text">
          <p>Hey, I'm Lee! I'm a recent University of Calgary graduate with a BSc in Computer Science with a concentration in Information Security 
            and a minor in Biological Sciences.</p>
          <p>I love programming and problem-solving. So far, my professional interests include software development, 
            software testing and quality assurance, and cybersecurity. </p>
          <p>For inquiries, feel free to reach out at <a href="mailto:Nieves.L@outlook.com" title="mailto:Nieves.L@outlook.com">Nieves.L@outlook.com</a>. 
            Also, check out my <i className="bi bi-github"></i> <a href="https://www.github.com/LI-Nieves" title="Redirect to github.com/LI-Nieves">
              GitHub</a> and <i className="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/lana-nieves/" title="Redirect to linkedin.com/in/lana-nieves/">
              LinkedIn</a>!</p>
        </div>    
      </div>

      {/* Section: Skills */}
      <h2 id="skills">Skills</h2>

      {/* Subsection: Programming languages */}
      <h3 className="skill title">Programming languages</h3>
      {langHelp}
      <br></br>
      {programmingLanguages}
      <br></br> <br></br>
      <span className="langDesc">{langDesc}</span>
      <br></br><br></br>

      {/* Subsection: Technical skills */}
      <h3 className="skill title">Technical skills</h3>
      <div className={techSkillLength}>
        {techSkills}
      </div>
      <br></br>

      {/* Subsection: Software */}
      <h3 className="skill title">Software</h3>
      <div className={softwareLength}>
        {softwareSkills}
      </div>
      <br></br>

      {/* Subsection: Languages */}
      <h3 className="skill title">Languages</h3>
      {spokenLang}
      <br></br><br></br>
      <span className="speakDesc">{speakDesc}</span>
      <br></br><br></br>


      <h2 id="experience">Work experience</h2>
      <h3 className="work title">Quality Assurance Automation Developer Intern</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-geo-alt-fill"></i> Synopsys &emsp;
          <i className="bi bi-calendar-date-fill"></i> May 2022 to Apr 2023, full-time
        </p>
      </h4>
      <ul className="work">
        <li>Developed on an automated UI software testing framework in Java with OpenCV, Tesseract OCR, and WinAppDriver for the Code Sight IDE plug-in for Visual Studio, IntelliJ, Visual Studio Code, and Eclipse</li>
        <li>Led 2 features as primary QA contact for 8 months: wrote test plan, triaged bugs, verified tickets, wrote tests</li>
        <li>Triaged and debugged 4+ regression test suites, conducted manual tests, and collaborated with developers</li>
      </ul>

      <h3 className="work title">Service Integration & Automation Intern</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-geo-alt-fill"></i> Husky Energy & Cenovus Energy &emsp;
          <i className="bi bi-calendar-date-fill"></i> Sep 2020 to Aug 2021, full-time
        </p>
      </h4>
      <ul className="work">
        <li>Oversaw all teams in IT, creating reports and dashboards to ensure efficient and cost-saving performance</li>
        <li>Saved the company ~$120k per month, worked in ServiceNow back-end to facilitate cross-company access </li>
      </ul>

      <h3 className="work title">Crew Member (Cashier)</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-geo-alt-fill"></i> Wendy’s &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jul 2017 to Aug 2020, part-time
        </p>
      </h4>

      <h3 className="work title">Special-needs Caregiver</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-geo-alt-fill"></i> Self-employed &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2016 to present, part-time
        </p>
      </h4>

      <h3 className="work title">Special-needs Martial Arts Instructor</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-geo-alt-fill"></i> Hydra Martial Arts &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2016 to Jun 2017, part-time
        </p>
      </h4>

      <h2 id="education">Education</h2>

      <h3 className="work title">B.Sc in Computer Science with Distinction and a minor in Biological Sciences</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-geo-alt-fill"></i> University of Calgary &emsp;
          <i className="bi bi-calendar-date-fill"></i> Sep 2017 to Apr 2023
        </p>
      </h4>
      <ul className="work">
        <li>Candidate of the Science Internship Program (two full-time, 12-month internships)</li>
        <li>Concentration in Information Security</li>
        <li>Cumulative GPA: 3.90/4.00</li>
        <li>Awards received: Lockhart Family Computer Science Award (2020), Faculty of Science’s Dean’s List (2018-2021), Jason Lang Scholarship (2018-2020), Undergraduate Merit Award (2018)</li>
        <li>Selected coursework: Data Structures and Algorithms, Networks Security, Computer Security, Operating Systems, Database Management Systems, Computing Machinery, Statistics</li>
      </ul>

      <h2 id="projects">Projects</h2>

      <h3 className="work title">Personal portfolio website</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed in HTML, CSS, JavaScript, Bootstrap library, and the React library &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2024 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/nieves-web-resume" title="https://github.com/LI-Nieves/nieves-web-resume">GitHub</a> &emsp;
          <i className="bi bi-link-45deg"></i> <a href="https://nieves.netlify.app" title="https://nieves.netlify.app">https://nieves.netlify.app</a>
        </p>
      </h4>
      <ul className="work">
        <li>It's the website that you're on right now!</li>
        <li>Worked independently on designing, developing, and documenting the website</li>
        <li>Used React components to improve code readability</li>
      </ul>

      <h3 className="work title">SpeeDine</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed in HTML, CSS, and the Blazor framework (C#) using object-oriented design &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2022 to Apr 2022 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/SpeeDine" title="https://github.com/LI-Nieves/SpeeDine">GitHub</a>
        </p>
      </h4>
      <ul className="work">
        <li>Web application that optimizes dining experience; allows customers to order items through the app and more</li>
        <li>Designed and implemented the UI with Task-Centered System Design principles and prototyping</li>
      </ul>

      <h3 className="work title">Randomness Generation research-based project</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed using .NET framework and Python &emsp;
          <i className="bi bi-calendar-date-fill"></i> Sep 2021 to Dec 2021 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/Can-Human-Gameplay-Extract-TRNG" title="https://github.com/LI-Nieves/Can-Human-Gameplay-Extract-TRNG">GitHub</a>
        </p>
      </h4>
      <ul className="work">
        <li>Determined whether human gameplay can be used to extract true randomness</li>
      </ul>

      {/* <h3 className="work title">Educational Waste website</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed using Django framework (Python) & HTML, CSS, JavaScript; connected to a Firebase database for CalgaryHacks 2021, 24h hack-a-thon &emsp;
          <i className="bi bi-calendar-date-fill"></i> Feb 2021 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/Garbage-Website" title="https://github.com/LI-Nieves/Garbage-Website">GitHub</a>
        </p>
      </h4>
      <ul className="work">
        <li>Web-based game developed to teach people how to properly recycle and compost</li>
      </ul> */}

      <h3 className="work title">Hotel Management website</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed using PHP, CSS, HTML, and JavaScript; connected to a MySQL database &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2021 to Apr 2021 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/hotel-mgmt-website" title="https://github.com/LI-Nieves/hotel-mgmt-website">GitHub</a>
        </p>
      </h4>
      <ul className="work">
        <li>Website with guest functionality (e.g., reserve room) and employee functionality (e.g., view room status)</li>
        <li>Prevented SQL injections while developing the back-end through secure coding practices </li>
      </ul>

      <h3 className="work title">Scholarship Manager software</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed in Java using object-oriented design &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2020 to Apr 2020 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/Scholarship-Manager" title="https://github.com/LI-Nieves/Scholarship-Manager">GitHub</a>
        </p>
      </h4>
      <ul className="work">
        <li>Software with student functionality (e.g., apply for scholarship) and delegator functionality (e.g., choose winner)</li>
        <li>Led the project by facilitating meetings and developing the entire back-end </li>
      </ul>

      <h3 className="work title">Immersive Emotica</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed in C# using the Unity Engine for Innovation4Health’s Health Hackathon 2019 &emsp;
          <i className="bi bi-calendar-date-fill"></i> Oct 2019 to Nov 2019 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/Emotional-Training-AR" title="https://github.com/LI-Nieves/Emotional-Training-AR">GitHub</a>
        </p>
      </h4>
      <ul className="work">
        <li>Created a 3D game that is an AR-based implementation of emotional training for children with autism</li>
        <li>Demonstrated quick learning and teamwork, learning the Unity Engine and how to apply AR into project</li>
      </ul>

      <h3 className="work title">Space Ranch</h3>
      <h4 className="work sub">
        <p>
          <i className="bi bi-gear-wide"></i> Developed in Java using object-oriented design &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2019 to Apr 2019 &emsp;
          <i className="bi bi-github"></i> <a href="https://github.com/LI-Nieves/Space-Ranch" title="https://github.com/LI-Nieves/Space-Ranch">GitHub</a>
        </p>
      </h4>
      <ul className="work">
        <li>A turn-based strategy game based on Into the Breach with a playable UI</li>
        <li>Implemented the UI and collaborated with those who worked on the back-end</li>
      </ul>

      <h2 id="licenses">Licenses & Certifications</h2>
      <h3 className="work title">ITIL® Foundation Certificate in IT Service Management</h3>
      <p className="work">
        <i className="bi bi-calendar-date-fill"></i> Apr 2021
      </p>

      <h2 id="volunteer">Volunteering</h2>

      <h3 className="work title">Campus volunteer</h3>
      <h4 className="work sub">
        <p>
        <i className="bi bi-geo-alt-fill"></i> University of Calgary &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jun 2017 to Jun 2018
        </p>
      </h4>

      <h3 className="work title">Martial arts instructor</h3>
      <h4 className="work sub">
        <p>
        <i className="bi bi-geo-alt-fill"></i> Hydra Martial Arts &emsp;
          <i className="bi bi-calendar-date-fill"></i> Jan 2016 to Jun 2017
        </p>
      </h4>

      <h3 className="work title">General volunteer</h3>
      <h4 className="work sub">
        <p>
        <i className="bi bi-geo-alt-fill"></i> Forester's &emsp;
          <i className="bi bi-calendar-date-fill"></i> Oct 2014 to Oct 2017
        </p>
      </h4>

      <h2 id="interests">Interests</h2>
      <p>PC building, video games, D&D, running/racing, crocheting, Rubik’s puzzles, sitcoms, anime, art, piano </p>

    </>
  )

}

export default App

