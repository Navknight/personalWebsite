import React from "react";
import randomQuotes from "./randomQuotes.png";
import drumMachine from "./drumMachine.png";
import sortingVisualizer from "./sortingVisualizer.png";
import "./page.css";

export default function Page() {
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
        <h2 className="work-header">This is some of my work</h2>
        <div className="work-grid">
          <a className="work work-title">
            <img className="work-image" src={randomQuotes}></img>
            <p className="work-title">Random Quote Machine</p>
          </a>
          <a className="work work-title">
            <img className="work-image" src={drumMachine}></img>
            <p className="work-title">Drum Machine</p>
          </a>
          <a className="work work-title">
            <img className="work-image" src={sortingVisualizer}></img>
            <p className="work-title">Sorting Visualizer</p>
          </a>
        </div>
      </div>
      <div className="contact" id="contact"></div>
    </div>
  );
}
