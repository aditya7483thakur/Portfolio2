import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="col-10 py-3 d-flex align-items-center ms-auto" role="main">
      <article
        className="container"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <div>
              <h1 className="m-0 display-1 fw-bold slide-in-top">Hi,</h1>
              <h2
                className="m-0 display-1 fw-bold animate-charcter"
                itemProp="name"
              >
                I'm Aditya,
              </h2>
              <p className="ls-2 mt-2 slide-in-bottom" itemProp="jobTitle">
                Full Stack Developer / Computer Engineer / Video-Editor
              </p>
              <div className="d-flex">
                <Link
                  to="https://drive.google.com/uc?export=download&id=1HWl7_dvO7MuOzngbU95O62QPzDbbffpK"
                  className=" border-0 btns d-flex justify-content-around align-items-center"
                  style={{
                    backgroundColor: "#cacccb",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <IoIosDocument />
                  <span className="ml-4">Resume</span>
                </Link>
                <Link
                  to="https://github.com/aditya7483thakur"
                  className="border-0 btns d-flex justify-content-around align-items-center"
                  style={{
                    backgroundColor: "#191919",
                    color: "white",
                    marginLeft: "3rem",
                    textDecoration: "none",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoMdEye />
                  <span className="ml-4">GitHub</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <img
              className="img-fluid"
              src="../bitmoji.png"
              alt="Aditya Kumar - Full Stack Developer"
              itemProp="image"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
