import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Orcus = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <circle
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinecap: "butt",
          strokeLinejoin: "bevel",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        cx="13.229167"
        cy="5.9531269"
        r="3.3072915"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinecap: "butt",
          strokeLinejoin: "bevel",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m 20.505208,5.953125 a 7.2760415,7.2760415 0 0 1 -3.63802,6.301237 7.2760415,7.2760415 0 0 1 -7.276042,0 7.2760415,7.2760415 0 0 1 -3.6380205,-6.301237"
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
        d="m 13.229167,13.229167 v 5.291666 c 0,-1.5875 1.058333,-2.645833 2.645833,-2.645833 1.5875,0 2.645833,1.058333 2.645833,2.645833 0,3.439584 -6.614583,5.291667 -6.614583,5.291667"
      />
    </svg>
  );
};

export default Orcus;
