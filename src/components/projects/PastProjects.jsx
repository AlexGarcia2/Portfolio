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
              <h6>Urban Farmer</h6>
              <div>
                  <p>App built to connect people with home gardens or farms to sell of share produce with in the comunity. </p>
                  <a>Urban Farmer github</a>
              </div>
          </div>
          
        </CardContent>
     </Card>
    </div>
  );
}

export default PastProjects;
