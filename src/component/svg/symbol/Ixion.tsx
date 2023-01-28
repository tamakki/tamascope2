import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Asbolus = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458333"
    >
      <g>
        <circle
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "square",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          id="path845"
          cx="13.229167"
          cy="15.875002"
          r="7.9375"
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
          d="M 7.9375004,10.583333 18.520833,21.166667"
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
          d="M 18.520833,10.583334 7.9375002,21.166666"
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
          d="M 3.9687505,5.2916667 H 22.489583"
        />
      </g>
    </svg>
  );
};

export default Asbolus;
