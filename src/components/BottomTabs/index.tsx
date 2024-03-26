import "./bottomTabs.css";
import { FaHeart, FaHome } from "react-icons/fa";

type Props = {
  showing: "home" | "liked";
  setShowing: (value: "home" | "liked") => void;
};

const BottomTabs = ({ showing, setShowing }: Props) => {
  return (
    <div className="Nav">
      <div
        className={`Nav_Item ${showing === "home" ? "active" : ""}`}
        onClick={() => setShowing("home")}
      >
        <FaHome className="Nav_Icon Home_Icon" />
        <span className="Nav_Text">Home</span>
      </div>
      <div
        className={`Nav_Item ${showing === "liked" ? "active" : ""}`}
        onClick={() => setShowing("liked")}
      >
        <FaHeart className="Nav_Icon Favorite_Icon" />
        <span className="Nav_Text">Likes</span>
      </div>
    </div>
  );
};

export default BottomTabs;
