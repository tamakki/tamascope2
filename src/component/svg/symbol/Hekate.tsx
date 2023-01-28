import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Hekate = ({ params }: { params: CommonSymbolParams }) => {
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
        cy="20.505211"
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
        d="m 17.701605,0.78598865 a 4.6302085,4.6302085 0 0 1 -1.816659,4.99123095 4.6302085,4.6302085 0 0 1 -5.311557,1e-7 4.6302085,4.6302085 0 0 1 -1.81666,-4.99123077"
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
        d="m -7.4338125,2.1089059 a 4.630208,4.630208 0 0 1 -1.8166592,4.9912304 4.630208,4.630208 0 0 1 -5.3115563,1e-7 4.630208,4.630208 0 0 1 -1.81666,-4.9912302"
        transform="rotate(-90)"
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
        d="m 16.38058,-24.351893 a 4.6321673,4.6321673 0 0 1 -1.817428,4.993342 4.6321673,4.6321673 0 0 1 -5.3138039,10e-7 4.6321673,4.6321673 0 0 1 -1.8174282,-4.993343"
        transform="rotate(90)"
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
        d="M 7.9375002,11.906248 H 18.520833"
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
        d="M 13.229167,6.6145832 V 17.197916"
      />
    </svg>
  );
};

export default Hekate;
