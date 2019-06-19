import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function PastProjects(){
  return (
    <div className='pastCardProj'>
    <Card>
      <h4 className='cardContent'>past projects</h4>
      <CardContent>
          <div>
              <h6>master mind</h6>
              <div>
                  <p>this is AR project im working on for board games on the go people </p>
              </div>
          </div>
          
        </CardContent>
     </Card>
    </div>
  );
}

export default PastProjects;
