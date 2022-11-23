import React from "react";
import { useSpring, animated as a, config } from "react-spring";
import "./Card.scss";
import { useState, useEffect } from "react";
import Journey from "../Journey/Journey";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import Stack from "../Stack/Stack";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 2) / 50,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [style, setStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const { screenWidth, screenHeight } = useWindowDimensions();

  const [morph, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  const dealCards = useSpring({
    from: {
      x: 0,
      y: 0,
      rotateZ: 0,
    },

    rotateZ: props.deal ? props.rotate : 0,
    x: props.deal ? props.x : 0,
    y: props.deal ? props.y : 0,
    delay: props.deal ? props.delay : 0,
    width: screenWidth < 450 ? 120 : 150,
    height: screenWidth < 450 ? 180 : 221,
  });

  const deal = props.deal;
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      if (deal) {
        setStyle({ ...dealCards });
        setInitialRender(false);
      }
    }

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
  }, [deal, dealCards, initialRender]);

  const flipCards = useSpring({
    from: { rotateY: 0 },
    to: isFlipped
      ? [
          {
            zIndex: isFlipped ? 1000 : props.index,
            transform: `perspective(500px) rotateY(${isFlipped ? 180 : 0}deg)`,
            scale: isFlipped ? 2.4 : 1,
            x: isFlipped ? 0 : props.x,
            y: isFlipped ? 0 : props.y,
            rotateZ: isFlipped ? 360 : 0,
            config: config.molasses,
          },
          {
            width: isFlipped
              ? (screenWidth / 2) * 0.7
              : screenWidth < 450
              ? 120
              : 150,
            height: isFlipped
              ? (screenHeight / 2) * 0.7
              : screenWidth < 450
              ? 180
              : 221,
          },
        ]
      : [
          {
            width: isFlipped
              ? (screenWidth / 2) * 0.7
              : screenWidth < 450
              ? 120
              : 150,
            height: isFlipped
              ? (screenHeight / 2) * 0.7
              : screenWidth < 450
              ? 180
              : 221,
          },
          {
            transform: `perspective(500px) rotateY(${isFlipped ? 180 : 0}deg)`,
            scale: isFlipped ? 2.4 : 1,
            x: isFlipped ? 0 : props.x,
            y: isFlipped ? 0 : props.y,
            rotateZ: isFlipped ? 360 : 0,
            zIndex: isFlipped ? 1000 : props.index,
            config: config.molasses,
          },
        ],
  });

  const flipText = useSpring({
    to: [
      {
        display: "none",
        transform: `perspective(500px) rotateY(${isFlipped ? 0 : 180}deg)`,
        config: config.molasses,
      },
      { display: "flex" },
    ],
  });

  const handleCards = () => {
    setStyle({ ...flipCards });
    setIsFlipped(!isFlipped);
  };

  const renderChild = (input) => {
    if (input === "About") {
      return <Journey />;
    }
    if (input === "Stack") {
      return <Stack />;
    }
    if (input === "Projects") {
      return <Projects />;
    }
    if (input === "Contact") {
      return <Contact />;
    }
  };

  return (
    <a.div
      className="card"
      style={{
        ...style,
        backgroundSize: "cover",

        rotate: deal ? 0 : props.degs,
        backgroundColor: isFlipped ? "#faf7e6" : "none",
        backgroundImage: isFlipped ? "none" : `url(${props.image})`,
        transform: isMobile ? null : morph.xys.to(trans),
      }}
      onClick={handleCards}
      onMouseMove={({ clientX: x, clientY: y }) => {
        set.start({ xys: calc(x, y) });
      }}
      onMouseLeave={() => {
        set.start({ xys: [0, 0, 1] });
      }}
    >
      {isFlipped ? (
        <a.div className="card__inner" style={{ ...flipText }}>
          {renderChild(props.title)}
        </a.div>
      ) : (
        <p></p>
      )}
    </a.div>
  );
}

export default Card;
