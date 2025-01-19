import React from 'react';

const About = () => {
  return (
    <div>
      <h1>Alex A. Ortiz Cotto</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <img src={dragon} alt="Profile Picture" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
        </div>
        <div style={{ paddingLeft: '20px' }}>
          <h2>About Me</h2>
          <p>
            I'm a Data Analyst with experience in computer science. Although I do have some knowledge in data scraping, my main competence is in data analysis and cleansing. I know a little bit about everything because I have a bachelor's degree in computer science and a minor in cybersecurity.
          </p>
          {/* Add more information about yourself here */}
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const About = () => {
//   return (
//     <div>
//       <h2>More About Me</h2>
//       <p>Here is more information about me...</p>
//       <Link to="/">Back to Home</Link>
//     </div>
//   );
// };

// export default About;