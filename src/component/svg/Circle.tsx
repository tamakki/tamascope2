import CommonSvgParams from "./commonParams";

const Circle = (
  params: {
    cx: number;
    cy: number;
    r: number;
  } & CommonSvgParams
) => {
  return (
    <circle
      cx={params.cx}
      cy={params.cy}
      r={params.r}
      stroke={params.stroke}
      fill={params.fill}
      className={params.className}
      style={params.style}
    />
  );
};

export default Circle;
