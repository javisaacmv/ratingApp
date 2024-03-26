import { useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import { content } from "./content";
import BottomTabs from "./components/BottomTabs";

const App = () => {
  const [showing, setShowing] = useState<"home" | "liked">("home");
  const [current, setCurrent] = useState(0);
  const [contentArr, setContentArr] = useState(content);

  const gotLiked = (id: number) => {
    const arr = contentArr.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          liked: true,
        };
      } else {
        return c;
      }
    });
    setContentArr(arr);
  };

  console.log(contentArr);

  const next = () => {
    setCurrent(current + 1);
  };
  return (
    <>
      <div>
        {/* <Drawer setShowing={setShowing} /> */}
        {showing === "home" && (
          <div className="Card_Container">
            {contentArr.map((car, i) => (
              <CardComponent
                current={i === current}
                next={next}
                car={car}
                gotLiked={gotLiked}
              />
            ))}
            {current >= content.length && <p>That's it!</p>}
          </div>
        )}
        {showing === "liked" && (
          <div className="Card_Container">
            {contentArr
              .filter((c) => c.liked)
              .map((car) => (
                <CardComponent current={true} next={next} car={car} />
              ))}
          </div>
        )}
      </div>
      <BottomTabs setShowing={setShowing} showing={showing} />
    </>
  );
};

export default App;
