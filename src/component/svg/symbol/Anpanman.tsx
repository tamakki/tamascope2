import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Anpanman = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <circle
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 1.32292,
          strokeLinejoin: "bevel",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        cx="13.229166"
        cy="13.229166"
        r="10.583333"
      />
      <circle
        style={{
          opacity: 0.999,
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 1.32292,
          strokeLinejoin: "bevel",
        }}
        cx="13.229165"
        cy="13.229165"
        r="3.3072915"
      />
      <circle
        style={{
          opacity: 0.999,
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 1.32292,
          strokeLinejoin: "bevel",
        }}
        cx="6.6145835"
        cy="13.229165"
        r="3.3072917"
      />
      <ellipse
        style={{
          opacity: 0.999,
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 1.32292,
          strokeLinejoin: "bevel",
        }}
        cx="19.843748"
        cy="13.229165"
        rx="3.3072917"
        ry="3.3072915"
      />
      <path
        style={{
          opacity: 0.999,
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 1.32292,
          strokeLinejoin: "bevel",
        }}
        d="m 17.197917,16.536457 a 3.9687502,3.96875 0 0 1 -1.984375,3.437038 3.9687502,3.96875 0 0 1 -3.96875,0 3.9687502,3.96875 0 0 1 -1.9843753,-3.437038 h 3.9687503 z"
      />
    </svg>
  );
};

export default Anpanman;
