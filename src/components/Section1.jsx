import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import applyAnimation from "./animate";
import { Link, animateScroll as scroll } from "react-scroll";

const Section1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when entering the viewport
    threshold: 0.2, // Percentage of element visibility needed to trigger the animation
  });

  return (
    <section className="main">
      <header>
        <nav ref={ref}>
          <animated.div
            style={applyAnimation(1000, "20px", 0.6, inView)}
            className="logo"
          >
            <img src="assets/logo/logo.png" alt="Logo" />
          </animated.div>
          <animated.div
            style={applyAnimation(1000, "20px", 0.6, inView)}
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
        </nav>
      </header>

      <div ref={ref} className="content">
        <animated.h1 style={applyAnimation(1600, "35px", 0.3, inView)}>
          <span className="top">LOSANGELES</span>
          <span className="bottom"> MOUNTAINS</span>
        </animated.h1>
      </div>
    </section>
  );
};

export default Section1;
