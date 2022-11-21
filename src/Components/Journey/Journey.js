import React from "react";
import { useState } from "react";
import { useSprings, animated as a, useTransition } from "react-spring";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./Journey.scss";
import Signpost from "../../Assets/Images/signpost.png";
import Brainstation from "../../Assets/Images/brainstation.png";
import Programmer from "../../Assets/Images/programmer.png";
import Programming from "../../Assets/Images/programming.png";
import Challenge from "../../Assets/Images/challenge.png";
import Three from "../../Assets/Images/three.png";
import Typescript from "../../Assets/Images/Typescript.png";
import Redux from "../../Assets/Images/Redux.png";

// const data = [
//   {
//     id: 1,
//     from: { display: "none", x: 500 },
//     to: [{ display: "flex", x: 0 }, { x: -500 }, { display: "none" }],
//     delay: 3000,
//     text: (
//       <p>
//         After graduating from university I wasn't quite sure what path to go
//         down.
//       </p>
//     ),
//     // config: { mass: 4, friction: 80, tension: 50 },
//     config: { duration: 10000 },
//   },
// ];

function Journey(props) {
  const isFlipped = props.isFlipped;
  const setIsFlipped = props.setIsFlipped;
  const { screenWidth, screenHeight } = useWindowDimensions();

  const [slide, setSlide] = useState(false);
  const transition = useTransition(slide, {
    from: { x: -screenWidth },
    enter: { x: 0 },
    leave: { x: screenWidth },
  });

  // const spring = useSprings(
  //   data.length,
  //   data.map(({ ...from }) => from)
  // );

  const handlePropogation = (e) => {
    e.stopPropagation();
    setSlide(!slide);
  };

  return (
    <div className="journey">
      {/* {isFlipped
        ? spring.map((spring, index) => (
            <a.div
              className="journey__section"
              key={data[index].id}
              style={{ ...spring }}
            >
              {data[index].text}
            </a.div>
          ))
        : null} */}

      <div className="journey__section">
        <div className="journey__left-content">
          <p className="journey__text">
            After graduating from university I wasn't quite sure what path to go
            down.
          </p>
          <p className="journey__text">
            I ended up starting an e-commerce business on Amazon, which was
            sucessful.
          </p>
          <p className="journey__text">
            I then founded my first Tech Startup, working on a food based social
            media application. This was less successful. But I learnt a lot!
          </p>
        </div>
        <div className="journey__right-images">
          <img className="journey__sign" src={Signpost} alt="fork" />
        </div>
      </div>
      <div className="journey__section">
        <div className="journey__left-images">
          <img className="journey__sign" src={Programmer} alt="fork" />
        </div>
        <div className="journey__right-content">
          <p className="journey__text">
            I realised what I enjoyed most was coding.
          </p>
          <p className="journey__text">
            So I started taking online courses, learning HTML, CSS and Python.
          </p>
        </div>
      </div>
      <div className="journey__section">
        <div className="journey__left-content">
          <p className="journey__text">
            I began writing simple scripts and building static websites. I felt
            a great sence of acheivement, and wanted to learn more.
          </p>
        </div>
        <div className="journey__right-images">
          <img className="journey__sign" src={Programming} alt="fork" />
        </div>
      </div>
      <div className="journey__section">
        <div className="journey__left-images">
          <img className="journey__sign" src={Brainstation} alt="fork" />
        </div>
        <div className="journey__right-content">
          <p className="journey__text">
            So I enrolled in a 12 week intensive bootcamp at Brainstation.
          </p>
          <p className="journey__text">
            My progression was exponetial, I now knew everything I needed to
            develop a fullstack application.
          </p>
        </div>
      </div>
      <div className="journey__section">
        <div className="journey__left-content">
          <p className="journey__text">But I didnt stop there.</p>
          <p className="journey__text">
            I continued to take on new challenges and build more complex
            applications.
          </p>
          <p className="journey__text">
            And you might have noticed I like playing around with animations
            too.
          </p>
        </div>
        <div className="journey__right-images">
          <img className="journey__sign" src={Challenge} alt="fork" />
        </div>
      </div>
      <div className="journey__section--column">
        <div className="journey__center">
          <h4 className="journey__text-steps">So what are my next steps?</h4>
        </div>
        <div className="journey__bottom-images">
          <img className="journey__img-bottom" src={Redux} alt="fork" />
          <img className="journey__img-bottom" src={Typescript} alt="fork" />
          <img className="journey__img-bottom" src={Three} alt="fork" />
        </div>
      </div>
    </div>
  );
}

export default Journey;
