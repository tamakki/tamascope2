import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Sedna = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <circle
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinejoin: "bevel",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        cx="5.2916646"
        cy="13.229168"
        r="2.645833"
      />
      <path
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinecap: "butt",
          strokeLinejoin: "bevel",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M 5.291667,6.614584 A 6.614583,6.614583 0 0 1 11.90625,13.229167 6.614583,6.614583 0 0 1 5.291667,19.84375"
      />
      <path
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeLinecap: "butt",
          strokeLinejoin: "bevel",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="m -22.489582,5.2916651 a 6.6145835,7.9375 0 0 1 6.614583,7.9374999 6.6145835,7.9375 0 0 1 -6.614583,7.9375"
        transform="scale(-1,1)"
      />
      <path
        style={{
          fill: params.stroke,
          stroke: "none",
          strokeWidth: "0.264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fillOpacity: 1,
        }}
        d="m 11.90625,11.90625 h 13.229166 l -6.614583,4.497916 V 14.552083 H 11.90625 Z"
      />
    </svg>
  );
};

export default Sedna;
