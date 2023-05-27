import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import applyAnimation from "./animate";

const Section3 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when entering the viewport
    threshold: 0.2, // Percentage of element visibility needed to trigger the animation
  });
  const [activeButton, setActiveButton] = useState("mountain1");
  const handleButtonClick = (button) => {
    setActiveButton(button);
    console.log(button);
  };

  return (
    <>
      <section className="section3" id="section3">
        <div className="climb">
          <div className="colab2">
            <div className="num-hist">
              <div className="number">02.</div>
              <div className="title">
                <div className="text1">Climb</div>
              </div>
            </div>
            <div className="description" style={{ marginLeft: "20px" }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, iure. Recusandae repudiandae dolorum dicta, laborum
                dolor distinctio nisi!
              </p>
            </div>
          </div>
        </div>

        <div className="menu">
          <div className="buttons">
            <button
              className={`mountain1 ${
                activeButton === "mountain1" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("mountain1")}
            >
              Mountain 1
            </button>
            <button
              className={`mountain2 ${
                activeButton === "mountain2" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("mountain2")}
            >
              Mountain 2
            </button>
          </div>
        </div>

        <animated.div
          style={applyAnimation(1000, "20px", 0.6, inView)}
          className="card-container"
        >
          <div
            className={`card1 ${activeButton === "mountain1" ? "active" : ""}`}
            style={{ display: activeButton === "mountain1" ? "block" : "none" }}
          >
            <div className="card-style">
              <div className="title">SCHEDULE</div>

              <div className="info">
                <div className="date">25 Nov 2016</div>
                <div className="location">Vestibulum viverra</div>
              </div>
              <div className="info">
                <div className="date">28 Nov 2016</div>
                <div className="location">Vestibulum viverra</div>
              </div>

              <div className="info">
                <div className="date">18 Dec 2016</div>
                <div className="location">Vestibulum viverra</div>
              </div>
              <div className="info">
                <div className="date">7 Nov 2016</div>
                <div className="location">Vestibulum viverra</div>
              </div>
            </div>
          </div>
          <div
            className={`card2 ${activeButton === "mountain2" ? "active" : ""}`}
            style={{ display: activeButton === "mountain2" ? "block" : "none" }}
          >
            <div className="card-style">
              <div className="title">SCHEDULE</div>

              <div className="info">
                <div className="date">10 Nov 2023</div>
                <div className="location">Addis Ababa</div>
              </div>
              <div className="info">
                <div className="date">28 Nov 2023</div>
                <div className="location">Addis Ababa</div>
              </div>

              <div className="info">
                <div className="date">18 Dec 2023</div>
                <div className="location">Addis Ababa</div>
              </div>
              <div className="info">
                <div className="date">7 Nov 2023</div>
                <div className="location">Addis Ababa</div>
              </div>
            </div>
          </div>
        </animated.div>
        <div ref={ref}></div>
      </section>
    </>
  );
};

export default Section3;
