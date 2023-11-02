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
import TypeScript from "../../Assets/Images/Typescript.png";
import Next from "../../Assets/Images/next.png";
import StyledComponents from "../../Assets/Images/StyledComponents.png";
import Plotly from "../../Assets/Images/plotly.png";
import Mui from "../../Assets/Images/mui.png";
import Express from "../../Assets/Images/ExpressJS.png";
import TestingLibrary from "../../Assets/Images/reactTestingLibrary.png";
import azure from "../../Assets/Images/azure.png";
import git from "../../Assets/Images/git.png";
import zendesk from "../../Assets/Images/zendesk.png";

function Stack() {
  return (
    <div className="stack">
      <div className="stack__container">
        <img className="stack__images" src={JavaScript} alt="javascript" />
        <h3 className="stack__title">JavaScript</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={TypeScript} alt="javascript" />
        <h3 className="stack__title">TypeScript</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={react} alt="react" />
        <h3 className="stack__title">React</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Next} alt="Next js" />
        <h3 className="stack__title">Next</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={python} alt="python" />
        <h3 className="stack__title">Python</h3>
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
        <img
          className="stack__images"
          src={StyledComponents}
          alt="styled components"
        />
        <h3 className="stack__title">Styled Components</h3>
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
        <img className="stack__images" src={Express} alt="express" />
        <h3 className="stack__title">Express</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Jest} alt="jest" />

        <h3 className="stack__title">Jest</h3>
      </div>
      <div className="stack__container">
        <img
          className="stack__images"
          src={TestingLibrary}
          alt="react testing library"
        />
        <h3 className="stack__title">React Testing Library</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Plotly} alt="Plotly JS" />
        <h3 className="stack__title">Plotly JS</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Mui} alt="Mui" />
        <h3 className="stack__title">Material UI</h3>
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
        <img className="stack__images" src={MySql} alt="mysql" />
        <h3 className="stack__title">MySQL</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={azure} alt="azure" />
        <h3 className="stack__title">Azure DevOps</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Heroku} alt="heroku" />
        <h3 className="stack__title">Heroku</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={git} alt="git" />
        <h3 className="stack__title">Git</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={Github} alt="GitHub" />
        <h3 className="stack__title">GitHub</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={zendesk} alt="zendesk" />
        <h3 className="stack__title">Zendesk</h3>
      </div>
      <div className="stack__container">
        <img className="stack__images" src={npm} alt="npm" />
        <h3 className="stack__title">NPM</h3>
      </div>
    </div>
  );
}

export default Stack;
