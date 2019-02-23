import  React  from 'react';


function HomeCard(){

  const nameCard={
    border: '2px grey solid',
    width: '400px',
    textAlign: 'center',
    fontFamily: 'impact',
    marginTop: '100px',
    marginLeft:'450px',
    borderRadius: '10px/50px/30px',
    background: 'rgba(211, 211, 211, 0.4)',
    fontFamily:'Garamond'    
  }
 
  const fontColor={
    color:'black'
  }

    return (     
      <div>
          <div style={nameCard}>

            <h4 style={fontColor}>Alex Garcia</h4>
           <h5 style={fontColor}>Junior Developer</h5>
           <hr/>
         </div>
      </div>     
    );
  }
  
  export default HomeCard;
   