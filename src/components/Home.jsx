import React from "react";
const Home = () => {
  return (
    <>
      <div className="col-10 py-3 d-flex align-items-center ms-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 display-1 fw-bold slide-in-top">Hi,</h1>
                <h1 className="m-0 display-1  fw-bold  animate-charcter">
                  I'm Aditya,
                </h1>
                <p className="ls-2 mt-2 slide-in-bottom">
                  Full Stack Developer / Computer Engineer / Video-Editor
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
              <img className="img-fluid" src="../bitmoji.png" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
