import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Atropos = ({ params }: { params: CommonSymbolParams }) => {
  return (
    <svg
      width={DefaultSvgIconSize}
      height={DefaultSvgIconSize}
      viewBox="0 0 26.458333 26.458333"
    >
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
        d="M 21.166667,6.6145833 H 7.9374998"
        id="path3473"
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
        d="M 14.552083,18.520916 V 1.3229173"
        id="path3475"
      />
      <path
        style={{
          fill: "none",
          stroke: params.stroke,
          strokeWidth: 2.646,
          strokeLinecap: "butt",
          strokeLinejoin: "bevel",
          strokeMiterlimit: 0,
          strokeDasharray: "none",
        }}
        d="m -9.4407257,-15.82831 a 5.2916665,5.2917514 0 0 1 -5.5725563,3.902009 5.2916665,5.2917514 0 0 1 -4.810331,-4.810409 5.2916665,5.2917514 0 0 1 3.901946,-5.572645"
        transform="scale(-1)"
      />
      <text
        style={{
          fontStyle: "italic",
          fontVariant: "normal",
          fontWeight: "normal",
          fontStretch: "normal",
          fontSize: "13.8956px",
          lineHeight: 1.25,
          fontFamily: "Georgia",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          fill: params.stroke,
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.264583,
        }}
        x="2.8658032"
        y="27.177067"
        transform="scale(1.1079847,0.90253954)"
      >
        <tspan
          x="2.8658032"
          y="27.177067"
          style={{
            fontStyle: "italic",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontSize: "13.8956px",
            fontFamily: "Georgia",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            strokeWidth: 0.264583,
          }}
        >
          a
        </tspan>
      </text>
    </svg>
  );
};

export default Atropos;
