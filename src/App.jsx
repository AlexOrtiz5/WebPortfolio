import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Section from './Section';
import dragon from './dragon-knight-armor.png';
import programming from './Programming-Languages.jpg';
import emailLogo from './email.png';
import linkedinLogo from './linkedin.png';
import githubLogo from './GitHub.png';

function App() {
  const navigate = useNavigate();
  return (
    <div>
        <Header />
        <Section id='About'>
          <img src={dragon} alt="About me" style={styles.circle}/>
          <div>
              <h2 style={styles.content}>Who am I</h2>
              <hr style={styles.horizontalLine} />
              <p style={styles.content}>Data Analyst - Python | Panda | SQL | Tableau</p>
              <p1>I'm a Data Analyst with experience in computer science. Although I do have some knowledge in data scraping, my main competence is in data analysis and cleansing. I know a little bit about everything because I have a bachelor's degree in computer science and a minor in cybersecurity.</p1>
              <p>For more information continue here <button onClick={() => navigate('/about')}>More About Me</button> {/* Add this button */}</p>
              
          </div>
        </Section>
        <Section id='Projects'>
          <div>
            <h2 style={styles.content}>Information</h2>
            <hr style={styles.horizontalLine} />
            <p>Programming languages I know: Python, SQL, JavaScript, HTML</p>
            <p1>Proyects I have done: To know more about the proyects you could continue here.</p1> 
            <p>For more information continue here <button onClick={() => navigate('/project')}>View Projects</button> {/* Add this button */}</p>
            
          </div>
          <img src={programming} alt="Languages" style={styles.square}/>
        </Section>
        <Section id='Contacts'>
          <div style={styles.contactContainer}>
            <h2>Contact</h2>
            <hr style={styles.horizontalLine} />
            <div style={styles.logoContainer}>
              <div style={styles.logoItem}>
                <img src={emailLogo} alt="Email" style={styles.logo} />
                <p>alexortizcotto0@gmail.com</p>
              </div>
              <div style={styles.logoItem}>
                <a href="www.linkedin.com/in/alexortiz5" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" style={styles.logo} />
                </a>
                <p>alexortiz5</p>
              </div>
              <div style={styles.logoItem}>
                <a href="https://github.com/AlexOrtiz5" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" style={styles.logo} />
                </a>
                <p>AlexOrtiz5</p>
              </div>
            </div>
          </div>
        </Section>
    </div>
  )
}

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
      width: '150px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '20px'
  },
  square: {
    width: '400px',
    height: '200px', // same as width to make the image square
    objectFit: 'cover',
    marginLeft: '20px'
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  logoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  button: {
      backgroundColor: '#ADD8E6',
      padding: '5px',
      border: 'none',
      cursor: 'pointer',
      alignSelf: 'flex-end',
      marginTop: 'auto'
  },
  horizontalLine: {
    width: '100%', // This will make the line stretch across the full width of the section
    border: '0',
    height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
  }
};

export default App
