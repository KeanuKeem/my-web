import { useState, useContext, useEffect } from "react";

import ColourContext from "../store/ColourContext";

import "./About.css";
import "../components/FontColour.css";

const About = () => {
  const ctx = useContext(ColourContext);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [contactClass, setContactClass] = useState("");
  const [educationClass, setEducationClass] = useState("");
  const [experienceClass, setExperienceClass] = useState("");
  const [skillClass, setSkillClass] = useState("");

  useEffect(() => {
    if (ctx.colourMode === "light") {
      if (contactClass === "selected-dark") {
        setContactClass("selected");
      } else if (educationClass === "selected-dark") {
        setEducationClass("selected");
      } else if (experienceClass === "selected-dark") {
        setExperienceClass("selected");
      } else if (skillClass === "selected-dark") {
        setSkillClass("selected");
      }
    } else {
      if (contactClass === "selected") {
        setContactClass("selected-dark");
      } else if (educationClass === "selected") {
        setEducationClass("selected-dark");
      } else if (experienceClass === "selected") {
        setExperienceClass("selected-dark");
      } else if (skillClass === "selected") {
        setSkillClass("selected-dark");
      }
    }
  }, [
    ctx.colourMode,
    contactClass,
    educationClass,
    experienceClass,
    skillClass,
  ]);

  return (
    <div className={ctx.colourMode === "light" ? "about" : "about-dark"}>
      <div className="about__title">
        <div
          className={
            ctx.colourMode === "light"
              ? "about__title__items " + contactClass
              : "about__title__items-dark " + contactClass
          }
          onClick={() => {
            setContactClass("selected");
            setEducationClass("");
            setExperienceClass("");
            setSkillClass("");
            setSelectedTitle("contact");
          }}
        >
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            Contact
          </span>
        </div>
        <div
          className={
            ctx.colourMode === "light"
              ? "about__title__items " + educationClass
              : "about__title__items-dark " + educationClass
          }
          onClick={() => {
            setContactClass("");
            setEducationClass("selected");
            setExperienceClass("");
            setSkillClass("");
            setSelectedTitle("education");
          }}
        >
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            Education
          </span>
        </div>
        <div
          className={
            ctx.colourMode === "light"
              ? "about__title__items " + experienceClass
              : "about__title__items-dark " + experienceClass
          }
          onClick={() => {
            setContactClass("");
            setEducationClass("");
            setExperienceClass("selected");
            setSkillClass("");
            setSelectedTitle("experience");
          }}
        >
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            Experience
          </span>
        </div>
        <div
          className={
            ctx.colourMode === "light"
              ? "about__title__items " + skillClass
              : "about__title__items-dark " + skillClass
          }
          onClick={() => {
            setContactClass("");
            setEducationClass("");
            setExperienceClass("");
            setSkillClass("selected");
            setSelectedTitle("skill");
          }}
        >
          <span className={ctx.colourMode === "light" ? "font" : "font-dark"}>
            Skill
          </span>
        </div>
      </div>
      <div
        className={
          ctx.colourMode === "light" ? "about__text" : "about__text-dark"
        }
      >
        {selectedTitle === "contact" && (
          <div
            className={
              ctx.colourMode === "light"
                ? "about__text__items"
                : "about__text__items-dark"
            }
          >
            <h2>Name: Keonwoo Kim</h2>
            <p>Email: keanu.keeem@gmail.com</p>
            <p>Contact: 0211780590</p>
          </div>
        )}
        {selectedTitle === "education" && (
          <div
            className={
              ctx.colourMode === "light"
                ? "about__text__items"
                : "about__text__items-dark"
            }
          >
            <h2>University of Auckland</h2>
            <p>Bachelor of Science (2014 - 2017)</p>
            <ul>
              <li>Computer Science</li>
              <li>Information System</li>
            </ul>
          </div>
        )}
        {selectedTitle === "experience" && (
          <div
            className={
              ctx.colourMode === "light"
                ? "about__text__items"
                : "about__text__items-dark"
            }
          >
            <h2>Pin Cargo LTD</h2>
            <p>Assistant Manager (2017-2023)</p>
            <ul>
              <li>General Logistics operations</li>
              <li>Website functionality: PHP/MSSQL</li>
              <li>Administration</li>
              <li>Operation Trainer</li>
            </ul>
          </div>
        )}
        {selectedTitle === "skill" && (
          <div
            className={
              ctx.colourMode === "light"
                ? "about__text__items"
                : "about__text__items-dark"
            }
          >
            <h2>My dev skills</h2>
            <ul>
              <li>React</li>
              <li>html/css/javascript</li>
              <li>Node/Express.js</li>
              <li>MongoDB/Mongoose</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
