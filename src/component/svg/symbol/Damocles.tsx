import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Damocles = ({ params }: { params: CommonSymbolParams }) => {
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
          d="m 13.229167,23.8125 0,-19.84375"
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
          d="M 7.9374999,9.2604166 13.229167,3.96875 18.520833,9.2604166"
        />
      </g>
    </svg>
  );
};

export default Damocles;
