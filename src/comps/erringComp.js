import React from 'react';

const ErringComponent = () => {
  throw new Error('Someting went wrong with your code!');
  return <div>I am an erring component. Don't mind me, just display error message and move along</div>;
};

export default ErringComponent;
