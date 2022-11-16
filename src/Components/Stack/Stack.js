import React from "react";
import "./Stack.scss";
import Css from "../../Assets/Images/css.png";
import node from "../../Assets/Images/node.png";
import Firebase from "../../Assets/Images/firebase.png";
import Heroku from "../../Assets/Images/heroku.png";
import Html from "../../Assets/Images/html.png";
import JavaScript from "../../Assets/Images/JavaScript.png";
import Jest from "../../Assets/Images/jest.png";
import MySql from "../../Assets/Images/mySQL.png";
import Github from "../../Assets/Images/Github.png";
import npm from "../../Assets/Images/npm.png";
import python from "../../Assets/Images/python.png";
import react from "../../Assets/Images/react.png";
import reactSpring from "../../Assets/Images/reactSpring.png";
import sass from "../../Assets/Images/sass.png";

function Stack() {
  return (
    <div className="stack">
      <div className="stack__container">
        <img className="stack__images" src={react} alt="react" />
        <h3 className="stack__title">React</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={JavaScript} alt="javascript" />
        <h3 className="stack__title">JavaScript</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Html} alt="html" />
        <h3 className="stack__title">HTML:5</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Css} alt="css" />
        <h3 className="stack__title">CSS</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={sass} alt="sass" />

        <h3 className="stack__title">SASS</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={node} alt="node" />

        <h3 className="stack__title">Node</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Jest} alt="jest" />

        <h3 className="stack__title">Jest</h3>
      </div>

      <div className="stack__container">
        <img className="stack__images" src={reactSpring} alt="React Spring" />

        <h3 className="stack__title">React Spring</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Firebase} alt="firebase" />
        <h3 className="stack__title">Firebase</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Heroku} alt="heroku" />
        <h3 className="stack__title">Heroku</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={MySql} alt="mysql" />
        <h3 className="stack__title">MySQL </h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Github} alt="GitHub" />
        <h3 className="stack__title">GitHub</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={npm} alt="npm" />
        <h3 className="stack__title">NPM</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={python} alt="python" />
        <h3 className="stack__title">Python</h3>
      </div>
    </div>
  );
}

export default Stack;
