import Icons from "assets/svgs";

const Icon = ({ id, ...props }) => {
  const selectedIcon = Icons[id];
  return selectedIcon ? selectedIcon(props) : null;
};

export default Icon;
