import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Mithra = ({ params }: { params: CommonSymbolParams }) => {
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
          d="m 13.229167,15.875 0,-3.96875"
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
          d="m 6.8791667,3.175 c 0.4252619,-0.3197946 0.9729106,-0.5291667 1.5875,-0.5291667 1.5875003,0 2.6458333,1.3229168 2.6458333,2.6458334 0,3.1750001 -3.96875,2.1166669 -3.96875,5.2916663 1e-7,1.5875 1.3229167,2.645834 2.910417,2.645834 1.852083,-1e-6 2.645833,-1.058334 3.175,-1.852084 0.529166,0.79375 1.322916,1.852084 3.175,1.852084 1.5875,0 2.910416,-1.058334 2.910416,-2.645834 0,-3.1749994 -3.96875,-2.1166662 -3.96875,-5.2916663 0,-1.3229166 1.058334,-2.6458334 2.645834,-2.6458334 0.640794,0 1.153946,0.1850778 1.5875,0.5291667"
        />
        <circle
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64599,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeMiterlimit: 0,
          }}
          cx="13.229166"
          cy="19.84375"
          r="3.96875"
        />
      </g>
    </svg>
  );
};

export default Mithra;
