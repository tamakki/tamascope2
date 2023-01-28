import { CSSProperties } from "react";
import { Body, Sign } from "../_shared/constants";

const defaultStyle: CSSProperties = {
  width: "1em",
  height: "1em",
  verticalAlign: "text-bottom",
};

const SvgImage = ({
  iconName,
  style = {},
}: {
  iconName: Body | Sign;
  style?: CSSProperties;
}) => {
  return (
    <img
      src={`./svg/${iconName}.svg`}
      style={{ ...defaultStyle, ...style }}
      alt={iconName}
    />
  );
};

export default SvgImage;
