import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const IC = ({ params }: { params: CommonSymbolParams }) => {
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
          transform="matrix(1.1,0,0,2.3,1.3,-3.3)"
        >
          <tspan x="5" y="11.277731">
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
              IC
            </tspan>
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default IC;
