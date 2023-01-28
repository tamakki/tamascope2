import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Chariklo = ({ params }: { params: CommonSymbolParams }) => {
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
            strokeWidth: 2.64583333,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 13.229167,15.875 0,-15.34583333"
        />
        <path
          style={{
            fill: params.stroke,
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: "0.264583px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="m 11.1125,13.229167 2.116667,-1.322917 2.116666,1.322917 -2.116666,1.322916 z"
        />
        <path
          style={{
            fill: params.stroke,
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: "0.264583px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="m 11.1125,6.6145833 2.116667,-1.3229165 2.116666,1.3229165 -2.116666,1.3229165 z"
        />
        <circle
          style={{
            fill: "none",
            strokeWidth: 2.646,
            strokeLinecap: "square",
            strokeMiterlimit: 0,
            stroke: params.stroke,
            strokeOpacity: 1,
            strokeDasharray: "none",
            strokeLinejoin: "round",
          }}
          id="path839"
          cx="13.229166"
          cy="19.84375"
          r="3.96875"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.646,
            strokeLinecap: "butt",
            strokeLinejoin: "bevel",
            strokeMiterlimit: 0,
            strokeDasharray: "none",
          }}
          d="m 16.666204,8.598958 a 3.96875,3.96875 0 0 1 -4.464226,1.849143 3.96875,3.96875 0 0 1 -2.941562,-3.833518 3.96875,3.96875 0 0 1 2.941562,-3.8335181 3.96875,3.96875 0 0 1 4.464226,1.849143"
        />
      </g>
    </svg>
  );
};

export default Chariklo;
