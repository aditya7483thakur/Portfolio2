import React from "react";
import ProjectCart from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      name: "E-Commerce Website",
      sourceCode: "https://github.com/aditya7483thakur/ShopSphere",
      LiveDemo: "https://shopspheree.vercel.app",
      img1: "projects-img/shopspheree1.png",
      isLiveDemoDisabled: false,
    },
    {
      name: "To Do List",
      sourceCode: "https://github.com/aditya7483thakur/ToDo-App-React",
      LiveDemo: "https://to-do-app-react-iota.vercel.app",
      img1: "projects-img/todoList2.png",
      isLiveDemoDisabled: false,
    },
    {
      name: "News App",
      sourceCode: "https://github.com/aditya7483thakur/NewsApp-React",
      LiveDemo: "",
      img1: "projects-img/newsapp.png",
      isLiveDemoDisabled: true,
    },
    {
      name: "Image Search App",
      sourceCode: "https://github.com/aditya7483thakur/Image-Search-App",
      LiveDemo: "",
      img1: "projects-img/image_search_engine.png",
      isLiveDemoDisabled: true,
    },
    {
      name: "Fully responsive website",
      sourceCode:
        "https://github.com/aditya7483thakur/Responsive-Frontend-website",
      LiveDemo: "",
      img1: "projects-img/fully_responsive_website.png",
      isLiveDemoDisabled: true,
    },
    {
      name: "Quiz-App",
      sourceCode: "https://github.com/aditya7483thakur/Quiz-App",
      LiveDemo: "",
      img1: "projects-img/quiz_app.png",
      isLiveDemoDisabled: true,
    },
  ];

  return (
    <>
      <div className="col-10 ms-auto p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            {projectList.map((item) => (
              <ProjectCart item={item} key={name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
