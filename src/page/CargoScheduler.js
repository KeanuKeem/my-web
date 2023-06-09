import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleChevronLeft,
  faHandPointer,
  faEllipsis,
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
import "../components/FontColour.css";

const CargoScheduler = () => {
  const ctx = useContext(ColourContext);
  const [display, setDisplay] = useState("home");
  const [focus, setFocus] = useState("");
  const [mobileDescClass, setMobileDescClass] = useState(
    ctx.colourMode === "light" ? "cs__desc" : "cs__desc-dark"
  );

  return (
    <div className={ctx.colourMode === "light" ? "cs" : "cs-dark"}>
      <div
        className={ctx.colourMode === "light" ? "cs__view" : "cs__view-dark"}
      >
        <div
          className={
            ctx.colourMode === "light"
              ? "cs__view__top-bar"
              : "cs__view__top-bar-dark"
          }
        >
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
          <div
            className="cs__desc-mob"
            onClick={() => {
              setMobileDescClass(
                ctx.colourMode === "light"
                  ? "cs__desc-show"
                  : "cs__desc-dark-show"
              );
            }}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
          {display === "navbar" && (
            <Navbar
              focus={focus}
              setFocus={setFocus}
              setMobileDescClass={setMobileDescClass}
            />
          )}
          {display === "sidebar" && (
            <Sidebar
              focus={focus}
              setFocus={setFocus}
              setMobileDescClass={setMobileDescClass}
            />
          )}
          {display === "calendar" && (
            <Calendar
              focus={focus}
              setFocus={setFocus}
              setMobileDescClass={setMobileDescClass}
            />
          )}
          {display === "todo" && (
            <Todo
              focus={focus}
              setFocus={setFocus}
              setMobileDescClass={setMobileDescClass}
            />
          )}
          {display === "shipment" && (
            <Shipment
              focus={focus}
              setFocus={setFocus}
              setMobileDescClass={setMobileDescClass}
            />
          )}
          {display === "home" && (
            <div className="cs__view-home">
              <h3 className={ctx.colourMode === "light" ? "font" : "font-dark"}>
                This is a general guide on my project.
              </h3>
              <p className={ctx.colourMode === "light" ? "font" : "font-dark"}>
                You can navigate through and once mouse pointer changes to{" "}
                <FontAwesomeIcon icon={faHandPointer} />, you will be able to
                see the functional guide.
              </p>
              <p className={ctx.colourMode === "light" ? "font" : "font-dark"}>
                When clicked!
              </p>
              <p className={ctx.colourMode === "light" ? "font" : "font-dark"}>
                You may click the link above to view the completed project!
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={mobileDescClass}>
        <div
          className={
            ctx.colourMode === "light"
              ? "cs__desc__top-bar"
              : "cs__desc__top-bar-dark"
          }
        >
          <FontAwesomeIcon
            className="cs__view__top-bar__exit"
            onClick={() => {
              setDisplay("home");
              setFocus("");
              setMobileDescClass(
                ctx.colourMode === "light" ? "cs__desc" : "cs__desc-dark"
              );
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
                <li
                  className={
                    display === "navbar" &&
                    (ctx.colourMode === "light" ? "selected" : "selected-dark")
                  }
                >
                  Navbar
                </li>
                <NavbarText focus={focus} />
              </ul>
            </>
          )}
          {display === "sidebar" && (
            <>
              <ul>
                <li
                  className={
                    display === "sidebar" &&
                    (ctx.colourMode === "light" ? "selected" : "selected-dark")
                  }
                >
                  Sidebar
                </li>
                <SidebarText focus={focus} />
              </ul>
            </>
          )}
          {display === "calendar" && (
            <>
              <ul>
                <li
                  className={
                    display === "calendar" &&
                    (ctx.colourMode === "light" ? "selected" : "selected-dark")
                  }
                >
                  Calendar View
                </li>
                <CalendarText focus={focus} />
              </ul>
            </>
          )}
          {display === "todo" && (
            <>
              <ul>
                <li
                  className={
                    display === "todo" &&
                    (ctx.colourMode === "light" ? "selected" : "selected-dark")
                  }
                >
                  To Do List View
                </li>
                <TodoText focus={focus} />
              </ul>
            </>
          )}
          {display === "shipment" && (
            <>
              <ul>
                <li
                  className={
                    display === "shipment" &&
                    (ctx.colourMode === "light" ? "selected" : "selected-dark")
                  }
                >
                  Shipment View
                </li>
                <ShipmentText focus={focus} />
              </ul>
            </>
          )}
          {display === "home" && (
            <ul>
              <li
                className={ctx.colourMode === "light" ? "font" : "font-dark"}
                onClick={() => {
                  setDisplay("navbar");
                  setMobileDescClass(
                    ctx.colourMode === "light" ? "cs__desc" : "cs__desc-dark"
                  );
                }}
              >
                Navbar
              </li>
              <li
                className={ctx.colourMode === "light" ? "font" : "font-dark"}
                onClick={() => {
                  setDisplay("sidebar");
                  setMobileDescClass(
                    ctx.colourMode === "light" ? "cs__desc" : "cs__desc-dark"
                  );
                }}
              >
                Sidebar
              </li>
              <li
                className={ctx.colourMode === "light" ? "font" : "font-dark"}
                onClick={() => {
                  setDisplay("calendar");
                  setMobileDescClass(
                    ctx.colourMode === "light" ? "cs__desc" : "cs__desc-dark"
                  );
                }}
              >
                Calendar View
              </li>
              <li
                className={ctx.colourMode === "light" ? "font" : "font-dark"}
                onClick={() => {
                  setDisplay("todo");
                  setMobileDescClass(
                    ctx.colourMode === "light" ? "cs__desc" : "cs__desc-dark"
                  );
                }}
              >
                To Do List View
              </li>
              <li
                className={ctx.colourMode === "light" ? "font" : "font-dark"}
                onClick={() => {
                  setDisplay("shipment");
                  setMobileDescClass(
                    ctx.colourMode === "light" ? "cs__desc" : "cs__desc-dark"
                  );
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
