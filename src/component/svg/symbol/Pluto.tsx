import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Pluto = ({ params }: { params: CommonSymbolParams }) => {
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
            strokeWidth: 2.64583,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 7.9374995,2.6458333 5e-7,19.8437497 h 11.90625"
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
          d="m 7.9374995,3.96875 h 6.6145835 c 2.645834,-10e-8 5.291667,1.3229173 5.291667,5.2916667 0,3.9687493 -2.645833,5.2916663 -5.291667,5.2916663 -2.645833,0 -6.6145835,0 -6.6145835,0"
        />
      </g>
    </svg>
  );
};

export default Pluto;
