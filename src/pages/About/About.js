import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://i.postimg.cc/mkM4ZLQt/my-phooto.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a Full-Stack Software Engineer specializing in MERN stack.
                I've crafted a Movie Review app with advanced features and led
                an E-commerce site's development, showcasing user-centric
                design. LeetCode Knight badge holder with 850+ questions solved
                and 4 stars on CodeChef. As a problem setter intern at Imocha, I
                created challenging questions. Explore my portfolio for a
                glimpse into my passion for innovative solutions and seamless
                user experiences.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
