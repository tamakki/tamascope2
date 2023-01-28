import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Sun = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458333"
    >
      <g>
        <circle
          style={{
            fill: "none",
            fillRule: "evenodd",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path11"
          cx="13.229166"
          cy="13.229166"
          r="10.583333"
        />
        <circle
          style={{
            fill: params.stroke,
            fillOpacity: 1,
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          id="path836"
          cx="13.229167"
          cy="13.229167"
          r="1.3229166"
        />
      </g>
    </svg>
  );
};

export default Sun;
