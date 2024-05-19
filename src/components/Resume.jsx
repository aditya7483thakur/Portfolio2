import React from "react";

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
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

const Resume = () => {
  return (
    <>
      <div className="col-10 ms-auto p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">ADITYA KUMAR</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">B-tech CSE</h4>
                  <h6 className="blue-label px-2 py-1">2022-2026</h6>
                  <p className="m-0">
                    Maharaja Surajmal Institute of techenology
                  </p>
                  <p>CGPA - 8.32 (upto 4th sem)</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">12th Result</h4>
                  <h6 className="blue-label px-2 py-1">Passed in 2021</h6>
                  <p className="m-0">S.B Mills Sr. Sec. School</p>
                  <p>Percentage - 93.8</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">10th Result</h4>
                  <h6 className="blue-label px-2 py-1">Passed in 2019</h6>
                  <p className="m-0">S.D Public School</p>
                  <p>Percentage - 92.8</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">PROFILE</h4>
              <h1>
                <a
                  href="https://github.com/aditya7483thakur"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <AiFillGithub className="zoom-on-hover" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-944a80254/"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <TbBrandLinkedin className="zoom-on-hover" />
                </a>
                <a
                  href="mailto:adityakumarji74@gmail.com"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <MdOutlineMail className="zoom-on-hover" />
                </a>
                <a
                  href="https://www.instagram.com/dev.with.adi/"
                  target="/blank"
                  className="text-white text-decoration-none mx-2"
                >
                  <FaInstagram className="zoom-on-hover" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
