import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const TrueNode = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <g style={{ display: "inline" }}>
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
          d="M 13.229167,8.7339351 H 15.875 v 1.3229159 c 0,0 0,-0.7937489 -0.79375,-0.7937489 h -1.322917 v 5.2916619 c 0,0 10e-7,0.79375 1.058334,0.79375 h -3.175 C 12.7,15.348514 12.7,14.554764 12.7,14.554764 V 9.2631021 h -1.322917 c -0.79375,0 -0.79375,0.7937489 -0.79375,0.7937489 V 8.7339351 Z"
        />
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

export default TrueNode;
