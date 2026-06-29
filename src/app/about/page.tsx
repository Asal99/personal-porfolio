"use client";

import React from "react";
import "./style.css";
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
                  I'm a Full Stack Developer passionate about building
                  high-quality web applications from frontend to backend. I
                  focus on writing clean, maintainable code and delivering fast,
                  user-friendly digital experiences.
                </p>

                <p className="detailed-text">
                  I specialize in developing responsive, full-stack web
                  applications using modern technologies like React, Next.js,
                  Node.js, Express, and MongoDB. I enjoy transforming ideas into
                  scalable, secure, and user-friendly digital solutions.
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
                <h3>Frontend</h3>
                <p className="skill-desc">
                  Creating responsive and user-friendly interfaces with modern
                  frontend technologies.
                </p>
                <div className="skill-tags">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Tailwind CSS</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend</h3>
                <p className="skill-desc">
                  Building secure APIs, authentication systems, and server-side
                  features.
                </p>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">JWT Auth</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Database</h3>
                <p className="skill-desc">
                  Managing data storage, schemas, and database operations for
                  web apps.
                </p>
                <div className="skill-tags">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Mongoose</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Deployment</h3>
                <p className="skill-desc">
                  Using modern tools to build, test, manage, and deploy
                  applications.
                </p>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Vercel</span>
                  <span className="skill-tag">Render</span>
                  <span className="skill-tag">Postman</span>
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
