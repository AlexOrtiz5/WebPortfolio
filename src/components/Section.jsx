import React from 'react';
// Change the CSS import path
import './Section.css';

const Section = ({ id, children }) => {
  return (
    <section id={id} className="section-container">
      {children}
    </section>
  );
};

export default Section;