import { useState } from "react";

import "./About.css";

const About = (props) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [contactClass, setContactClass] = useState("");
  const [educationClass, setEducationClass] = useState("");
  const [experienceClass, setExperienceClass] = useState("");
  const [skillClass, setSkillClass] = useState("");

  return (
    <div className="about">
      <div className="about__title">
        <div
          className={"about__title__items " + contactClass}
          onClick={() => {
            setContactClass("selected");
            setEducationClass("");
            setExperienceClass("");
            setSkillClass("");
            setSelectedTitle("contact");
          }}
        >
          <span>Contact</span>
        </div>
        <div
          className={"about__title__items " + educationClass}
          onClick={() => {
            setContactClass("");
            setEducationClass("selected");
            setExperienceClass("");
            setSkillClass("");
            setSelectedTitle("education");
          }}
        >
          <span>Education</span>
        </div>
        <div
          className={"about__title__items " + experienceClass}
          onClick={() => {
            setContactClass("");
            setEducationClass("");
            setExperienceClass("selected");
            setSkillClass("");
            setSelectedTitle("experience");
          }}
        >
          <span>Experience</span>
        </div>
        <div
          className={"about__title__items " + skillClass}
          onClick={() => {
            setContactClass("");
            setEducationClass("");
            setExperienceClass("");
            setSkillClass("selected");
            setSelectedTitle("skill");
          }}
        >
          <span>Skill</span>
        </div>
      </div>
      <div className="about__text">
        {selectedTitle === "contact" && (
          <div className="about__text__items">
            <h2>Name: Keonwoo Kim</h2>
            <p>Email: keanu.keeem@gmail.com</p>
            <p>Contact: 0211780590</p>
          </div>
        )}
        {selectedTitle === "education" && (
          <div className="about__text__items">
            <h2>University of Auckland</h2>
            <p>Bachelor of Science (2014 - 2017)</p>
            <ul>
              <li>Computer Science</li>
              <li>Information System</li>
            </ul>
          </div>
        )}
        {selectedTitle === "experience" && (
          <div className="about__text__items">
            <h2>Pin Cargo LTD</h2>
            <p>Assistant Manager (2017-2023)</p>
            <ul>
              <li>General Logistics operations</li>
              <li>Website functionality: PHP/MSSQL</li>
              <li>Onboarding and Outboarding</li>
              <li>Operation Trainer</li>
              <li>Tech Support: Domain/Network/Phone</li>
            </ul>
          </div>
        )}
        {selectedTitle === "skill" && (
          <div className="about__text__items">
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
