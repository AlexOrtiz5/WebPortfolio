import React from 'react';

const Header = () => {
    return (
        <header style={{position: 'sticky', top: 0, zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '10px'}}>
        <h1 style={{marginRight: 'auto', flexGrow: 1}}>Alex A. Ortiz Cotto</h1>
        <nav style={{display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
            <a href="#About" style={{padding: '10px', fontSize: '20px', color: 'black', textDecoration: 'none'}}>About</a>
            <a href="#Projects" style={{padding: '10px', fontSize: '20px', color: 'black', textDecoration: 'none'}}>Projects</a>
            <a href="#Contacts" style={{padding: '10px', fontSize: '20px', color: 'black', textDecoration: 'none'}}>Contacts</a>
        </nav>
        </header>
    );
};

export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header style={{position: 'sticky', top: 0, zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '10px'}}>
//       <h1 style={{marginRight: 'auto', flexGrow: 1}}>Alex A. Ortiz Cotto</h1>
//       <nav style={{display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
//         <Link to="/" style={{padding: '10px', fontSize: '20px', color: 'black', textDecoration: 'none'}}>About</Link>
//         <Link to="#" style={{padding: '10px', fontSize: '20px', color: 'black', textDecoration: 'none'}}>Projects</Link>
//         <Link to="#" style={{padding: '10px', fontSize: '20px', color: 'black', textDecoration: 'none'}}>Contacts</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;