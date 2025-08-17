import React from 'react';

const WorkwearIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.5 4c.83 0 1.5-.67 1.5-1.5S21.33 1 20.5 1h-17C2.67 1 2 1.67 2 2.5S2.67 4 3.5 4h.34l.79 7.45C4.87 14.18 6.57 16 8.5 16h7c1.93 0 3.63-1.82 3.87-4.55L20.16 4h.34zM8.5 14c-.83 0-1.5-.67-1.5-1.5S7.67 11 8.5 11s1.5.67 1.5 1.5S9.33 14 8.5 14zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 11 15.5 11s1.5.67 1.5 1.5S16.33 14 15.5 14zM5.77 9l-.5-4h13.46l-.5 4H5.77z" />
    <path d="M4 18h16v2H4z" />
  </svg>
);

export default WorkwearIcon;
