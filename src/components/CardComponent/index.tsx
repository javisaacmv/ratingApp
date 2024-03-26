import { FaHeart, FaTimes } from "react-icons/fa";
import "./card.css";
import { useState } from "react";
import RippleButton from "../RippleButton";

type Props = {
  current: boolean;
  next: () => void;
  car: {
    id: number;
    name: string;
    engine: string;
    description: string;
    img: string;
    liked: boolean;
  };
  gotLiked?: (id: number) => void;
};

const CardComponent = ({ current, next, car, gotLiked }: Props) => {
  const [result, setResult] = useState<"yes" | "no" | "">("");

  const handleSetResult = (type: "yes" | "no" | "") => {
    if (type === "yes" && gotLiked) gotLiked(car.id);
    setResult(type);
    setTimeout(() => {
      next();
    }, 700);
  };
  return (
    <div className={`Card ${current ? "Current" : "No_Current"} ${result}`}>
      <div className="Image_Container">
        <img className="Image" src={car.img} />
      </div>
      <div className="Description_Container">
        <h4>{car.name}</h4>
        <p>Engine: {car.engine}</p>
        <p>{car.description}</p>
      </div>
      {gotLiked && (
        <div className="Card_Footer">
          <RippleButton
            onClick={() => handleSetResult("no")}
            className={`Unlike_Button`}
          >
            <FaTimes className="Unlike_Icon" />
          </RippleButton>
          <RippleButton
            onClick={() => handleSetResult("yes")}
            className={`Like_Button`}
          >
            <FaHeart className="Like_Icon" />
          </RippleButton>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
