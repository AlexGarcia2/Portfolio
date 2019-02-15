import React from 'react';
import {Button, Icon} from 'react-materialize'
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
    <Button waves='light'><Link to="/">Home</Link></Button>
    <Button waves='light'><Link to="/workExperience">WorkExperience</Link><Icon left>cloud</Icon></Button>
    <Button waves='light'><Link to="/Project">Project</Link><Icon right>cloud</Icon></Button>
    </div>
  );
}

export default Header;
