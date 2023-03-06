import React, { useEffect } from "react";
import randomQuotes from "./randomQuotes.png";
import drumMachine from "./drumMachine.png";
import sortingVisualizer from "./sortingVisualizer.png";
import lua from "./Lua.png";
import markdown from "./markdown.png";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    target.style.setProperty("--x", x + "px");
    target.style.setProperty("--y", y + "px");
  };

  useEffect(() => {
    for (const div of document.querySelectorAll(".about")) {
      div.addEventListener("mousemove", handleOnMouseMove);
    }
  }, []);

  const onMouseMove = (e) => {
    const trailer = document.getElementById("trailer");
    const arrow = document.getElementsByClassName("arrow");

    const interactable = e.target.closest(".work"),
      interacting = interactable !== null;

    if (!interacting) {
      arrow[0].style.opacity = 0;
    } else arrow[0].style.opacity = 1;

    const x = e.clientX,
      y = e.clientY;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`,
    };
    trailer.animate(keyframes, { duration: 800, fill: "forwards" });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="body">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="about" id="about">
        <h1>Hi I am Abhinav</h1>
        <p>And this is my webpage</p>
      </div>
      <div className="works" id="work">
        <div className="trailer" id="trailer">
          <FontAwesomeIcon className="arrow" icon={faArrowUpRightFromSquare} />
        </div>
        <h2 className="work-header">This is some of my work</h2>
        <div className="work-grid">
          <a
            className="work work-title"
            href="https://github.com/Navknight/SpeakingLua"
            target="_blank"
          >
            <img className="work-image" src={lua}></img>
            <p className="work-title">Interpreter for Lua</p>
          </a>
          <a
            className="work work-title"
            href="https://github.com/Navknight/sorting-visualizer"
            target="_blank"
          >
            <img className="work-image" src={sortingVisualizer}></img>
            <p className="work-title">Sorting Visualizer</p>
          </a>
          <a
            className="work work-title"
            href="https://github.com/Navknight/randomQuotesMachine"
            target="_blank"
          >
            <img className="work-image" src={randomQuotes}></img>
            <p className="work-title">Random Quote Machine</p>
          </a>
          <a
            className="work work-title"
            href="https://github.com/Navknight/drumMachine"
            target="_blank"
          >
            <img className="work-image" src={drumMachine}></img>
            <p className="work-title">Drum Machine</p>
          </a>
          <a
            className="work work-title"
            href="https://github.com/Navknight/markdownPreviewer"
            target="_blank"
          >
            <img className="work-image" src={markdown}></img>
            <p className="work-title">Markdown Previewer</p>
          </a>
        </div>
      </div>
      <div className="contact" id="contact"></div>
    </div>
  );
}
