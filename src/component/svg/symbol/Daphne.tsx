import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Daphne = ({ params }: { params: CommonSymbolParams }) => {
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
        d="m 13.229167,2.6458333 0,22.4895827"
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
        d="m 13.229167,2.6458333 c 0,0 -5.291667,5.2916673 -5.291667,9.2604167 0,3.968751 5.291667,9.260417 5.291667,9.260417 0,0 5.291666,-5.291666 5.291666,-9.260417 0,-3.9687497 -5.291666,-9.2604167 -5.291666,-9.2604167 z"
      />
    </svg>
  );
};

export default Daphne;
