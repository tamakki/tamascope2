import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Thalia = ({ params }: { params: CommonSymbolParams }) => {
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
          d="m 13.229167,18.520833 3.96875,-6.614583 H 9.2604164 Z"
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
          d="m 2.6458332,12.236979 c 0,2.645833 3.1750001,2.645833 3.175,0 v -1.322917 c -1e-7,-2.6458312 1.8520834,-3.9687487 3.7041667,-3.9687487 1.8520831,0 2.9104171,1.3265855 3.7041671,3.1786677 0.79375,-1.8520822 1.852083,-3.1786677 3.704166,-3.1786677 1.852084,0 3.704167,1.3229167 3.704167,3.9687487 v 1.322917 c 0,2.645833 3.175,2.645833 3.175,0"
        />
      </g>
    </svg>
  );
};

export default Thalia;
