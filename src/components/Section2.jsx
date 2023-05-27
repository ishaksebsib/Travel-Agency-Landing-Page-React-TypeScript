import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import applyAnimation from "./animate";
import { Link, animateScroll as scroll } from "react-scroll";

const Section2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when entering the viewport
    threshold: 0.2, // Percentage of element visibility needed to trigger the animation
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once when entering the viewport
    threshold: 0.2, // Percentage of element visibility needed to trigger the animation
  });

  const [activeNow, setActiveNow] = useState(1);
  const slides = [
    {
      id: 1,
      url1: "assets/person/1.jpg",
      url2: "assets/person/2.jpg",
      url3: "assets/person/3.jpg",
      url4: "assets/person/2.jpg",
    },
    {
      id: 2,
      url1: "assets/person/3.jpg",
      url2: "assets/person/4.jpg",
      url3: "assets/person/1.jpg",
      url4: "assets/person/3.jpg",
    },
    {
      id: 3,
      url1: "assets/person/4.jpg",
      url2: "assets/person/2.jpg",
      url3: "assets/person/3.jpg",
      url4: "assets/person/1.jpg",
    },
  ];
  return (
    <section className="section2" id="section2">
      <div ref={ref} className="nav2">
        <animated.div
          style={applyAnimation(1000, "20px", 0.6, inView)}
          className="logo2"
        >
          <img src="../assets/logo/logo.png" alt="Logo" />

          <div className="logo2-text">
            <span className="logo2-text1">LOSANGELES</span>
            <span className="logo2-text2">MOUNTAINS</span>
          </div>
        </animated.div>
        <animated.div
          style={applyAnimation(1200, "20px", 0.6, inView)}
          className="links"
        >
          <i>
            <Link
              to="section2"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              activeClass="activelink"
              style={{ cursor: "pointer" }}
            >
              01 History
            </Link>
          </i>
          <i>
            <Link
              to="section3"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              activeClass="activelink"
              style={{ cursor: "pointer" }}
            >
              Team
            </Link>
          </i>
        </animated.div>
      </div>

      <div ref={ref} className="history">
        <div className="colab">
          <animated.div
            style={applyAnimation(1500, "20px", 0.6, inView)}
            className="num-hist"
          >
            <div className="number">01.</div>
            <div className="title">
              <div className="text1">History</div>
            </div>
          </animated.div>
          <animated.div
            style={applyAnimation(1000, "20px", 0.8, inView)}
            className="description"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              saepe porro ullam eveniet perferendis, obcaecati harum aut,
              placeat, nobis cumque optio nulla ratione quos temporibus sapiente
              libero laudantium. Dolore, mollitia. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Adipisci et eveniet quod quia odit
              omnis quas,?
            </p>
          </animated.div>
        </div>
      </div>

      <div className="imagepart">
        <div className="slider">
          <div ref={ref2} className="slides">
            {slides.map((card) => {
              if (card.id === activeNow) {
                return (
                  <div key={card.id} className="slide">
                    <div className="images">
                      <animated.div
                        style={applyAnimation(1000, "20px", 0.6, inView2)}
                        className="card"
                      >
                        <img src={card.url1} alt="Person 1" />
                      </animated.div>
                      <animated.div
                        style={applyAnimation(1400, "20px", 0.6, inView2)}
                        className="card"
                      >
                        <img src={card.url2} alt="Person 2" />
                      </animated.div>
                      <animated.div
                        style={applyAnimation(1800, "20px", 0.6, inView2)}
                        className="card"
                      >
                        <img src={card.url3} alt="Person 3" />
                      </animated.div>
                      <animated.div
                        style={applyAnimation(2600, "20px", 0.6, inView2)}
                        className="card"
                      >
                        <img src={card.url4} alt="Person 4" />
                      </animated.div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="dots">
            {slides.map((card) => (
              <animated.span
                key={card.id}
                className={`dot ${card.id === activeNow ? "active" : ""}`}
                style={applyAnimation(
                  (2600 * card.id) / 4,
                  "20px",
                  0.6,
                  inView2
                )}
                onClick={() => {
                  setActiveNow(card.id);
                }}
              ></animated.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
