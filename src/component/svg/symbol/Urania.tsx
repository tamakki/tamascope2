import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Urania = ({ params }: { params: CommonSymbolParams }) => {
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
          strokeOpacity: 1,
        }}
        id="path1405"
        cx="13.229167"
        cy="6.6145835"
        r="2.6458335"
      />
      <path
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.64583,
          strokeOpacity: 1,
        }}
        d="m 22.174042,5.5426881 a 9.260416,9.260416 0 0 1 -3.633318,9.9824609 9.260416,9.260416 0 0 1 -10.6231132,0 9.260416,9.260416 0 0 1 -3.6333189,-9.9824604"
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
        d="M 6.6145833,23.8125 13.229167,10.583333 19.84375,23.8125"
      />
    </svg>
  );
};

export default Urania;
