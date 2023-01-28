import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Osiris = ({ params }: { params: CommonSymbolParams }) => {
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
          d="M 13.229167,25.135417 V 13.229167"
        />
        <g id="g895" transform="translate(6.3578288e-7,0.66145802)">
          <ellipse
            style={{
              fill: params.stroke,
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 2.64583,
              strokeLinecap: "butt",
              strokeMiterlimit: 3.9,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            cx="13.229166"
            cy="8.598958"
            rx="1.8520833"
            ry="1.8520827"
          />
          <path
            style={{
              fill: "none",
              stroke: params.stroke,
              strokeWidth: 2.64583,
              strokeOpacity: 1,
            }}
            d="m 22.489583,4.6302085 a 9.260417,9.260417 0 0 1 -4.630209,8.0197565 9.260417,9.260417 0 0 1 -9.2604167,0 A 9.260417,9.260417 0 0 1 3.968749,4.6302085"
          />
          <path
            style={{
              fill: "none",
              stroke: params.stroke,
              strokeWidth: 2.64583,
              strokeOpacity: 1,
            }}
            d="M 5.5621297,9.6806762 A 7.9375,8.598958 0 0 1 13.229166,3.307292 7.9375,8.598958 0 0 1 20.896202,9.6806757"
          />
        </g>
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
          d="M 6.6145833,19.84375 H 19.84375"
        />
      </g>
    </svg>
  );
};

export default Osiris;
