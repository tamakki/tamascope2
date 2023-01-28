import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Euterpe = ({ params }: { params: CommonSymbolParams }) => {
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
            strokeWidth: 2.646,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          d="m 22.489584,9.2720184 a 9.260417,10.584047 0 0 1 -4.630209,9.1660536 9.260417,10.584047 0 0 1 -9.2604168,0 A 9.260417,10.584047 0 0 1 3.96875,9.2720184"
        />
        <circle
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64599,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          cx="7.2759628"
          cy="9.260417"
          r="3.3072915"
        />
        <circle
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64599,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          cx="19.182369"
          cy="9.260417"
          r="3.3072917"
        />
      </g>
    </svg>
  );
};

export default Euterpe;
