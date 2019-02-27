import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const card ={
    width:'50%',
    marginLeft: '100px',
    marginTop:'100px',
    boxShadow:'3px 5px 8px #212121'
    
}

const cardContent={
    padding:'10px'
}

function CurrentProjects(){
  return (
    <div style={card}>
    <Card>
      <h4 style={cardContent}>Current Projects</h4>
      <CardContent>

          <div>
              <h6>Ar Checkers</h6>
              <div>
                  <p>this is AR project im working on for board games on the go people </p>
              </div>

          </div>
          
        </CardContent>
     </Card>
    </div>
  );
}

export default CurrentProjects;
