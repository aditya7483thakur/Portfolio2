import React from "react";

const About = () => {
  return (
    <>
      <div className="col-10 py-3 d-flex align-items-center about-image ms-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr></hr>
                <p className="slide-in-bottom">
                  ○ Proficient{" "}
                  <span className="text-red ls-2">MERN stack developer</span>{" "}
                  dedicated to crafting dynamic web applications.
                </p>
                <p className="slide-in-bottom">
                  ○ Successfully delivered projects, including impactful
                  <span className="text-red ls-2">e-commerce</span> website.
                </p>
                <p className="slide-in-bottom">
                  ○ Currently an{" "}
                  <span className="text-red ls-2">engineering </span>student,
                  merging theoretical knowledge with hands-on development
                  skills.
                </p>
                <p className="slide-in-bottom">
                  ○ Committed to staying at the forefront of technology trends
                  for{" "}
                  <span className="text-red ls-2">continuous innovation.</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../about.png" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
