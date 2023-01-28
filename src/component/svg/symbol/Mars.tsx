import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Mars = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <g>
        <ellipse
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
          }}
          cx="10.583337"
          cy="15.875"
          rx="6.6145816"
          ry="6.614584"
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
          d="m 21.166668,5.2916673 -6.614584,6.6145837 v 0"
          id="path840"
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
          d="m 13.229168,3.9687506 9.260416,1e-7 v 9.2604173"
        />
      </g>
    </svg>
  );
};

export default Mars;
