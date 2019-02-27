import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const card ={
    width:'50%',
    marginLeft:'100px',
    marginTop:'50px',
    boxShadow:'3px 5px 8px #212121'

}

const cardContent={
    padding:'10px'
}

function Art(){
  return (
    <div style={card}>
    <Card>
      <h4 style={cardContent}>Gallery</h4>
      <CardContent>

          <div>
              
              <div>
                  <p>put carosel here </p>
              </div>

          </div>
          
        </CardContent>
     </Card>
    </div>
  );
}

export default Art;