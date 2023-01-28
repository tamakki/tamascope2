const Group = ({
  transform,
  children,
}: {
  transform: string;
  children: JSX.Element[];
}) => {
  return <g transform={transform}>{children}</g>;
};

export default Group;
