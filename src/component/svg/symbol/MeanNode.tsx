import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const MeanNode = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <g style={{ display: "inline" }}>
        <circle
          style={{
            display: "inline",
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          id="path835"
          cx="5.9531236"
          cy="20.505211"
          r="3.3072917"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.646,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 0,
            strokeDasharray: "none",
            strokeLinecap: "square",
          }}
          d="m 7.6165069,17.51891 a 7.9375,7.9375 0 0 1 0,-11.2253201 7.9375,7.9375 0 0 1 11.2253201,0 7.9375,7.9375 0 0 1 0,11.2253201"
        />
        <circle
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64599,
            strokeLinecap: "square",
            strokeLinejoin: "bevel",
            strokeMiterlimit: 0,
            strokeDasharray: "none",
          }}
          id="path870"
          cx="20.505209"
          cy="20.505209"
          r="3.3072915"
        />
      </g>
    </svg>
  );
};

export default MeanNode;
