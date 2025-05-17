import React, { useState } from "react";
import ProjectCart from "./ProjectCard";

const Projects = () => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  const projectList = [
    {
      name: "AI-Finance platform",
      sourceCode: "https://github.com/aditya7483thakur/Portfolio2",
      LiveDemo: "https://budgetly-sandy.vercel.app/",
      img1: "projects-img/budgetly.png",
      isLiveDemoDisabled: false,
    },
    {
      name: "E-Commerce Website",
      sourceCode: "https://github.com/aditya7483thakur/ShopSphere",
      LiveDemo: "https://shopspheree.vercel.app",
      img1: "projects-img/shopspheree1.png",
      isLiveDemoDisabled: false,
    },

    {
      name: "Chatting App",
      sourceCode: "https://github.com/aditya7483thakur/baatkro",
      LiveDemo: "https://baatkro.vercel.app/",
      img1: "projects-img/baatkro.png",
      isLiveDemoDisabled: false,
    },

    {
      name: "NPM package",
      sourceCode: "https://github.com/aditya7483thakur/segmentor",
      LiveDemo: "https://segmentor.vercel.app",
      img1: "projects-img/segmentor.png",
      isLiveDemoDisabled: false,
    },
    {
      name: "TrashTalks",
      sourceCode: "https://github.com/lordsid003/trashtalks",
      LiveDemo: "https://trashtalks-web.vercel.app/",
      img1: "projects-img/trashtalks.png",
      isLiveDemoDisabled: false,
    },
    {
      name: "AI-Chatbot",
      sourceCode: "https://github.com/aditya7483thakur/AiChatbot",
      LiveDemo: "https://ai-chatbot-devwithadi.vercel.app/",
      img1: "projects-img/aichatbot.png",
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
            {projectList.map((item, index) => (
              <ProjectCart item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
