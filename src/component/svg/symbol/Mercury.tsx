import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Mercury = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <g>
        <g transform="translate(1.3229167)">
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
            d="M 5.2916666,21.166667 H 18.520832"
            id="path2890"
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
            d="m 11.906252,17.859376 v 7.276041 0 0"
            id="path2892"
          />
          <ellipse
            style={{
              fill: "none",
              stroke: params.stroke,
              strokeWidth: 2.64583333,
              strokeMiterlimit: 9.30000019,
              strokeOpacity: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "round",
            }}
            id="path836"
            cx="11.90625"
            cy="11.906252"
            rx="6.614583"
            ry="5.2916665"
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
            d="m 5.2916668,1.1906258 c 0,0 0,5.291666 6.6145832,5.291666 6.614583,0 6.614583,-5.291666 6.614583,-5.291666"
            id="path841"
          />
        </g>
      </g>
    </svg>
  );
};

export default Mercury;
