import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Bienor = ({ params }: { params: CommonSymbolParams }) => {
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
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="m 11.90625,6.6145832 1.322917,9e-7 c 1.09594,8e-7 1.984375,-0.8884341 1.984375,-1.9843742 0,-1.0959401 -0.888435,-1.984375 -1.984375,-1.9843758 l -2.645834,-8e-7 1e-6,14.5520827 m 1.322916,-10.5833327 1.852085,3e-7 c 1.461254,4e-7 2.645834,1.1845802 2.645834,2.6458335 0,1.4612529 -1.184581,2.6458329 -2.645835,2.6458329 H 11.90625"
        />
      </g>
    </svg>
  );
};

export default Bienor;
