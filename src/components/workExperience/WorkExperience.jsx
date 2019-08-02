import React from 'react';
import CurrentCareer from './CurrentCareer';
import LastCareer from './LastCareer';
import Volunteer from './Volunteer';
import '../../Styles.css';

function WorkExperience(){
  return (
    <div>
      <div className='cardBorder'>
       <CurrentCareer/>
      </div>
      <div className='cardBorder'>
       <LastCareer/>
      </div>
      <div className='cardBorder'>
       <Volunteer/>
      </div>
    </div>
  );
}

export default WorkExperience;
