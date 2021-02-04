import React from 'react';

function ContactSVG(props) {
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
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z" />
      </g>
    </svg>
  );
}

export default ContactSVG;
