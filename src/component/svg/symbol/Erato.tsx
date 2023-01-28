import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Erato = ({ params }: { params: CommonSymbolParams }) => {
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
          d="M 4.7625,4.4979167 C 5.1877619,4.1781221 5.9999939,3.96875 6.6145833,3.96875 c 1.5875003,0 2.6458334,1.3229167 2.6458334,2.6458333 0,2.116667 -2.6458343,5.2916667 -2.6458343,9.2604167 0,3.96875 2.645833,6.614583 6.6145846,6.614583 3.96875,0 6.614583,-2.645833 6.614583,-6.614583 0,-3.96875 -2.645833,-7.1437497 -2.645833,-9.2604167 0,-1.3229166 1.058333,-2.6458333 2.645833,-2.6458333 0.640794,0 1.418529,0.1850778 1.852083,0.5291667"
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
          d="M 3.9687492,14.552083 H 23.8125"
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
          d="m 3.9687492,11.90625 -2.6458334,2.645833 2.6458334,2.645833 z"
        />
      </g>
    </svg>
  );
};

export default Erato;
