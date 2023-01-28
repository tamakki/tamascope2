import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Cyllarus = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458333"
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
          d="m 9.2604167,2.6458333 c 0,0 3.9687503,2.6458333 3.9687503,3.96875 l 0,10.5833327 0,-10.5833327 c 0,-1.3229166 3.96875,-3.96875 3.96875,-3.96875"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          d="M 16.052238,11.839377 A 3.3072915,3.3072915 0 0 1 12.33205,13.380329 3.3072915,3.3072915 0 0 1 9.8807483,10.185731 3.3072915,3.3072915 0 0 1 12.33205,6.9911327 3.3072915,3.3072915 0 0 1 16.052238,8.5320851"
        />
        <circle
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          cx="13.229167"
          cy="19.84375"
          r="3.96875"
        />
      </g>
    </svg>
  );
};

export default Cyllarus;
