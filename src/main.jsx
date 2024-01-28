import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PROGRAM_LANG = [
  { id: "pl-01", name: "Java", proficiency: "Confident", desc: "Used at Synopsys and for several projects."},
  { id: "pl-02", name: "Python", proficiency: "Confident", desc: "Python description."},
  { id: "pl-03", name: "C++", proficiency: "Capable", desc: "C++ description."},
  { id: "pl-04", name: "C", proficiency: "Capable", desc: "C description."},
  { id: "pl-05", name: "C#", proficiency: "Comfortable", desc: "C# description."},
  { id: "pl-06", name: "SQL", proficiency: "Comfortable", desc: "SQL description."},
  { id: "pl-07", name: "PHP", proficiency: "Comfortable", desc: "PHP description."},
  { id: "pl-08", name: "Haskell", proficiency: "Capable", desc: "Haskell description."},
  { id: "pl-09", name: "HTML", proficiency: "Comfortable", desc: "HTML description."},
  { id: "pl-10", name: "CSS", proficiency: "Comfortable", desc: "CSS description."},
  { id: "pl-11", name: "JavaScript", proficiency: "Comfortable", desc: "JavaScript description."},
  { id: "pl-12", name: "ARMv8", proficiency: "Capable", desc: "ARMv8 description."},
  { id: "pl-13", name: "LaTeX", proficiency: "Confident", desc: "LaTeX description."},
]

const TECH_SKILLS = [
  { id: "ts-01", name: "Automated software testing", type: "testing"},
  { id: "ts-02", name: "Manual testing", type: "testing"},
  { id: "ts-03", name: "Selenium WebDriver", type: "testing"},
  { id: "ts-04", name: "Test plan creation", type: "testing"},
  { id: "ts-05", name: "Testing documentation", type: "testing"},
  { id: "ts-06", name: "React", type: "dev"},
  { id: "ts-07", name: ".NET", type: "dev"},
  { id: "ts-08", name: "Unity engine", type: "dev"},
  { id: "ts-09", name: "REST API", type: "dev"},
  { id: "ts-10", name: "Relational databases", type: "dev"},
  { id: "ts-11", name: "Socket programming", type: "dev"},
  { id: "ts-12", name: "Secure coding practices", type: "dev"},
  { id: "ts-13", name: "Networks knowledge", type: "others"},
  { id: "ts-14", name: "Cryptography", type: "others"},
  { id: "ts-15", name: "Agile/Scrum", type: "others"},
  { id: "ts-16", name: "Behavior-driven development", type: "others"},
]

const SOFTWARE = [
  { id: "sw-01", name: "Git", type: "dev"},
  { id: "sw-02", name: "Jira", type: "collab"},
  { id: "sw-03", name: "Windows", type: "os"},
  { id: "sw-04", name: "macOS", type: "os"},
  { id: "sw-05", name: "Linux", type: "os"},
  { id: "sw-06", name: "Confluence", type: "collab"},
  { id: "sw-07", name: "Slack", type: "collab"},
  { id: "sw-08", name: "Package managers (npm)", type: "dev"},
  { id: "sw-09", name: "VMWare/virtual machines", type: "testing"},
  { id: "sw-10", name: "Remote desktop", type: "testing"},
  { id: "sw-11", name: "VS Code", type: "dev"},
  { id: "sw-12", name: "IntelliJ", type: "dev"},
  { id: "sw-13", name: "Eclipse", type: "dev"},
  { id: "sw-14", name: "Visual Studio", type: "dev"},
  { id: "sw-15", name: "Postman", type: "testing"},
  { id: "sw-16", name: "Figma", type: "others"},
  { id: "sw-17", name: "ServiceNow", type: "others"},
  { id: "sw-18", name: "Spotfire", type: "others"},
  { id: "sw-19", name: "Microsoft Office suite", type: "others"},
]

const SPEAK = [
  { id: "sk-01", name: "English", comp: "Fluent", verbal: "Fluent" },
  { id: "sk-02", name: "French", comp: "Intermediate", verbal: "Intermediate" },
  { id: "sk-03", name: "Tagalog (Filipino)", comp: "Fluent", verbal: "Basic" },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App program_lang={PROGRAM_LANG} tech_skills={TECH_SKILLS} software={SOFTWARE} speak={SPEAK}/>
  </React.StrictMode>,
)
