import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Okyrhoe = ({ params }: { params: CommonSymbolParams }) => {
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
          d="m 13.229168,15.874999 -10e-7,-5.291666"
        />
        <ellipse
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "square",
            strokeOpacity: 1,
          }}
          cx="13.229167"
          cy="6.6145868"
          rx="3.9687502"
          ry="3.9687483"
        />
      </g>
    </svg>
  );
};

export default Okyrhoe;
