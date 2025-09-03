import React, { useState } from 'react';
// Change these imports to point to the new locations
import Header from '../components/Header.jsx';
import Section from '../components/Section.jsx';
import './App.css';
// The image imports also need to be updated to the new assets/images directory
import dragon from '../images/dragon-knight-armor.png';
import programming from '../images/Programming-Languages.jpg';
import emailLogo from '../images/email.png';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/GitHub.png';

const App = () => {
  // Use state to track the current view: 'home', 'about', 'projects', or 'skills'.
  const [currentView, setCurrentView] = useState('home');

  // New: Separate project data into categories for better organization.
  const dataAnalyticsProjects = [
    {
      id: 1,
      title: 'Themes, Prices, and the Evolution of Sets',
      description: 'A thorough analysis of LEGO set prices using two datasets. The project investigated themes, materials, and partnerships to understand the intricate factors influencing pricing mechanics in the LEGO industry. (Technologies: Python, Pandas, Matplotlib)',
      link: 'https://github.com/AlexOrtiz5/Project-1' // Replace with your actual GitHub link
    },
    {
      id: 2,
      title: 'Vanguard A/B Test Analysis',
      description: 'Analyzed Vanguard\'s A/B testing using three key datasets. Conducted exploratory data analysis with Python to find patterns and connections, ensuring data integrity for accurate findings. (Technologies: Python, MySQL, Tableau, Pandas, Matplotlib, Seaborn)',
      link: 'https://github.com/AlexOrtiz5/vanguard-ab-test' // Replace with your actual GitHub link
    },
    {
      id: 3,
      title: 'Game Insights: Analyzing Popularity, Platforms, and User Feedback',
      description: 'Investigated the relationships between game popularity, platform accessibility, Metacritic scores, and user reviews to get actionable data. The goal was to help industry stakeholders enhance their game success strategies. (Technologies: Python, MySQL, Tableau, Pandas, Scikit-Learn)',
      link: 'https://github.com/AlexOrtiz5/Games-Study' // Replace with your actual GitHub link
    },
  ];
  
  const webDevProjects = [
    {
      id: 4,
      title: 'Web Portfolio',
      description: 'A professional, single-page portfolio built with React to showcase skills and experience as a data analyst. It serves as a comprehensive digital resume with dynamic content views.',
      link: 'https://github.com/AlexOrtiz5/WebPortfolio' // Replace with your actual GitHub link
    },
    {
      id: 5,
      title: 'Project-P',
      description: 'A personal, single-page web application designed as a streamlined digital workspace for a specific multi-step creative process. It features a dynamic, user-centric interface with specialized utilities.',
      link: 'https://github.com/AlexOrtiz5/project-p' // Replace with your actual GitHub link
    },
  ];

  // Content for the About Me page
  const aboutContent = (
    <div className="about-page-container">
      <div className="about-card-container">
        <div className="about-image-container">
          {/* Placeholder for the image. Replace with your actual image path. */}
          <img src="../images/dragon-knight-armor.png" alt="Profile" className="about-image" />
        </div>
        <div className="about-text-container">
          <h1>Hi there 👋</h1>
          <p>
            I'm a Data Analyst with experience in computer science. Although I do have some knowledge in data scraping, my main competence is in data analysis and cleansing. I know a little bit about everything because I have a bachelor's degree in computer science and a minor in cybersecurity.
          </p>
          <h2>A little about me</h2>
          <p>
            Being a dedicated, flexible, and caring person who can function effectively both alone and in a group gives me a tremendous deal of satisfaction. I was born in Puerto Rico.
          </p>
          <h2>Work Experience:</h2>
          <p>
            I was helping my mentor, a professor from the University of Pittsburgh, analyze and try to identify a relationship with the data that was provided to me in order to try and support a theory that they had. They also required help generating some graphs, cleaning up the data, and writing a Python function that included all of that information.
          </p>
          <h2>Where did I study</h2>
          <p>
            I just finished a virtual three-month Ironhack Miami bootcamp from Puerto Rico. It was a bootcamp for data analytics with an emphasis on Python, SQL, Pandas, and Tableau for data analysis and interactive graph creation. Finally, Tableau presented the data in an interactive fashion, and MySQL was used to use the clean data more efficiently. My decision to enroll in the data analytics program stemmed from my desire to learn more about developing my skills. I think it's something I'd like to achieve to pursue this career route.
          </p>
          <p>
            Prior to that, I had just received my degree in computer science with a cybersecurity minor from the University of Puerto Rico, Rio Piedras.
          </p>
        </div>
      </div>
      <button onClick={() => setCurrentView('home')} className="back-to-home-button">Back to Home</button>
    </div>
  );

  // Content for the Projects page
  // This section is now split into two categories.
  const projectsContent = (
    <div className="projects-page-container">
      <h1>My Projects</h1>
      <hr className="projects-line" />
      
      <h2>Data Analytics Projects</h2>
      <div className="projects-grid">
        {dataAnalyticsProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
      
      <h2>Web Development Projects</h2>
      <div className="projects-grid">
        {webDevProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
      
      <button onClick={() => setCurrentView('home')} className="projects-back-button">Back to Home</button>
    </div>
  );
  
  // New content for the Programming Skills page
  const skillsContent = (
    <div className="skills-page-container">
      <h1>My Technical Skills</h1>
      <hr className="skills-line" />
      <div className="skills-content-grid">
        <div className="skills-card">
          <h2>Programming Languages</h2>
          <ul className="skills-list">
            <li>Python</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="skills-card">
          <h2>Software & Programs</h2>
          <ul className="skills-list">
            <li>Tableau</li>
            <li>Power BI</li>
            <li>Git / GitHub</li>
            <li>VS Code</li>
            <li>Microsoft Office Suite</li>
          </ul>
        </div>
        <div className="skills-card">
          <h2>Operating Systems</h2>
          <ul className="skills-list">
            <li>Windows</li>
            <li>macOS</li>
            <li>Linux (Ubuntu, Debian)</li>
          </ul>
        </div>
      </div>
      <button onClick={() => setCurrentView('home')} className="skills-back-button">Back to Home</button>
    </div>
  );

  // The main homepage content
  const homeContent = (
    <>
      {/* About Section */}
      <Section id="about">
        <img src={dragon} alt="About me" className="circle" />
        <div className="section-content">
          <h2 className="content-title">Who am I</h2>
          <hr className="horizontal-line" />
          <p className="content-paragraph">Data Analyst - Python | Panda | SQL | Tableau</p>
          <p className="content-paragraph">
            I'm a Data Analyst with experience in computer science. Although I do have some knowledge in data scraping, my main competence is in data analysis and cleansing. I know a little bit about everything because I have a bachelor's degree in computer science and a minor in cybersecurity.
          </p>
          <button onClick={() => setCurrentView('about')} className="section-button">For more information, continue here</button>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="section-content">
          <h2 className="content-title">Projects</h2>
          <hr className="horizontal-line" />
          <p className="content-paragraph">This section showcases my data analysis and web development projects, providing a glimpse into my skills and past work.</p>
          <button onClick={() => setCurrentView('projects')} className="section-button">View My Projects</button>
        </div>
        <img src={programming} alt="Languages" className="square" />
      </Section>
      
      {/* New Skills Section */}
      <Section id="skills">
        <div className="section-content">
          <h2 className="content-title">Technical Skills</h2>
          <hr className="horizontal-line" />
          <p className="content-paragraph">I am proficient in several programming languages and a variety of software and operating systems.</p>
          <button onClick={() => setCurrentView('skills')} className="section-button">View all my skills</button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contacts">
        <div className="contact-container">
          <h2 className="content-title">Contact</h2>
          <hr className="horizontal-line" />
          <div className="logo-container">
            <div className="logo-item">
              <img src={emailLogo} alt="Email" className="logo" />
              <p>alexortizcotto0@gmail.com</p>
            </div>
            <div className="logo-item">
              <a href="https://www.linkedin.com/in/alexortiz5" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="logo" />
              </a>
              <p>LinkedIn</p>
            </div>
            <div className="logo-item">
              <a href="https://github.com/AlexOrtiz5" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="logo" />
              </a>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );

  // Conditionally render the correct content based on the state
  return (
    <div className="app-container">
      <Header />
      {currentView === 'home' && homeContent}
      {currentView === 'about' && aboutContent}
      {currentView === 'projects' && projectsContent}
      {currentView === 'skills' && skillsContent}
    </div>
  );
};

export default App;