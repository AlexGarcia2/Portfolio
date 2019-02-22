import  React  from 'react';


function HomeCard(){

  const nameCard={
    // border: '2px white solid',
    width: '400px',
    textAlign: 'center',
    fontFamily: 'impact',
    marginTop: '100px',
    marginLeft:'450px',
    // borderRadius: '10px/50px/30px',
    boxShadow: 'inset 0 0 0 3000px',
    filter: 'blur(10px)',
    
    background: 'rgba(211, 211, 211, 0.3)',
    
    
  }
  const cardContent={
    position:'absolute'
  }

    return (     
      <div style={nameCard}>
        <div  >
          <div style={cardContent}>

            <h4>Alex Garcia</h4>
            <h5>Developer</h5>         
          </div>
        </div>
        <div>

        </div>


      </div>     
    );
  }
  
  export default HomeCard;
   