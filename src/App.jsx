// App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Firstsectn from "./components/Firstsectn/Firstsectn";
import Skills from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Firstsectn />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
