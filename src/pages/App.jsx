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
      title: 'Simple React App',
      description: 'A small-scale React application to demonstrate proficiency in component-based UI development and state management.',
      link: 'https://github.com/your-username/project-repo-3'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'The very website you are viewing! Built from scratch using React, HTML, and CSS to showcase skills in modern front-end development.',
      link: 'https://github.com/your-username/project-repo-4'
    },
  ];

  // Content for the About Me page
  const aboutContent = (
    <div className="about-page-container">
      <div className="about-card-container">
        <div className="about-image-container">
          {/* Placeholder for the image. Replace with your actual image path. */}
          <img src="https://placehold.co/400x400/505050/FFFFFF?text=Your+Image" alt="Profile" className="about-image" />
        </div>
        <div className="about-text-container">
          <h1>More About Me</h1>
          <p>
            I am a dedicated Data Analyst with a passion for transforming complex data into actionable insights. My strong foundation in computer science, coupled with a minor in cybersecurity, allows me to approach data analysis with a comprehensive understanding of systems and security.
          </p>
          <p>
            My expertise lies in data cleansing, analysis, and visualization using tools like Python (Pandas, NumPy), SQL, and Tableau. I am constantly seeking to expand my knowledge and apply my skills to solve challenging real-world problems.
          </p>
          <p>
            In my spare time, I enjoy working on personal projects, which allows me to explore new technologies and refine my problem-solving skills.
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
          <h2 className="content-title">Information</h2>
          <hr className="horizontal-line" />
          <p className="content-paragraph">Programming languages I know: Python, SQL, JavaScript, HTML</p>
          <p className="content-paragraph">Projects I have done: To know more about the projects you could continue here.</p>
          <button onClick={() => setCurrentView('projects')} className="section-button">For more information, continue here</button>
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
              <p>example@email.com</p>
            </div>
            <div className="logo-item">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="logo" />
              </a>
              <p>LinkedIn</p>
            </div>
            <div className="logo-item">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
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