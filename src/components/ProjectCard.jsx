import React from "react";
import { BsLaptop } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ item }) => {
  return (
    <article
      className="col-md-4 text-center my-2 zoom-on-hover"
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      <div
        id="carouselExampleControls1"
        className="carousel slide my-1"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={item.img1}
              className="d-block w-100"
              alt={`${item.name} - Project Screenshot`}
              loading="lazy"
              itemProp="image"
            />
          </div>
        </div>
      </div>

      <h3 className="ff-jose my-1" itemProp="name">
        {item.name}
      </h3>
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
          rel="noopener noreferrer"
          aria-label={`View live demo of ${item.name}`}
        >
          <BsLaptop /> Watch Live
        </a>
        <a
          href={item.sourceCode}
          className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code for ${item.name} on GitHub`}
          itemProp="codeRepository"
        >
          <AiFillGithub /> Source Code
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
