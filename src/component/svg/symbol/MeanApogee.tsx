import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const MeanApogee = ({ params }: { params: CommonSymbolParams }) => {
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
          d="M 6.6145832,19.84375 H 19.84375 v 0 0"
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
          d="m 13.229167,15.875 v 9.260416"
        />
        <path
          style={{
            fill: params.stroke,
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.264583,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 5.9,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M 12.792419,13.99555 C 10.199911,12.790569 8.6482838,10.082478 8.9197778,7.2365386 9.191273,4.3906 11.226942,2.024727 13.982291,1.347227 9.9419507,0.98936887 6.2808747,3.6961487 5.4588592,7.6510349 4.6368439,11.605921 6.916095,15.547386 10.753886,16.807622 c 3.83779,1.260237 8.009944,-0.562746 9.69729,-4.222092 -1.995749,2.05525 -5.06625,2.615003 -7.658757,1.41002 z"
        />
      </g>
    </svg>
  );
};

export default MeanApogee;
