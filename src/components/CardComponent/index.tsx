import { FaCheck, FaTimes } from "react-icons/fa";
import "./card.css";
import { useState } from "react";

type Props = {
  current: boolean;
  next: () => void;
  car: {
    id: number;
    name: string;
    engine: string;
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
      <div className="Card_Content">
        <div className="Description_Container">
          <p>{car.name}</p>
          <p>Engine: {car.engine}</p>
        </div>
        {gotLiked && (
          <div className="Card_Footer">
            <div className="Red_Button" onClick={() => handleSetResult("no")}>
              <FaTimes className="Button_Icon" />
            </div>
            <div
              className="Green_Button"
              onClick={() => handleSetResult("yes")}
            >
              <FaCheck className="Button_Icon" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
