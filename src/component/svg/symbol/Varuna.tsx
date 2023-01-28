import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Varuna = ({ params }: { params: CommonSymbolParams }) => {
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
          d="m 13.229167,15.875 0,-14.5520833"
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
          d="m 6.6145833,2.6458333 c 1.3229167,0 3.9008627,1.5265796 2.6458334,5.2916667 L 7.9375,11.90625 H 18.520833 L 17.197917,7.9375 C 15.875,3.9687498 18.520833,2.6458333 19.84375,2.6458333"
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
          cx="13.229167"
          cy="19.84375"
          r="3.96875"
        />
      </g>
    </svg>
  );
};

export default Varuna;
