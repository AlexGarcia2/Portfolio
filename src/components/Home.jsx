import  React  from 'react';

function Home(){

  const nameCard={
    border: '2px white solid',
    width: '400px',
    textAlign: 'center',
    fontFamily: 'impact',
    marginTop: '100px',
    marginLeft:'450px',
    borderRadius: '10px/50px/30px'
  }

    return (
      <div style={nameCard}>
       <h4>Alex Garcia</h4>
       <h5>Developer</h5>
      </div>
    );
  }
  
  export default Home;
   