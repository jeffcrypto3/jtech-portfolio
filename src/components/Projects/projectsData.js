// components/Projects/projectsData.js

import phoneImg from "../../assets/phoneImg.jpeg";
import cbtImg from "../../assets/cbtImg.webp";
import bookImg from "../../assets/Azimi-koko.png";


export const miniProjects = [
  {
    title: "Phone Clone",
    desc: "Minimal Phone clone built with HTML, CSS & Javascript — persistent and responsive. Just design, not much functionality, only camera. The pin to unlock is 4753",
    url: "https://jeffsphone.netlify.app/",
    image: phoneImg,
  },
  {
    title: "CBT App",
    desc: "An interactive CBT application that allows users to take timed quizzes, review scores instantly, and retake tests seamlessly — built with HTML, CSS, and JavaScript for a smooth and responsive experience.",
    url: "https://jeffsquiz.netlify.app/",
    image: cbtImg,
  },
];

export const professionalProjects = [
    {
        title: "A book Website",
        desc: "Full client project with payments via paystack.",
        url: "https://azimikoko.com/",
        image: bookImg,
    },
];
