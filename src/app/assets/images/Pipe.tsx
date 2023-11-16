import React from "react";

const Pipe: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      style={{ width: "6px", height: "18px", margin: "0 2px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="12"
      viewBox="0 0 2 12"
      fill="none"
    >
      <path d="M1 0V11.5" stroke="#BFBFBF" stroke-width="0.2" />
    </svg>
  );
};

export default Pipe;
