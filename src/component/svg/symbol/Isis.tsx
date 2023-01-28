import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Isis = ({ params }: { params: CommonSymbolParams }) => {
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
          d="m 13.229167,25.135417 0,-10.583334"
        />
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
          d="m 6.8791667,3.175 c 0.4252619,-0.3197946 0.9729106,-0.5291667 1.5875,-0.5291667 1.5875003,0 2.6458333,1.3229168 2.6458333,2.6458334 0,2.1166666 -1.8520833,2.6458333 -1.8520833,5.2916663 0,2.116667 1.3229163,3.96875 3.9687503,3.96875 2.645833,0 3.96875,-1.852083 3.96875,-3.96875 0,-2.645833 -1.852084,-3.1749997 -1.852084,-5.2916663 0,-1.3229166 1.058334,-2.6458334 2.645834,-2.6458334 0.640794,0 1.153946,0.1850778 1.5875,0.5291667"
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
          d="M 6.6145833,19.84375 H 19.84375"
        />
      </g>
    </svg>
  );
};

export default Isis;
