import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Cupido = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
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
        d="m 3.96875,3.96875 c 3.96875,0 5.2916666,2.6458336 5.2916667,5.2916667 10e-8,3.9687503 -2.6458334,9.2604163 -2.6458334,9.2604163 H 22.489583"
      />
      <ellipse
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinecap: "square",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        cx="15.875001"
        cy="10.583333"
        rx="2.6458328"
        ry="2.6458333"
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
        d="m 15.875,13.229167 0,11.90625"
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
        d="m 11.90625,22.489583 h 7.9375"
      />
    </svg>
  );
};

export default Cupido;
