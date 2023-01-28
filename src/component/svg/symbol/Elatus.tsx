import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Elatus = ({ params }: { params: CommonSymbolParams }) => {
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
          id="path2910"
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
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 10.583333,2.6458333 6.614584,0"
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
          d="M 10.583333,6.6145833 H 15.875"
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
          d="m 10.583333,10.583333 h 6.614583"
        />
      </g>
    </svg>
  );
};

export default Elatus;
