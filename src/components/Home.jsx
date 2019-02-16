import  React  from 'react';

function Home(){

  const nameCard={
    border: '2px white solid',
    width: '400px',
    textAlign: 'center',
    fontFamily: 'impact',
    positon: 'relitive',
    right: '400px'
  }

    return (
      <div style={nameCard}>
       <h2>ALex Garcia</h2>
       <h3>Junior Developer</h3>
      </div>
    );
  }
  
  export default Home;
   