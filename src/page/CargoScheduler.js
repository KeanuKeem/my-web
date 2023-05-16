import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleChevronLeft,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../components/CargoScheduler/Navbar";
import NavbarText from "../components/CargoScheduler/NavbarText";
import Sidebar from "../components/CargoScheduler/Sidebar";
import SidebarText from "../components/CargoScheduler/SidebarText";
import Calendar from "../components/CargoScheduler/Calendar";
import CalendarText from "../components/CargoScheduler/CalendarText";
import Todo from "../components/CargoScheduler/Todo";
import TodoText from "../components/CargoScheduler/TodoText";
import Shipment from "../components/CargoScheduler/Shipment";
import ShipmentText from "../components/CargoScheduler/ShipmentText";

import ColourContext from "../store/ColourContext";

import "./CargoScheduler.css";

const CargoScheduler = () => {
  const ctx = useContext(ColourContext);
  const [display, setDisplay] = useState("home");
  const [focus, setFocus] = useState("");

  return (
    <div className={ctx.colourMode === "light" ? "cs" : "cs-dark"}>
      <div className="cs__view">
        <div className="cs__view__top-bar">
          <FontAwesomeIcon
            className="cs__view__top-bar__exit"
            onClick={() => {
              setDisplay("home");
            }}
            icon={faCircleXmark}
          />
          <div
            className="cs__view__top-bar__link"
            onClick={() => {
              window.open("https://cargo-scheduler.onrender.com", "_blank");
            }}
          >
            <p>https://cargo-scheduler.onrender.com</p>
          </div>
        </div>
        <div className="cs__view__content">
          {display === "navbar" && <Navbar focus={focus} setFocus={setFocus} />}
          {display === "sidebar" && (
            <Sidebar focus={focus} setFocus={setFocus} />
          )}
          {display === "calendar" && (
            <Calendar focus={focus} setFocus={setFocus} />
          )}
          {display === "todo" && <Todo focus={focus} setFocus={setFocus} />}
          {display === "shipment" && (
            <Shipment focus={focus} setFocus={setFocus} />
          )}
          {display === "home" && (
            <div className="cs__view-home">
              <h3>This is a general guide on my project.</h3>
              <p>
                You can navigate through and once mouse pointer changes to{" "}
                <FontAwesomeIcon icon={faHandPointer} />, you will be
                able to see the functional guide.
              </p>
              <p>When clicked!</p>
              <p>You may click the link above to view the completed project!</p>
            </div>
          )}
        </div>
      </div>
      <div className="cs__desc">
        <div className="cs__desc__top-bar">
          <FontAwesomeIcon
            className="cs__view__top-bar__exit"
            onClick={() => {
              setDisplay("home");
              setFocus("");
            }}
            icon={faCircleXmark}
          />
          {display !== "home" && (
            <FontAwesomeIcon
              className="cs__view__top-bar__back"
              onClick={() => {
                setDisplay("home");
              }}
              icon={faCircleChevronLeft}
            />
          )}
        </div>
        <div className="cs__desc__text">
          {display === "navbar" && (
            <>
              <ul>
                <li className={display === "navbar" && "selected"}>Navbar</li>
                <NavbarText focus={focus} />
              </ul>
            </>
          )}
          {display === "sidebar" && (
            <>
              <ul>
                <li className={display === "sidebar" && "selected"}>Sidebar</li>
                <SidebarText focus={focus} />
              </ul>
            </>
          )}
          {display === "calendar" && (
            <>
              <ul>
                <li className={display === "calendar" && "selected"}>
                  Calendar View
                </li>
                <CalendarText focus={focus} />
              </ul>
            </>
          )}
          {display === "todo" && (
            <>
              <ul>
                <li className={display === "todo" && "selected"}>
                  To Do List View
                </li>
                <TodoText focus={focus} />
              </ul>
            </>
          )}
          {display === "shipment" && (
            <>
              <ul>
                <li className={display === "shipment" && "selected"}>
                  Shipment View
                </li>
                <ShipmentText focus={focus} />
              </ul>
            </>
          )}
          {display === "home" && (
            <ul>
              <li
                onClick={() => {
                  setDisplay("navbar");
                }}
              >
                Navbar
              </li>
              <li
                onClick={() => {
                  setDisplay("sidebar");
                }}
              >
                Sidebar
              </li>
              <li
                onClick={() => {
                  setDisplay("calendar");
                }}
              >
                Calendar View
              </li>
              <li
                onClick={() => {
                  setDisplay("todo");
                }}
              >
                To Do List View
              </li>
              <li
                onClick={() => {
                  setDisplay("shipment");
                }}
              >
                Shipment View
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CargoScheduler;
