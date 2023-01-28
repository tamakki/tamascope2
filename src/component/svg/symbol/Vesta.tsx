import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Vesta = ({ params }: { params: CommonSymbolParams }) => {
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
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M 13.229166,5.2916667 11.90625,6.6145833 14.552083,9.2604167 13.229166,10.583333"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.646,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 9.2604167,11.90625 3.9687503,3.96875 3.96875,-3.96875"
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
          d="m 1.3229167,13.229167 h 3.96875 l 7.9375003,7.937499 7.984747,-7.984747 3.921503,0.04725"
        />
      </g>
    </svg>
  );
};

export default Vesta;
