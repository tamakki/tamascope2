import Svg from "../component/svg/Svg";
import SvgImage from "../component/SvgImage";
import Symbol from "../component/svg/Symbol";
import { useEffect, useState } from "react";
import { bodyTypes, Body } from "../_shared/constants";

const rotate = (callback: () => void) => {
  setInterval(callback, 100);
};

const Natal = () => {
  const [body, setBody] = useState<Body>(bodyTypes[bodyTypes.length - 1]);
  const [angle, setAngle] = useState(0);
  const [size, setSize] = useState(50);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [color, setColor] = useState("#dd9999");
  const handleChangeBody: React.ChangeEventHandler<HTMLSelectElement> = (
    ev
  ) => {
    setBody(ev.target.value as Body);
  };
  const handleChangeAngle: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setAngle(parseInt(ev.target.value));
  };
  const handleChangeSize: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setSize(parseInt(ev.target.value));
  };
  const handleChangeX: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setX(parseInt(ev.target.value));
  };
  const handleChangeY: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setY(parseInt(ev.target.value));
  };
  const handleChangeColor: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setColor(ev.target.value);
  };

  return (
    <div>
      Natal
      <br />
      <select onChange={handleChangeBody}>
        {bodyTypes.map((element) => {
          return (
            <option value={element} selected={element === body}>
              {element}
            </option>
          );
        })}
      </select>
      <br />
      Angle:{" "}
      <input
        type="number"
        value={angle}
        step={5}
        onChange={handleChangeAngle}
      />
      <br />
      Size: <input type="number" value={size} onChange={handleChangeSize} />
      <br />
      X: <input type="number" value={x} onChange={handleChangeX} />
      <br />
      Y: <input type="number" value={y} onChange={handleChangeY} />
      <br />
      Color: <input type="color" value={color} onChange={handleChangeColor} />
      <Svg
        viewBox={`0 0 100 100`}
        style={{ width: "200px", height: "200px", border: "1px solid #000" }}
      >
        <line x1={0} y1={0} x2={100} y2={100} stroke={"#000"} />
        <line x1={0} y1={100} x2={100} y2={0} stroke={"#000"} />
        <Symbol
          style={{ outline: "1px solid red" }}
          body={body}
          stroke={color}
          fill={color}
          x={x}
          y={y}
          width={size}
          height={size}
          angle={angle}
        />
      </Svg>
      <p>
        {bodyTypes.map((body) => {
          return (
            <div>
              <SvgImage iconName={body} /> {body}
            </div>
          );
        })}
      </p>
    </div>
  );
};
export default Natal;
