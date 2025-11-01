import React, { useEffect, useState } from "react";
import "./Firstsectn.css";
import myphoto from "../../../src/images/jtechpic.jpg"

const Firstsectn = () => {
  const role = "Website Developer";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      // type one character at a time
      setText(role.slice(0, index + 1));
      index++;

      // stop when full text is displayed
      if (index === role.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <main id="home">
      <div className="profile-img">
        <img src={myphoto} alt="JeffTech" />
      </div>

      <div className="profile-txt">
        <span>Hello, I'm</span>
        <h2>Adeyemo Oluwaferanmi</h2>
        <p className="role">
          And I'm a <strong>{text}</strong>
        </p>
        <p className="what-i-do">
          I specialize in building clean, responsive websites and engaging user
          interfaces with modern frontend tools like HTML, CSS, JavaScript, React.js and Node.js.
        </p>
      </div>
    </main>
  );
};

export default Firstsectn;
