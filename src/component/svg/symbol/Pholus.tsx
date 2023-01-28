import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Pholus = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458333"
    >
      <g>
        <ellipse
          style={{
            fill: "none",
            fillRule: "evenodd",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          cy="-19.843752"
          cx="13.229167"
          transform="scale(1,-1)"
          rx="3.9687502"
          ry="3.9687531"
        />
        <path
          style={{
            fill: "none",
            stroke: params.stroke,
            strokeWidth: 2.64583,
            strokeLinecap: "butt",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          d="m 10.583333,17.197917 0,-13.2291684 c 0,0 1.702228,1.2e-6 2.645833,10e-8 1.461253,3e-7 2.645833,1.1845801 2.645833,2.6458334 0,1.4612532 -1.18458,2.645833 -2.645833,2.6458332 l -1.322917,1.7e-6"
        />
      </g>
    </svg>
  );
};

export default Pholus;
