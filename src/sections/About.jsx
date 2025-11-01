import React, { useEffect, useRef } from "react";
import JtechPic from "../assets/jeffie.jpg";
import "../styles/About.css";

const About = () => {
  const roleArr = ["Web Developer", "Frontend Developer"];
  const index = useRef(0);
  const elemRef = useRef(null);

  useEffect(() => {
    if (!elemRef.current) return;
    const elem = elemRef.current;

    function typeWriter(text, charIndex = 0) {
      if (!elem) return; 
      if (charIndex <= text.length) {
        elem.textContent = text.substring(0, charIndex);
        setTimeout(() => typeWriter(text, charIndex + 1), 100);
      } else {
        setTimeout(() => eraseWriter(text, text.length), 1500);
      }
    }

    function eraseWriter(text, charIndex) {
      if (!elem) return; // safety check
      if (charIndex >= 0) {
        elem.textContent = text.substring(0, charIndex);
        setTimeout(() => eraseWriter(text, charIndex - 1), 50);
      } else {
        index.current =
          index.current + 1 >= roleArr.length ? 0 : index.current + 1;
        typeWriter(roleArr[index.current]);
      }
    }

    typeWriter(roleArr[index.current]);
  }, []);

  return (
    <main>
      <div className="profile-img">
        <img src={JtechPic} alt="JeffTech" />
      </div>

      <div className="profile-txt" data-aos="fade-up">
        <span>Hello, I'm</span>
        <h2>Adeyemo Oluwaferanmi</h2>
        <p className="role">
          And I'm a <strong ref={elemRef}></strong>
        </p>
        <p className="what-i-do">
          I specialize in building clean, responsive websites and engaging user
          interfaces with modern frontend tools like HTML, CSS, JavaScript, and
          React.js.
        </p>
      </div>
    </main>
  );
};

export default About;
