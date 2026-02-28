// components/Projects/projectsData.js

import phoneImg from "../../assets/phoneImg.jpeg";
import cbtImg from "../../assets/cbtImg.webp";
import bookImg from "../../assets/Azimi-koko.png";
import nbmfImg from "../../assets/nbmf.jpg";
import cinemaImg from "../../assets/cinema.png";


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
  {
    title: "Ace-Cinema",
    desc: "A cinema website where you can book tickets and food, and make payment online via Paystack. Features include seat selection, food ordering, and seamless payment integration. Note: Uses Paystack test keys for demonstration.",
    url: "https://ace-cinema.netlify.app/",
    image: cinemaImg,
  },
];

export const professionalProjects = [
    {
        title: "A book Website",
        desc: "Full client project with payments via paystack.",
        url: "https://azimikoko.com/",
        image: bookImg,
    },
    {
        title: "National Bounce Music Foundation (NBMF)",
        desc: "Cultural institution website dedicated to preserving, protecting, and uplifting Bounce music — the heartbeat of New Orleans. Features membership system, event management, and community gallery.",
        url: "https://nationalbouncemusicfoundation.org/",
        image: nbmfImg,
    },
];
