import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
// import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const Resume =
    "https://drive.google.com/file/d/10kzc0vNmhkwl5X3lyDMTpzSNvPCEt9Rg/view?usp=sharing";
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>
              Hi 👋 myself<span className="name"> Abhishek Mishra</span> and{" "}
            </h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "I am a Full-Stack Developer !",
                    "I am a MERN-Stack Developer !",
                    "I am a Front-end Developer !",
                    "I am a Back-end Developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=6394392256"
                rel="noreferrer"
                target="_blank"
              >
                Contact Me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                rel="noreferrer"
                target="_blank"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
