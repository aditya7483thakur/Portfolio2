import React from "react";
import { Link, NavLink } from "react-router-dom";

import { VscHome } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import { BsCode } from "react-icons/bs";
import {
  MdOutlineDashboard,
  MdOutlineContactPage,
  MdEmail,
} from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="col-2 px-sm-2 px-0 bg-dark slide-in-left position-fixed">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <Link
            to="/"
            className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline ff-jost fw-600">
              Adi<span className="text-red ls-2">tya</span>
            </span>
          </Link>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <NavLink to="/" className="nav-link align-middle px-0 text-white">
                <VscHome className="fs-5" />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link align-middle px-0 text-white"
              >
                <FiUser className="fs-5" />{" "}
                <span className="ms-1 d-none d-sm-inline ">About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className="nav-link align-middle px-0 text-white"
              >
                <BsCode className="fs-5" />{" "}
                <span className="ms-1 d-none d-sm-inline ">Skills</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-link align-middle px-0 text-white"
              >
                <MdOutlineDashboard className="fs-5" />{" "}
                <span className="ms-1 d-none d-sm-inline ">Projects</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className="nav-link align-middle px-0 text-white"
              >
                <AiOutlineUnorderedList className="fs-5" />{" "}
                <span className="ms-1 d-none d-sm-inline ">Resume</span>
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="dropdown pb-4 dropup">
            <a
              href="/"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MdOutlineContactPage className="fs-5" />
              <span className="d-none d-sm-inline mx-1">Contact</span>
            </a>
            <ul
              className="dropdown-menu shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a
                  className="dropdown-item text-black"
                  href="mailto:adityakumarji74@gmail.com"
                  target="/blank"
                >
                  <MdEmail className="fs-5" /> Email
                </a>
              </li>
              <li>
                {" "}
                <hr className="dropdown-divider" />{" "}
              </li>
              <li>
                <a
                  className="dropdown-item text-black"
                  href="https://www.linkedin.com/in/aditya-kumar-944a80254/"
                  target="/blank"
                >
                  <AiFillLinkedin className="fs-5" /> LinkedIn
                </a>
              </li>
              <li>
                {" "}
                <hr className="dropdown-divider" />{" "}
              </li>
              <li>
                <a
                  className="dropdown-item text-black"
                  href="https://www.instagram.com/dev.with.adi/"
                  target="/blank"
                >
                  <FaInstagramSquare className="fs-5" /> Instagram
                </a>
              </li>
              <li>
                {" "}
                <hr className="dropdown-divider" />{" "}
              </li>
              <li>
                <a
                  className="dropdown-item text-black"
                  href="https://github.com/aditya7483thakur"
                  target="/blank"
                >
                  <AiFillGithub className="fs-5" /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
