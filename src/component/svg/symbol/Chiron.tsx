import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Chiron = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458333"
    >
      <g>
        <ellipse
          style={{
            fill: "none",
            fillRule: "evenodd",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          cy="-19.843752"
          cx="13.229167"
          transform="scale(1,-1)"
          rx="3.9687502"
          ry="3.9687531"
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
          d="m 10.583333,17.197917 0,-11.2525186 v -4.62248"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "butt",
            strokeLinejoin: "bevel",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M 15.875,3.9687501 11.90625,7.9375 15.875,11.90625"
        />
      </g>
    </svg>
  );
};

export default Chiron;
