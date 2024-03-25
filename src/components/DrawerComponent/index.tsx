import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import "./drawer.css";

type Props = {
  setShowing: (type: "home" | "liked") => void;
};

const Drawer = ({ setShowing }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const selectPage = (name: "home" | "liked") => {
    toggleDrawer();
    setShowing(name);
  };
  return (
    <div>
      <div className="App__TitleBar">
        <div className="DrawerButton_Container" onClick={toggleDrawer}>
          <LuMenu />
        </div>
      </div>

      <div
        className={`Drawer__Container ${isOpen && "Drawer__Container--isOpen"}`}
      >
        <span className="Drawer_Item" onClick={() => selectPage("home")}>
          Home
        </span>
        <span className="Drawer_Item" onClick={() => selectPage("liked")}>
          Liked
        </span>
      </div>
    </div>
  );
};

export default Drawer;
