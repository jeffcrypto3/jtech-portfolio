import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div class="portfolio-txt">
            <h2>JeffTech</h2>
        </div>

        <ul class="nav-links" id="navLinks">
            <li><a class="links" href="#">Home</a></li>
            <li><a class="links" href="#skills">Skills</a></li>
            <li><a class="links" href="#about">About</a></li>
            <li><a class="links" href="#project">Projects</a></li>
            <li><a class="links" href="pro.html"> View All Projects</a></li>
            <li><a class="CV" href="">CV/Resume</a></li>
        </ul>
        <div class="menu-icon" onclick="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#facc15">
                <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
        </div>
    </nav>
  )
}

export default Navbar
