import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Moon = ({ params }: { params: CommonSymbolParams }) => {
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
            strokeWidth: 2.64599,
            strokeLinejoin: "bevel",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
          }}
          d="m 15.968334,23.451881 c 4.626859,-1.239763 7.844165,-5.432638 7.844165,-10.222715 0,-4.7900767 -3.217306,-8.9829517 -7.844165,-10.2227147 -4.626859,-1.239763 -9.5095652,0.7827203 -12.1126294,4.7705521 2.062083,-2.4306053 5.476143,-3.1097042 8.4421834,-1.8811302 2.966041,1.228574 4.899951,4.1228748 4.899951,7.3332938 0,3.210419 -1.93391,6.10472 -4.89995,7.333294 -2.9660407,1.228574 -6.3801012,0.549475 -8.4421843,-1.881132 2.603064,3.987831 7.4857703,6.010315 12.1126293,4.770552 z"
        />
      </g>
    </svg>
  );
};

export default Moon;
