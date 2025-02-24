import React, { useEffect } from 'react';

function Red() {
  useEffect(() => {
    document.body.style.backgroundColor = 'red';
    return () => {
      document.body.style.backgroundColor = ''; // Reset background when leaving the route
    };
  }, []);

  return (
    <div>
      <h1>Red Page</h1>
    </div>
  );
}

export default Red;
