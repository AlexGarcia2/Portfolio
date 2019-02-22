import React from 'react';

const card ={
    width:'400px',
    marginLeft: '100px',
    border:'5px solid #8EE3C7'
}

function CurrentProjects(){
  return (
    <div style={card}>
      <h4>Current Projects</h4>
      <div>

          <div>
              <h6>Ar Checkers</h6>
              <div>
                  <p>this is AR project im working on for board games on the go</p>
              </div>

          </div>
          
      </div>
    </div>
  );
}

export default CurrentProjects;
