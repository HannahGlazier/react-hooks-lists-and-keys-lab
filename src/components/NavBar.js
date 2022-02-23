import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key="Home" href="#home">home</a>
    <a key="About" href="#about">about</a>
    <a key="ProjectList" href="#projects">projects</a>
  </nav>;
}

export default NavBar;
