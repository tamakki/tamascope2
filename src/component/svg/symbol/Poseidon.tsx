import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Poseidon = ({ params }: { params: CommonSymbolParams }) => {
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
          strokeLinejoin: "round",
        }}
        d="m 22.489584,3.9685133 a 9.260417,6.6052232 0 0 1 -4.630209,5.7202911 9.260417,6.6052232 0 0 1 -9.2604168,-2e-7 A 9.260417,6.6052232 0 0 1 3.96875,3.9685133"
      />
      <path
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinejoin: "round",
        }}
        d="m 22.489584,-22.48982 a 9.260417,6.6052227 0 0 1 -4.630209,5.72029 9.260417,6.6052227 0 0 1 -9.2604168,0 9.260417,6.6052227 0 0 1 -4.6302082,-5.72029"
        transform="scale(1,-1)"
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
        d="M 13.229167,3.96875 V 22.489583"
      />
    </svg>
  );
};

export default Poseidon;
