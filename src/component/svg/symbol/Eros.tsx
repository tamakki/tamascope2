import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Eros = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <path
        style={{
          fill: params.stroke,
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.999999,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m 30,10 c -7,0 -24.9999999,5 -25,25 -1e-7,40 45,45.000001 45,55 0,-9.999999 44.999998,-15 45,-55 10e-7,-20 -17.999999,-25 -25,-25 -12.999999,-2e-7 -19.999999,8 -19.999999,8 0,0 -7,-8.0000002 -20.000001,-8 z m 0,10 c 14.999999,3e-6 20,15 20,15 0,0 5,-15 20,-15 5.000001,0 15.000001,5 15,15 -3e-6,30.000001 -35,36.000001 -35,43 C 50,71.000001 14.999999,65.000001 15,35 15,25 24.999999,20 30,20 Z"
        transform="scale(0.26458333)"
      />
      <path
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64583333,
          strokeOpacity: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        d="M 13.229167,6.6145832 V 21.166666"
      />
    </svg>
  );
};

export default Eros;
