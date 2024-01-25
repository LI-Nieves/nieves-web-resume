import { useState } from 'react'
import picOfMe from './assets/me.png'
import './App.css'
import LangButton from './components/LangButton'
import Skill from './components/Skill'


function App(props) {
  // data
  const PROGRAM_LANG = props.program_lang;
  const TECH_SKILLS = props.tech_skills;

  // states
  const [lang, setLang] = useState(0);

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
  if (lang === 0) {
    langDesc = "";
  } else {
    langDesc = `Proficiency: ${lang.proficiency}. ${lang.desc}`;
  }

  // For tech skills functionality
  function makeSkills(type) {
    return TECH_SKILLS
      .filter((s) => s.type === type)
      .map((s) => (
        <Skill
          key={s.id}
          name={s.name}
          />
      ))
  }

  return (
    <>
      <h1>Lee Nieves</h1>

      <div className="bio">
        <div className="picture">
          <img src={picOfMe} className="picOfMe" alt="An incredibly flattering photo of Lee"></img>
        </div>
        <div className="text">
          <p>Hey, I'm Lee! I'm a recent University of Calgary graduate with a BSc in Computer Science with a concentration in Information Security 
            and a minor in Biological Sciences.</p>
          <p>I love programming and problem-solving. So far, my professional interests include software development, 
            software testing and quality assurance, and cybersecurity. </p>
          <p>For business inquiries, feel free to reach out at <a href="mailto:Nieves.L@outlook.com" title="mailto:Nieves.L@outlook.com">Nieves.L@outlook.com</a>. 
            Also, check out my <i className="bi bi-github"></i> <a href="https://www.github.com/LI-Nieves" title="Redirect to github.com/LI-Nieves">
              GitHub</a> and <i className="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/lana-nieves/" title="Redirect to linkedin.com/in/lana-nieves/">
              LinkedIn</a>!</p>
        </div>    
      </div>

      <h2>Skills</h2>

      <h3>Programming languages</h3>
      {programmingLanguages}
      <br></br> <br></br>
      <p className="progLangDesc">{langDesc}</p>


      <h3>Technical skills</h3>
      {/* Card source: https://getbootstrap.com/docs/5.3/components/card/ */}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div class="card-header">Testing</div>
                <ul class="list-group list-group-flush">
                  {makeSkills("testing")}
                </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">Development</div>
              <ul class="list-group list-group-flush">
                {makeSkills("dev")}
              </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">Others</div>
              <ul class="list-group list-group-flush">
                {makeSkills("others")}
              </ul>
          </div>
        </div>
      </div>
      <br></br>

      <h3>Software</h3>
      <ul className="doubleColumn">
        <li>Git</li>
        <li>Jira</li>
        <li>Windows</li>
        <li>macOS</li>
        <li>Linux</li>
        <li>Confluence</li>
        <li>Slack</li>
        <li>Package managers (npm)</li>
        <li>VMWare/virtual machines</li>
        <li>remote desktop</li>
        <li>VS Code</li>
        <li>IntelliJ</li>
        <li>Eclipse</li>
        <li>Visual Studio</li>
        <li>Postman</li>
        <li>Figma</li>
        <li>ServiceNow</li>
        <li>Spotfire</li>
        <li>Microsoft Office suite</li>
      </ul>

      <h3>Languages</h3>
      <ul>
        <li>English</li>
        <li>French</li>
        <li>Tagalog</li>
      </ul>

      <h2>Work experience</h2>
      <h3>Quality Assurance Automation Developer Intern</h3>
      <h4>Synopsys, full-time from May 2022 to April 2023</h4>
      <ul>
        <li>Developed on an automated UI software testing framework in Java with OpenCV, Tesseract OCR, and WinAppDriver for the Code Sight IDE plug-in for Visual Studio, IntelliJ, Visual Studio Code, and Eclipse</li>
        <li>Led 2 features as primary QA contact for 8 months: wrote test plan, triaged bugs, verified tickets, wrote tests</li>
        <li>Triaged and debugged 4+ regression test suites, conducted manual tests, and collaborated with developers</li>
      </ul>
      <h3>Service Integration & Automation Intern</h3>
      <h4>Husky Energy & Cenovus Energy, full-time from September 2020 to August 2021</h4>
      <ul>
        <li>Oversaw all teams in IT, creating reports and dashboards to ensure efficient and cost-saving performance</li>
        <li>Saved the company ~$120k per month, worked in ServiceNow back-end to facilitate cross-company access </li>
      </ul>
      <h3>Crew Member (Cashier)</h3>
      <h4>Wendy’s, part-time from July 2017 to August 2020</h4>
      <h3>Special-needs Caregiver</h3>
      <h4>Self-employed, full-time from January 2016 to present</h4>
      <h3>Special-needs Martial Arts Instructor</h3>
      <h4>Hydra Martial Arts, part-time from January 2016 to June 2017</h4>

      <h2>Education</h2>
      <h3>B.Sc in Computer Science with Distinction and a minor in Biological Sciences</h3>
      <h4>University of Calgary, from September 2017 to April 2023</h4>
      <ul>
        <li>Candidate of the Science Internship Program (two full-time, 12-month internships)</li>
        <li>Concentration in Information Security</li>
        <li>Cumulative GPA: 3.90/4.00</li>
        <li>Awards received: Lockhart Family Computer Science Award (2020), Faculty of Science’s Dean’s List (2018-2021), Jason Lang Scholarship (2018-2020), Undergraduate Merit Award (2018)</li>
        <li>Selected coursework: Data Structures and Algorithms, Networks Security, Computer Security, Operating Systems, Database Management Systems, Computing Machinery, Statistics</li>
      </ul>

      <h2>Notable projects and hack-a-thons</h2>
      <h3>SpeeDine</h3>
      <h4>Developed in HTML, CSS, and the Blazor framework (C#) using object-oriented design, from Jan 2022 to April 2022</h4>
      <ul>
        <li>Web application that optimizes dining experience; allows customers to order items through the app and more</li>
        <li>Designed and implemented the UI with Task-Centered System Design principles and prototyping</li>
      </ul>
      <h3>Hotel Management website</h3>
      <h4>Developed using PHP, CSS, HTML, and JavaScript; connected to a MySQL database</h4>
      <ul>
        <li>Website with guest functionality (e.g., reserve room) and employee functionality (e.g., view room status)</li>
        <li>Prevented SQL injections while developing the back-end through secure coding practices </li>
      </ul>

      <h2>LICENSES & CERTIFICATIONS</h2>
      <h3>ITIL® Foundation Certificate in IT Service Management</h3>
    </>
  )

// Old programming languages
      {/* <ul className="doubleColumn">
      <li>Python</li>
      <li>Java</li>
      <li>C++</li>
      <li>C</li>
      <li>C#</li>
      <li>SQL</li>
      <li>PHP</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>ARMv8-A64</li>
    </ul> */}

// Old technical skills
      {/* <div className="icons">
        <div>
        <h4>Testing-related</h4>
        <ul>
          <li>Automated software testing</li>
          <li>Manual testing</li>
          <li>Selenium WebDriver</li>
          <li>Test plan creation</li>
          <li>Testing documentation</li>
        </ul>
        </div>
        <div>
        <h4>Development</h4>
        <ul>
          <li>React</li>
          <li>.NET</li>
          <li>Unity engine</li>
          <li>REST API</li>
          <li>Relational databases</li>
          <li>Socket programming</li>
          <li>Secure coding practices</li>
        </ul>
        </div>
        <div>
        <h4>Others</h4>
        <ul>
          <li>Networks knowledge</li>
          <li>Cryptography</li>
          <li>Agile/Scrum</li>
          <li>Behavior-driven development</li>
        </ul>
        </div>
        

      </div> */}

// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )

}

export default App

