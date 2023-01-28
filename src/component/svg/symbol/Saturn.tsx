import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Saturn = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <g>
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M 3.9687499,3.9687497 H 11.90625 v 0"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 6.6145833,1.3229167 0,2.645833 V 18.520833 15.875 c 0,0 0,-7.9375 6.6145827,-7.9375003 2.645834,0 5.268106,2.0233965 5.291667,5.2916673 0,3.96875 -2.645833,5.291666 -2.645833,7.9375 0,2.645833 3.96875,3.96875 5.291666,1.322916"
        />
      </g>
    </svg>
  );
};

export default Saturn;
