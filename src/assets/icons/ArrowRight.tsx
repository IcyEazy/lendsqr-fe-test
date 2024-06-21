import { Iconprops } from "../../types";
import { FC } from "react";

const ArrowRight: FC<Iconprops> = (props) => {
  return (
    <svg
      className={props.customStyle}
      width={props.width || "8"}
      height={props.height || "12"}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z"
        fill="#213F7D"
      />
    </svg>
  );
};

export default ArrowRight;
