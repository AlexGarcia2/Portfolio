import React from 'react';
import {Button} from 'react-materialize';
import { Link, Icon } from 'react-router-dom';


function Header(){
  
   const toolBar = {
     margin : '50px',
     border: '2px black solid',
     padding: '20px'     
   }

  const bottonColor ={
    color: 'black',
  }


  return (
    <div style={toolBar} >
    <Button waves='light' className='blue-grey lighten-4'><Link to="/" style={bottonColor}>Home</Link></Button>     
    <Button waves='light' className='blue-grey lighten-4'><Link to="/workExperience" style={bottonColor}>WorkExperience</Link></Button>
    <Button waves='light' className='blue-grey lighten-4'><Link to="/Project" style={bottonColor}>Project</Link></Button>
    <Button waves='light' className='blue-grey lighten-4'><Link to="/Interests" style={bottonColor}>Interests</Link></Button>
    <Button waves='light' className='blue-grey lighten-4'><Link to="/Education" style={bottonColor}>Education</Link></Button>
    </div>
  );
}

export default Header;
