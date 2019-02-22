import  React  from 'react';
import HomeCard from './HomeCard';
import VWBack from '../assets/VWBack.jpg';

function Home(){

  

    return (
      <div>        
        <HomeCard/>
        <img src={VWBack}/>             
      </div>
    );
  }
  
  export default Home;
   