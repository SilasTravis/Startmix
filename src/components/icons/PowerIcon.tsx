import React from 'react';

const PowerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M7 2v11h3v9l7-12h-4l4-8H7z" />
  </svg>
);

export default PowerIcon;
