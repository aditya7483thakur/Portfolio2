import React from "react";

const About = () => {
  return (
    <div className="col-10 py-3 d-flex align-items-center about-image ms-auto">
      <div className="container">
        <div className="row">
          {/* Text section */}
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <div>
              <h1 className="font-big text-red slide-in-top">About Me</h1>
              <hr />
              <p className="slide-in-bottom">
                ○ Solved over{" "}
                <span className="text-red ls-2">500+ DSA problems</span> to
                strengthen problem-solving skills.
              </p>
              <p className="slide-in-bottom">
                ○ Experienced{" "}
                <span className="text-red ls-2">MERN Stack developer</span>{" "}
                building dynamic, scalable web applications.
              </p>
              <p className="slide-in-bottom">
                ○ Mentor and organizer of{" "}
                <span className="text-red ls-2">hackathons</span>, guiding peers
                and fostering innovation.
              </p>
              <p className="slide-in-bottom">
                ○ Serving as{" "}
                <span className="text-red ls-2">
                  Head of Development Department
                </span>
                , leading projects and development teams.
              </p>
            </div>
          </div>

          {/* Image section */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              className="img-fluid"
              src="../about.png"
              alt="Aditya's profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
