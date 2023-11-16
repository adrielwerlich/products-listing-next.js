import React, { SVGProps } from "react";

interface CloseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CloseIcon: React.FC<CloseIconProps> = ({ size = 38, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 38 38"
      {...props}
    >
      <circle cx="19" cy="19" r="19" fill="black" />
    </svg>
  );
};

export default CloseIcon;
