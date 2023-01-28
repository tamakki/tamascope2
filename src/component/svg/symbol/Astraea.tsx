import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Astraea = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <ellipse
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.646,
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        cy="19.843666"
        cx="13.229167"
        rx="2.6458337"
        ry="2.6458335"
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
        d="m 13.229167,3.96875 10e-7,13.890625"
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
        d="M 17.197916,15.875 H 9.2604166"
        id="path853"
      />
      <path
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64599,
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        d="m 5.2883487,9.2737131 a 7.9374213,5.291667 0 0 1 7.9374213,-5.291667 7.9374213,5.291667 0 0 1 7.937421,5.291667"
      />
      <path
        style={{
          fill: params.stroke,
          stroke: params.stroke,
          strokeWidth: 0.26458299,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "0, 2.91041285",
          strokeDashoffset: 0,
        }}
        d="M 2.6458333,9.2604166 H 7.9374999 L 5.2916666,11.90625 Z"
      />
      <path
        style={{
          fill: params.stroke,
          fillOpacity: 1,
          stroke: params.stroke,
          strokeWidth: 0.264583,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "0, 2.91042",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        d="M 18.520833,9.2604167 H 23.8125 L 21.166667,11.90625 Z"
      />
    </svg>
  );
};

export default Astraea;
