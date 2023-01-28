import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Neptune = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <g>
        <path
          style={{
            fill: params.stroke,
            fillOpacity: 1,
            stroke: params.stroke,
            strokeWidth: 1.32292,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M 3.9687501,5.2916667 2.6458334,6.6145833 h 2.6458333 z"
          id="path2590"
        />
        <path
          style={{
            fill: params.stroke,
            fillOpacity: 1,
            stroke: params.stroke,
            strokeWidth: 1.32292,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 22.489584,5.2916666 -1.322917,1.3229167 h 2.645834 l -1.03706,-1.0370604 z"
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
          d="m 13.229167,3.96875 0,21.166666"
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
        <path
          style={{
            fill: params.stroke,
            fillOpacity: 1,
            stroke: params.stroke,
            strokeWidth: 1.32292,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 11.906251,3.4442842 1.322917,-1.3229166 1.322916,1.3229166 z"
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
          d="m 3.96875,6.6145832 v 2.6458334 c 0,0 0,5.2916664 9.260417,5.2916664 9.260416,0 9.260416,-5.2916664 9.260416,-5.2916664 V 6.6145832"
        />
      </g>
    </svg>
  );
};

export default Neptune;
