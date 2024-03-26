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

  const next = () => {
    setCurrent(current + 1);
  };
  return (
    <>
      <div>
        {showing === "home" && (
          <>
            <div className="Card_Container">
              {contentArr.map((car, i) => (
                <CardComponent
                  current={i === current}
                  next={next}
                  car={car}
                  gotLiked={gotLiked}
                />
              ))}
              {current >= content.length && (
                <div className="No_Content_Text_Container">
                  <p className="No_Content_Text">That's it!</p>
                </div>
              )}
            </div>
          </>
        )}
        {showing === "liked" && (
          <div className="Card_Container">
            {contentArr
              .filter((c) => c.liked)
              .map((car) => (
                <CardComponent current={true} next={next} car={car} />
              ))}
            {contentArr.filter((c) => c.liked).length === 0 && (
              <div className="No_Content_Text_Container">
                <p className="No_Content_Text">
                  Start liking cars and they will appear here
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <BottomTabs setShowing={setShowing} showing={showing} />
    </>
  );
};

export default App;
