import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../../Styles.css';

function CurrentProjects(){
  return (
    <div className='currentCardProd'>
    <Card>
      <h4 className='cardContent'>Current Projects</h4>
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
