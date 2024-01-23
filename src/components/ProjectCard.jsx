import React from "react";
import { BsLaptop } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ item }) => {
  return (
    <>
      <div className="col-md-4 text-center my-2 zoom-on-hover">
        <div
          id="carouselExampleControls1"
          className="carousel slide my-1"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={item.img1} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>

        <h5 className="ff-jose my-1">{item.name}</h5>
        <div className="row d-flex justify-content-center">
          <a
            href={item.LiveDemo}
            className={`col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded ${
              item.isLiveDemoDisabled ? "disabled" : ""
            }`}
            style={
              item.isLiveDemoDisabled
                ? { pointerEvents: "none", opacity: 0.6, cursor: "not-allowed" }
                : {}
            }
            target="_blank"
          >
            <BsLaptop /> Watch Live
          </a>
          <a
            href={item.sourceCode}
            className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
            target="_blank"
          >
            <AiFillGithub /> Source Code
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
