import { DefaultSvgIconSize } from "../../../_shared/constants";
import { CommonSymbolParams } from "./commonSymbolParams";

const Moira = ({ params }: { params: CommonSymbolParams }) => {
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
        d="M 19.843751,6.6145 H 6.614584"
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
        d="m 13.229167,18.520833 0,-17.197999"
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
        d="m -8.1178096,-15.828226 a 5.2916665,5.2917514 0 0 1 -5.5725564,3.902009 5.2916665,5.2917514 0 0 1 -4.810331,-4.810409 5.2916665,5.2917514 0 0 1 3.901946,-5.572645"
        transform="scale(-1)"
      />
    </svg>
  );
};

export default Moira;
