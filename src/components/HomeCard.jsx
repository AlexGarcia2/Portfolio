import  React  from 'react';
import '../Styles.css';

function HomeCard(){


  const fontColor={
    color:'black'
  }

    return (     
      <div>
          <div className='nameCard'>
            <h4 style={fontColor}>Alex Garcia</h4>
           <h5 style={fontColor}> Developer</h5>
           <hr/>
         </div>
      </div>     
    );
  }
  
  export default HomeCard;
   