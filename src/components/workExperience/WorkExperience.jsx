import React from 'react';
import CurrentCareer from './CurrentCareer';
import LastCareer from './LastCareer';
import '../../Styles.css';

function WorkExperience(){
  return (
    <div>
      <div className=''>
       <CurrentCareer/>
      </div>
      <div className=''>
       <LastCareer/>
      </div>
    </div>
  );
}

export default WorkExperience;
