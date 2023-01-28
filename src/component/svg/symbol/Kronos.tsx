import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Kronos = ({ params }: { params: CommonSymbolParams }) => {
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
          strokeWidth: 2.646,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        d="m 3.968749,11.90625 a 9.260417,9.260417 0 0 1 9.260417,-9.260417 9.260417,9.260417 0 0 1 9.260417,9.260417"
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
        d="M 7.9374999,11.90625 H 18.520833"
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
        d="M 13.229167,6.6145832 V 25.135416"
      />
    </svg>
  );
};

export default Kronos;
