import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Icarus = ({ params }: { params: CommonSymbolParams }) => {
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
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        cx="13.229167"
        cy="10.583334"
        r="3.968749"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m 17.197917,2.6462319 a 3.9687507,3.9687507 0 0 1 -1.984376,3.437039 3.9687507,3.9687507 0 0 1 -3.96875,-10e-8 3.9687507,3.9687507 0 0 1 -1.9843757,-3.4370389"
      />
      <path
        style={{
          fill: params.stroke,
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="M 10.583333,18.520833 13.229167,19.84375 15.875,18.520833 13.229167,25.135416 Z"
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
        d="m 13.229167,13.229167 0,7.937499"
      />
    </svg>
  );
};

export default Icarus;
