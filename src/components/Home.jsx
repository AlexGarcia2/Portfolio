import  React  from 'react';
import HomeCard from './HomeCard';
import VWBack from '../assets/VWBack.jpg';

function Home(){

 
  const card ={
    marginBottom:'200px'
  }

    return (
      <div >        
        <img src={VWBack}/>             
       <div sytle={card} ><HomeCard/></div>
      </div>
    );
  }
  
  export default Home;
   