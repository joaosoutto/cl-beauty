import React from 'react';

function ServicesSVG(props) {
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
        <path d="M12 13.414l-2.554 2.554a4 4 0 1 1-1.414-1.414L10.586 12 4.565 5.98a2 2 0 0 1 0-2.83L12 10.587l7.435-7.435a2 2 0 0 1 0 2.828L13.415 12l2.553 2.554a4 4 0 1 1-1.414 1.414L12 13.414zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </g>
    </svg>
  );
}

export default ServicesSVG;
