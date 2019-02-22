import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// const card ={
//     width:'400px',
//     marginLeft: '100px',
//     border:'5px solid #8EE3C7'
// }

function CurrentProjects(){
  return (
    <div>
    <Card>
      <h4>Current Projects</h4>
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
