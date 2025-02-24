import React, { useEffect } from 'react';

function Blue() {
  useEffect(() => {
    document.body.style.backgroundColor = 'blue';
    return () => {
      document.body.style.backgroundColor = ''; // Reset background when leaving the route
    };
  }, []);

  return (
    <div>
      <h1>Blue Page</h1>
    </div>
  );
}

export default Blue;

  
  