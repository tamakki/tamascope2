import { CSSProperties } from "react";

const Svg = ({
  width,
  height,
  children,
  style,
  viewBox,
}: {
  width?: number;
  height?: number;
  children: JSX.Element[];
  style?: CSSProperties;
  viewBox?: string;
}) => {
  return (
    <svg width={width} height={height} style={style} viewBox={viewBox}>
      {children}
    </svg>
  );
};

export default Svg;
