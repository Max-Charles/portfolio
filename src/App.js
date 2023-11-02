import "./App.scss";
import { useSpring, animated as a, config } from "react-spring";
// import { useDrag } from "react-use-gesture";
import { useState } from "react";
import Card from "./Components/Card/Card";
import Image1 from "./Assets/Images/card1.png";
import Image2 from "./Assets/Images/card2.png";
import Image3 from "./Assets/Images/card3.png";
import Image4 from "./Assets/Images/card4.png";
import useWindowDimensions from "./Hooks/useWindowDimensions";
import Stack from "./Components/Stack/Stack";
import Contact from "./Components/Contact/Contact";
import Journey from "./Components/Journey/Journey";

function App() {
  const [deal, setDeal] = useState(false);
  const [flip, setFlip] = useState(false);
  const { screenHeight, screenWidth } = useWindowDimensions();

  const handleClick = () => {
    setDeal(true);
  };

  const buttonAnimation = useSpring({
    reset: true,
    loop: 2,
    reverse: flip,
    cancel: deal,
    from: { scale: 1, color: "black", backgroundColor: "#faf7e6" },
    to: { scale: 1.1, color: "#faf7e6", backgroundColor: "black" },
    config: config.molasses,
    onRest: () => setFlip(!flip),
  });

  const titleAnimation = useSpring({
    delay: 3200,
    // mass: 5,
    // friction: 120,
    // tension: 120,
    from: { opacity: 0, scale: 0.5, color: "black" },
    to: [{ opacity: 1, scale: 1.5 }, { color: "#faf7e6" }],

    config: config.wobbly,
  });

  const subTitleAnimation = useSpring({
    delay: 4500,
    // tension: 200,
    // friction: 20,
    // loop: 5000,
    from: { opacity: 0, scale: 0.5, color: "black" },
    to: [{ opacity: 1, scale: 1.8 }, { color: "#faf7e6" }],
    config: config.wobbly,
  });

  return (
    <div
      className="App"
      style={{ maxHeight: screenHeight, maxWidth: screenWidth }}
    >
      <div className="card-container">
        {/* <h2>Max's Poker Room</h2> */}
        <div className="card-container__inner">
          <div className="card-container__inner-inner">
            <div className="card-container__inner-inner-inner">
              {deal ? (
                <>
                  <a.h2 style={{ ...titleAnimation }}>Pick a card,</a.h2>
                  <a.h3 style={{ ...subTitleAnimation, marginTop: "3rem" }}>
                    any card...
                  </a.h3>
                </>
              ) : (
                <h1
                  style={{
                    textAlign: "center",
                    top: "200px",
                    backgroundColor: "#faf7e6",
                    padding: "3px 10px ",
                  }}
                >
                  Welcome to Max's Poker Room
                </h1>
              )}

              <Card
                title={"Contact"}
                index={1}
                degs={"0deg"}
                rotate={360}
                x={
                  screenWidth > 450
                    ? -screenWidth / 2 + 150
                    : -screenWidth / 2 + 80
                }
                y={screenHeight / 2 - 200}
                delay={1500}
                deal={deal}
                image={Image4}
                text={<Contact />}
              />
              <Card
                title={"Projects"}
                index={2}
                degs={"-5deg"}
                rotate={360}
                x={
                  screenWidth > 450
                    ? screenWidth / 2 - 150
                    : screenWidth / 2 - 80
                }
                y={screenHeight / 2 - 200}
                delay={1000}
                deal={deal}
                image={Image3}
              />

              <Card
                // ref={cardRef}
                title={"About"}
                index={3}
                degs={"5deg"}
                rotate={360}
                x={
                  screenWidth > 450
                    ? screenWidth / 2 - 150
                    : screenWidth / 2 - 80
                }
                y={-screenHeight / 2 + 200}
                delay={500}
                deal={deal}
                image={Image2}
                text={<Journey />}
              />
              <Card
                title={"Stack"}
                index={4}
                degs={"-7deg"}
                rotate={360}
                x={
                  screenWidth > 450
                    ? -screenWidth / 2 + 150
                    : -screenWidth / 2 + 80
                }
                y={-screenHeight / 2 + 200}
                delay={0}
                deal={deal}
                image={Image1}
                text={<Stack />}
              />

              {deal ? (
                <></>
              ) : (
                <a.button
                  className="deal-button"
                  onClick={handleClick}
                  style={{
                    ...buttonAnimation,
                  }}
                >
                  Deal The Deck
                </a.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
