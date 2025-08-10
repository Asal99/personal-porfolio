import React from "react";
import "./style.css";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/asal.poudel.1/",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/asal_poudel/",
    label: "Instagram",
  },
  { icon: <FaGithub />, url: "https://www.github.com/asal99", label: "GitHub" },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/asalpoudel/",
    label: "LinkedIn",
  },
];

const About = () => {
  return (
    <>
      <div className="about-hero">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text-section">
              <div className="about-header">
                <h1 className="about-title">About Me</h1>
                <div className="title-underline"></div>
              </div>

              <div className="about-description">
                <p className="intro-text">
                  I'm a passionate Front End Developer with a strong eye for
                  design and a love for clean, efficient code. I specialize in
                  building responsive, user-centric web applications using
                  modern technologies.
                </p>

                <p className="detailed-text">
                  I've worked on various projects. My expertise includes
                  frontend frameworks like React and Next.js, etc.
                </p>

                <p className="philosophy-text">
                  I believe in creating digital experiences that not only look
                  great but also provide exceptional functionality and user
                  experience. Every project I work on is an opportunity to
                  learn, grow, and push the boundaries of what's possible on the
                  web.
                </p>
              </div>

              <div className="about-actions">
                <a href="/contact" className="contact-btn">
                  Get In Touch
                </a>
                <a href="/Asal-cv.pdf" className="resume-btn" download>
                  <FaDownload />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="about-image-section">
              <div className="image-container">
                <img
                  src="/about1.jpg"
                  alt="Asal Poudel - Full Stack Developer"
                  className="profile-image"
                />
                <div className="image-glow"></div>
                <div className="floating-card">
                  <h4>Available for</h4>
                  <p>Freelance Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-name">React.js</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Next.js</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">TypeScript</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Tailwind CSS</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3>Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
