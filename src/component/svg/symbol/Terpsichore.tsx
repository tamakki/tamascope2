import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Terpsichore = ({ params }: { params: CommonSymbolParams }) => {
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
            strokeMiterlimit: 3.9,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M 4.7625,3.175 C 5.1877619,2.8552054 5.9999939,2.6458333 6.6145833,2.6458333 c 1.5875003,0 2.6458334,1.3229168 2.6458334,2.6458334 0,2.1166666 -2.6458334,3.96875 -2.6458334,7.9375003 0,3.96875 2.6458334,6.614583 6.6145837,6.614583 3.96875,0 6.614583,-2.645833 6.614583,-6.614583 0,-3.9687503 -2.645833,-5.8208337 -2.645833,-7.9375003 0,-1.3229166 1.058333,-2.6458334 2.645833,-2.6458334 0.640794,0 1.418529,0.1850778 1.852083,0.5291667"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583333,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          d="M 2.6458333,13.229167 H 23.8125"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583333,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          d="M 13.229167,13.229167 V 25.135416"
        />
      </g>
    </svg>
  );
};

export default Terpsichore;
