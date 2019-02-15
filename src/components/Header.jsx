import React from 'react';
import {Button} from 'react-materialize';
import { Link } from 'react-router-dom';


function Header(){
  
   const toolBar = {
     margin : '50px'
   }

  const bottonColor ={
    color: 'white'
  }


  return (
    <div style={toolBar} >
    <Button waves='light' className='green'><Link to="/" style={bottonColor}>Home</Link></Button>
    <Button waves='light' className='#ffbd00'><Link to="/workExperience" style={bottonColor}>WorkExperience</Link></Button>
    <Button waves='light' className='#ffbd00'><Link to="/Project" style={bottonColor}>Project</Link></Button>
    <Button waves='light' className='#ffbd00'><Link to="/Interests" style={bottonColor}>Interests</Link></Button>
    <Button waves='light' className='#ffbd00'><Link to="/Education" style={bottonColor}>Education</Link></Button>
    </div>
  );
}

export default Header;
