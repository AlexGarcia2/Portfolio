import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import WorkExperience from './workExperience/WorkExperience';
import Project from './projects/Project';
import Interests from './interests/Interests';
import Education from './education/Education';
import background from '../assets/background.jpg'




function App(){
  return (
    <div>
      <img src={background}/>    
      <div>
        <Header/>       
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/workExperience' component={WorkExperience} />
            <Route path='/Project' component={Project} />
            <Route path='/Interests' component={Interests} />
            <Route path='/Education' component={Education} />
            <Route component={Error404} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
