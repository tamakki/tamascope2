import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Ceres = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458333"
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
          d="M 6.6145833,19.84375 H 19.84375"
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
          d="m 13.229167,14.552083 0,10.583333"
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
          d="M 6.614584,9.260417 A 6.614583,6.614583 0 0 1 13.229167,2.645834 6.614583,6.614583 0 0 1 19.84375,9.260417 6.614583,6.614583 0 0 1 13.229167,15.875"
        />
      </g>
    </svg>
  );
};

export default Ceres;
