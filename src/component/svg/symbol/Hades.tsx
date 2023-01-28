import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Hades = ({ params }: { params: CommonSymbolParams }) => {
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
        d="M 20.103244,15.875 A 7.9375005,7.9374995 0 0 1 11.174791,19.573286 7.9375005,7.9374995 0 0 1 5.2916665,11.90625 7.9375005,7.9374995 0 0 1 11.174791,4.2392143 7.9375005,7.9374995 0 0 1 20.103244,7.9375"
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
        d="M 7.9375,11.90625 H 18.520833"
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
        d="m 13.229167,6.6145832 0,18.5208338"
      />
    </svg>
  );
};

export default Hades;
