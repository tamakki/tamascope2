import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Hygiea = ({ params }: { params: CommonSymbolParams }) => {
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
        d="m 19.618364,2.8635417 a 6.6145835,5.2924652 0 0 1 -2.595228,5.7051245 6.6145835,5.2924652 0 0 1 -7.5879381,2e-7 6.6145835,5.2924652 0 0 1 -2.595228,-5.7051243"
      />
      <ellipse
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.646,
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        cy="19.579082"
        cx="13.229167"
        rx="3.4395835"
        ry="2.9104173"
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
        d="M 13.229167,5.2916665 V 22.489583"
      />
      <ellipse
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64599,
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        cy="13.22901"
        cx="13.229088"
        rx="4.7624211"
        ry="3.7042451"
      />
    </svg>
  );
};

export default Hygiea;
