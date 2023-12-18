import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Over the past two years, I've delved into web applications, using
          technologies like React and NodeJS. Examples of my work include a
          Movie Review app with cool features like email verification and a
          user-friendly E-commerce website with a smooth payment process. I
          enjoy blending creativity with technology to craft engaging digital
          experiences. Here are some examples:
        </p>
        <div className="row" id="ads">
          <Fade left>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://i.postimg.cc/cLY4z297/Whats-App-Image-2023-12-18-at-21-52-49-d76f40ef.jpgpx.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      MishraBooks Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://mishrabooks.onrender.com/product/64dc7b503a96fdeb3416366e"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://i.postimg.cc/X7qRHPN2/Whats-App-Image-2023-12-18-at-21-55-54-67a41210.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Movie Review App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://64ccc0e77fce356dc2f0a2a9--helpful-baklava-a0b04e.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://i.postimg.cc/MTFVZgyP/Whats-App-Image-2023-12-18-at-21-45-12-52b18555.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>

                  <span className="card-detail-badge">CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Food Order Application</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://food-order-app-bt8v.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
