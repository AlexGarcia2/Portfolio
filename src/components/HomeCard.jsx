import  React  from 'react';


function HomeCard(){

  const nameCard={
    border: '2px white solid',
    width: '400px',
    textAlign: 'center',
    fontFamily: 'impact',
    marginTop: '100px',
    marginLeft:'450px',
    borderRadius: '10px/50px/30px',
    boxShadow: ' 5px 5px black',   
    background: 'rgba(211, 211, 211, 0.2)',
    
    
  }
  const cardContent={
    position:'absolute'
  }

    return (     
      <div>
          <div style={nameCard}>

            <h4>Alex Garcia</h4>
            <h5>Junior Developer</h5>         
          </div>
      </div>     
    );
  }
  
  export default HomeCard;
   