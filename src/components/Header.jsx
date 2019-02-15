import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/">Home</Link> | <Link to="/workExperience">WorkExperience</Link> | <Link to="/Project">Project</Link> | <Link to="/Interests">Interests</Link> | <Link to="/Education">Education</Link>
    </div>
  );
}

export default Header;
