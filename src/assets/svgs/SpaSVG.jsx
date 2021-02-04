import React from 'react';

function SpaSVG(props) {
  return (
    <svg
    stroke="rgb(201, 3, 3)"
    fill="rgb(201, 3, 3)"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="2.5rem"
      width="2.5rem"
      {...props}
    >
      <path d="M20.787,9.023c-0.125,0.027-1.803,0.418-3.953,1.774c-0.323-1.567-1.279-4.501-4.108-7.485L12,2.546l-0.726,0.767 c-2.839,2.995-3.791,5.937-4.111,7.514C5.005,9.448,3.34,9.052,3.218,9.024L2,8.752V10c0,7.29,3.925,12,10,12 c5.981,0,10-4.822,10-12V8.758L20.787,9.023z M8.999,12.038C9.001,12.005,9.151,8.938,12,5.506C14.814,8.906,14.999,12,15,12 v0.125c-0.998,0.826-2.029,1.861-3.01,3.154c-0.984-1.271-2.007-2.293-2.991-3.113V12.038z M12,20 c-5.316,0-7.549-4.196-7.937-8.564c1.655,0.718,4.616,2.426,7.107,6.123l0.841,1.249l0.825-1.26 c2.426-3.708,5.425-5.411,7.096-6.122C19.534,15.654,17.304,20,12,20z" />
    </svg>
  );
}

export default SpaSVG;
