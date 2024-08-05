// LoggerComponent.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

function LoggerComponent() {
  useEffect(() => {
    console.log('LoggerComponent bedsked');
  });

  return (
    <div>
      <p>Åben konsollen for at se bedskeden.</p>
    </div>
  );
}

export default LoggerComponent;