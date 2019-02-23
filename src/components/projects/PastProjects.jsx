import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const card ={
    width:'50%',
    float:'right',
    marginTop:'100px',
    marginRight:'100px'
}

const cardContent={
    padding:'10px'
}

function PastProjects(){
  return (
    <div style={card}>
    <Card>
      <h4 style={cardContent}>past projects</h4>
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
