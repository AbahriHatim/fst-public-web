import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
  const { mobileMenu } = props;
  const [home, setHome] = useState(false);
  const [course, setCourse] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setCourse(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "course") {
      setHome(false);
      setCourse(!course);
      setPage(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setCourse(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setCourse(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e) => {
    if (mobileMenu) {
      e.preventDefault();
    }
  };

  return (
    <ul
      style={{
        display: "flex",
        gap: "15px",
        listStyle: "none",
        padding: 0,
        whiteSpace: "nowrap",
      }}
    >
      <li className="has-dropdown">
        <Link
          to="/course-details"
          className={course ? "expanded" : ""}
          onClick={handleClick}
        >
          <span>La Faculte</span>
        </Link>
        <ul
          className={
            course ? "it-submenu submenu d-block" : "it-submenu submenu"
          }
        >
          <li>
            <Link to="/course-1">Mot du Doyen</Link>
          </li>
          <li>
            <Link to="/course-details">FSTG Bref </Link>
          </li>
          <li>
            <Link to="/course-details">Architecture </Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link
          to="/course-details"
          className={course ? "expanded" : ""}
          onClick={handleClick}
        >
          <span>Formation</span>
          <button
            className={`${
              course
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("course");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            course ? "it-submenu submenu d-block" : "it-submenu submenu"
          }
        >
          <li>
            <Link to="/course-1">Initiale</Link>
          </li>

          <li>
            <Link to="/course-details">Continue</Link>
          </li>
        </ul>
      </li>

      <li className="has-dropdown p-static">
        <Link to="#" className={page ? "expanded" : ""} onClick={handleClick}>
          <span>Vie Etudiant</span>
          <button
            className={`${
              page
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("page");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <div
          className={
            page
              ? "it-submenu submenu it-mega-menu d-block"
              : "it-submenu submenu it-mega-menu"
          }
        >
          <div className="it-mega-menu-wrap">
            <div className="row">
              <div className="col-xl-3">
                <ul className="it-megamenu-space-1">
                  <li>
                    <Link to="/event">Event</Link>
                  </li>
                  <li>
                    <Link to="/event-details">Event Details</Link>
                  </li>
                  <li>
                    <Link to="/teacher">Instructor</Link>
                  </li>
                  <li>
                    <Link to="/teacher-details">Instructor Details</Link>
                  </li>
                  <li>
                    <Link to="/instructor-registration">
                      Instructor Registration
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4">
                <ul className="it-megamenu-space-2">
                  <li>
                    <Link to="/services-1">Service Style 01</Link>
                  </li>
                  <li>
                    <Link to="/services-2">Service Style 02</Link>
                  </li>
                  <li>
                    <Link to="/services-3">Service Style 03</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Details</Link>
                  </li>
                  <li>
                    <Link to="/student-registration">Student Registration</Link>
                  </li>
                </ul>
              </div>

              <div className="col-xl-2">
                <ul className="it-megamenu-space-4">
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/404">Error</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link to="/contact">
          <span>Departement </span>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <span>Laboratoire </span>
        </Link>
      </li>
    </ul>
  );
};
export default MenuItems;
