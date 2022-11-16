import React from "react";
import { useSpring, animated as a, config } from "react-spring";
import "./Card.scss";
import { useState, useEffect } from "react";
import Journey from "../Journey/Journey";

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [style, setStyle] = useState({});
  const [hovered, setHovered] = useState(false);

  const [morph, set] = useSpring(() => ({
    xys: [0, 0, 1],
    // zIndex: 1000,
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
  }, [deal, dealCards, initialRender]);

  const flipCards = useSpring({
    from: { rotateY: 0 },
    to: isFlipped
      ? [
          {
            transform: `perspective(500px) rotateY(${isFlipped ? 180 : 0}deg)`,
            scale: isFlipped ? 2.4 : 1,
            x: isFlipped ? 0 : props.x,
            y: isFlipped ? 0 : props.y,
            rotateZ: isFlipped ? 360 : 0,

            config: config.molasses,
          },
          {
            width: isFlipped ? window.innerWidth / 4 : 150,
          },
        ]
      : [
          {
            width: isFlipped ? window.innerWidth / 4 : 150,
          },
          {
            transform: `perspective(500px) rotateY(${isFlipped ? 180 : 0}deg)`,
            scale: isFlipped ? 2.4 : 1,
            x: isFlipped ? 0 : props.x,
            y: isFlipped ? 0 : props.y,
            rotateZ: isFlipped ? 360 : 0,

            config: config.molasses,
          },
        ],
  });

  const flipText = useSpring({
    transform: `perspective(500px) rotateY(${isFlipped ? 0 : 180}deg)`,
  });

  const handleCards = () => {
    setStyle({ ...flipCards });
    setIsFlipped(!isFlipped);

    // console.log(isFlipped);
  };

  //   const [hovered, setHovered] = useState(false);

  //   const handleHover = () => {
  //     setHovered(!hovered);
  //   };

  //   const hoverAnimation = useSpring({
  //     scale: hovered ? 1.1 : 1,
  //   });

  const renderChild = (input) => {
    if (input === "About") {
      return <Journey isFlipped={props.isFlipped} />;
    }
  };

  return (
    <a.div
      className="card"
      style={{
        // ...hoverAnimation,
        ...style,
        zIndex: isFlipped || hovered ? 1000 : props.index,
        rotate: deal ? 0 : props.degs,
        backgroundColor: isFlipped ? "#faf7e6" : "none",
        backgroundImage: isFlipped ? "none" : `url(${props.image})`,
        transform: morph.xys.to(trans),
      }}
      onClick={handleCards}
      onMouseMove={({ clientX: x, clientY: y }) => {
        set.start({ xys: calc(x, y) });
        setHovered(true);
      }}
      onMouseLeave={() => {
        set.start({ xys: [0, 0, 1] });
        setHovered(false);
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
