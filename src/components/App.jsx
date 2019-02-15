import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import WorkExperience from './workExperience/WorkExperience';
import Project from './projects/Project';


function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/workExperience' component={WorkExperience} />
          <Route exact path='/Project' component={Project} />
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Home} />
          <Route component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
