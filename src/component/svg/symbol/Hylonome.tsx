import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Hylonome = ({ params }: { params: CommonSymbolParams }) => {
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
          d="m 13.229168,15.874999 -10e-7,-13.2291657"
        />
        <path
          style={{
            fill: "none",
            fillRule: "evenodd",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="scale(1,-1)"
          d="m 17.197915,-11.244392 a 3.9687502,3.9687531 0 0 1 -1.984375,3.4370406 3.9687502,3.9687531 0 0 1 -3.96875,-1e-7 3.9687502,3.9687531 0 0 1 -1.9843752,-3.4370405"
        />
        <path
          style={{
            fill: "none",
            fillRule: "evenodd",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 17.197915,2.6462307 a 3.9687502,3.9687531 0 0 1 -1.984375,3.437041 3.9687502,3.9687531 0 0 1 -3.96875,-1e-7 3.9687502,3.9687531 0 0 1 -1.9843752,-3.4370409"
        />
      </g>
    </svg>
  );
};

export default Hylonome;
