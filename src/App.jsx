import { useState } from 'react'
import picOfMe from './assets/me.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LangButton from './components/LangButton'


function App() {
  // const PROGRAM_LANG = [("Java","a"), ("Python","b"), ("C++","q"), ("C","w"), ("C#","e"), 
  //   ("SQL","r"), ("PHP","t"), ("Haskell","y"), ("HTML","u"), ("CSS","i"), ("JavaScript","o"), ("ARMv8-A64","p")];
  const PROGRAM_LANG = [
    { id: "01", name: "Java", proficiency: 5, desc: "Java description."},
    { id: "02", name: "Python", proficiency: 5, desc: "Python description."},
    { id: "03", name: "C++", proficiency: 3, desc: "C++ description."},
    { id: "04", name: "C", proficiency: 3, desc: "C description."},
    { id: "05", name: "C#", proficiency: 4, desc: "C# description."},
    { id: "06", name: "SQL", proficiency: 4, desc: "SQL description."},
    { id: "07", name: "PHP", proficiency: 4, desc: "PHP description."},
    { id: "08", name: "Haskell", proficiency: 3, desc: "Haskell description."},
    { id: "09", name: "HTML", proficiency: 4, desc: "HTML description."},
    { id: "10", name: "CSS", proficiency: 4, desc: "CSS description."},
    { id: "11", name: "JavaScript", proficiency: 4, desc: "JavaScript description."},
    { id: "12", name: "ARMv8", proficiency: 3, desc: "ARMv8 description."},
  ]
  const [lang, setLang] = useState(0);

  const programmingLanguages = PROGRAM_LANG.map((lang) => (
    <LangButton
      key={lang.id}
      name={lang.name}
      proficiency={lang.proficiency}
      desc={lang.desc}
      setLang={setLang}
      />
  ))

  let langDesc;
  if (lang === 0) {
    langDesc = "";
  } else {
    langDesc = `Proficiency: ${lang.proficiency}/5. ${lang.desc}`;
  }

  return (
    <>
      <h1>Lee Nieves</h1>

      {/* <div className="icons">
        <div>Email</div>
        <div>GitHub</div>
        <div>LinkedIn</div>
      </div> */}

      <div className="bio">
        <div className="picture">
          <img src={picOfMe} className="picOfMe" alt="An incredibly flattering photo of Lee"></img>
        </div>
        <div className="text">
          <p>Hey, I'm Lee! I'm a recent University of Calgary graduate with a BSc in Computer Science with a concentration in Information Security 
            and a minor in Biological Sciences.</p>
          <p>I love programming and problem-solving. So far, my professional interests include software development, 
            software testing and quality assurance, and cybersecurity. </p>
          <p>Reach out at <a href="mailto:Nieves.L@outlook.com" title="mailto:Nieves.L@outlook.com">Nieves.L@outlook.com</a>. 
            Also, check out my <i class="bi bi-github"></i> <a href="https://www.github.com/LI-Nieves" title="Redirect to github.com/LI-Nieves">GitHub</a> and <i class="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/lana-nieves/" title="Redirect to linkedin.com/in/lana-nieves/">LinkedIn</a>!</p>
          <p>
          
          </p>
        </div>    
      </div>


      <h2>Skills</h2>

      <h3>Programming languages</h3>
      {programmingLanguages}
      <br></br> <br></br>
      <p>{langDesc}</p>
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

      <h3>Technical skills</h3>
      <div className="icons">
        <div>
        <h4>Quality assurance-related</h4>
        <ul>
          <li>Automated software testing</li>
          <li>Manual testing</li>
          <li>Selenium WebDriver</li>
          <li>Test plan creation</li>
          <li>Testing documentation</li>
        </ul>
        </div>
        <div>
        <h4>Frameworks?</h4>
        <ul>
          <li>React</li>
          <li>.NET</li>
          <li>Unity engine</li>
        </ul>
        </div>
        <div>
        <h4>Others</h4>
        <ul>
          <li>REST API</li>
          <li>Relational databases</li>
          <li>Socket programming</li>
          <li>Networks knowledge</li>
          <li>Secure coding practices</li>
          <li>Cryptography</li>
          <li>Agile/Scrum</li>
          <li>Behavior-driven development</li>
        </ul>
        </div>
        

      </div>


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

    </>
  )

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

