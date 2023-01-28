import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Tezuka = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458334"
    >
      <circle
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 1.32292,
          strokeLinejoin: "bevel",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        cx="13.229166"
        cy="13.229166"
        r="11.906249"
      />
      <text
        style={{
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "10.5833px",
          lineHeight: 1.25,
          fontFamily: "sansSerif",
          fill: params.stroke,
          fillOpacity: 1,
          stroke: "none",
        }}
      />
      <text
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "13.5612px",
          lineHeight: 1.25,
          fontFamily: "sansSerif",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          fill: params.stroke,
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.264583,
        }}
        x="5.2907453"
        y="13.617996"
      >
        <tspan x="6.6907453" y="13.617996">
          手
        </tspan>
      </text>
      <text
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 600,
          fontStretch: "normal",
          fontSize: "12.3472px",
          lineHeight: 1.25,
          fontFamily: "Yu Mincho",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          fill: params.stroke,
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.913269,
        }}
        transform="matrix(1.1989533,0,0,1,-3.9049205,-5.517306)"
      >
        <tspan x="7.9375" y="28.282489">
          <tspan
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "bold",
              fontStretch: "normal",
              fontSize: "12.3472px",
              fontFamily: "sansSerif",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              strokeWidth: 0.913269,
            }}
          >
            塚
          </tspan>
        </tspan>
      </text>
    </svg>
  );
};

export default Tezuka;
