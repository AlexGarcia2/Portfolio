import React from 'react';
import Grid from '@material-ui/core/Grid';
import CurrentProjects from './CurrentProjects';
import PastProjects from './PastProjects';


function Project(){
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
         <CurrentProjects/>
        </Grid>
        <Grid item xs={12}>
         <PastProjects/> 
        </Grid>
       </Grid>
    </div>
  );
}

export default Project;
