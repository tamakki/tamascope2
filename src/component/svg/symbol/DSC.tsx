import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const DSC = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <g>
        <text
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "10.5833px",
            lineHeight: 1.25,
            fontFamily: "sansSerif",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            whiteSpace: "pre",
            fill: params.stroke,
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.727742,
          }}
          transform="matrix(0.81291174,0,0,2.3227553,2.7840412,-3.3330834)"
        >
          <tspan x="1.3222656" y="10.977731">
            <tspan
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "bold",
                fontStretch: "normal",
                fontSize: "10.5833px",
                fontFamily: "sansSerif",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                strokeWidth: 0.727742,
              }}
            >
              DSC
            </tspan>
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default DSC;
