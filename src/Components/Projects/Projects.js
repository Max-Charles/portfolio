import React from "react";
import "./Projects.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import JewelleryOne from "../../Assets/Images/Jewellery-1.png";
import JewelleryTwo from "../../Assets/Images/Jewellery-2.png";
import JewelleryThree from "../../Assets/Images/Jewellery-3.png";
import JewelleryFour from "../../Assets/Images/Jewellery-4.png";
import JewelleryFive from "../../Assets/Images/Jewellery-5.png";

function Projects() {
  const handlePropogation = (e) => {
    e.stopPropagation();
  };

  const carouselProps = {
    showThumbs: false,
    autoPlay: true,
    interval: 1500,
    infiniteLoop: true,
    showIndicators: false,
    showStatus: false,
  };

  return (
    <div className="projects">
      <div className="projects__project">
        <h2 className="projects__title">Branded Jewellery UK</h2>
        <h3 className="projects__sub-title">Brief:</h3>
        <p className="projects__brief">
          Create a responsive e-commerce store for the client - Branded
          Jewellery UK. Including a secure admin panel to manage and update
          inventory.
        </p>

        <h3 className="projects__sub-title">Specs:</h3>
        <ul className="projects__specs">
          <li>Frontend: React</li>
          <li>Image Storage: Firebase Cloud Storage</li>
          <li>Database: Firebase Firestore</li>
          <li>Deployment: Heroku</li>
        </ul>

        <div className="projects__carousel" onClick={handlePropogation}>
          <Carousel {...carouselProps}>
            <div>
              <img
                className="projects__slide-image"
                src={JewelleryOne}
                alt="slide-img"
              />
            </div>
            <div>
              <img
                className="projects__slide-image"
                src={JewelleryTwo}
                alt="slide-img"
              />
            </div>
            <div>
              <img
                className="projects__slide-image"
                src={JewelleryThree}
                alt="slide-img"
              />
            </div>
            <div>
              <img
                className="projects__slide-image"
                src={JewelleryFour}
                alt="slide-img"
              />
            </div>
            <div>
              <img
                className="projects__slide-image"
                src={JewelleryFive}
                alt="slide-img"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
