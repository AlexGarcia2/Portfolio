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
              <h6>Labor Tracker</h6>
              <div>
                  <p>A Labor tracking app for a small company. Allowing the employees to clock in and out and see daily task and all so be able to see time of labor hours. Which gives company owner total hours work and payable hours owed</p>

                  <a>Larbor Tracker GitHub</a>
              </div>

          </div>
          
        </CardContent>
     </Card>
    </div>
  );
}

export default CurrentProjects;
