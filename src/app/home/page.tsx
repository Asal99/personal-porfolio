"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <div id="home" className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className={`hero-title ${isVisible ? "fade-in-up" : ""}`}>
              Hi, I'm <span className="gradient-text">Asal Poudel</span>
            </h1>
            <h2 className={`hero-subtitle ${isVisible ? "fade-in-up" : ""}`}>
              Full Stack Developer
            </h2>
            <p className={`hero-description ${isVisible ? "fade-in-up" : ""}`}>
              I create beautiful, functional, and user-centered digital
              experiences. Passionate about clean code, modern design, and
              innovative solutions.
            </p>

            <div className={`hero-cta ${isVisible ? "fade-in-up" : ""}`}>
              <button className="primary-btn" onClick={scrollToAbout}>
                Explore My Work
              </button>
              <Link href="/contact" className="secondary-btn">
                Get In Touch
              </Link>
            </div>

            <div className={`social-links ${isVisible ? "fade-in-up" : ""}`}>
              <a
                href="https://github.com/asal99"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/asalpoudel/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTwitter />
              </a>
              <a href="mailto:asalpoudel9@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className={`hero-image ${isVisible ? "slide-in-right" : ""}`}>
            <div className="image-container">
              <img
                src="/profile.png"
                alt="Asal Poudel - Developer"
                className="profile-image"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        <div className={`scroll-indicator ${isVisible ? "fade-in-up" : ""}`}>
          <FaArrowDown className="scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I'm a passionate Full Stack Developer with a strong eye for
                design and a passion for building scalable, high-performance web
                applications. I specialize in developing responsive,
                user-friendly interfaces while creating secure and efficient
                backend systems using modern web technologies.
              </p>
              <p className="about-description">
                With expertise in React, Next.js, Node.js, Express.js, MongoDB,
                Tailwind CSS, and modern web technologies, I build scalable
                full-stack applications that deliver seamless user experiences.
                From designing responsive frontend interfaces to developing
                secure backend APIs and managing databases, I enjoy transforming
                complex ideas into efficient, high-quality digital solutions.
              </p>

              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Tailwind CSS</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Backend</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">REST APIs</span>
                    <span className="skill-tag">JWT Authentication</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Database</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">Mongoose</span>
                    <span className="skill-tag">MySQL</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Tools & Deployment</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">Vercel</span>
                    <span className="skill-tag">Render</span>
                    <span className="skill-tag">Postman</span>
                    <span className="skill-tag">VS Code</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <Link href="/about" className="learn-more-btn">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Here are some of my recent projects that showcase my skills and
              creativity
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card hover-lift">
              <div className="project-image">
                <img src="/ecom.png" alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://github.com/Asal99/E-commerce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://e-commerce-d3qv.vercel.app/"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>MERN E-Commerce Platform</h3>
                <p>
                  A full-stack e-commerce platform featuring secure
                  authentication, product management, shopping cart, order
                  tracking, and a responsive admin dashboard.
                </p>
                <div className="project-tech">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">Mongo DB</span>
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">JWT Authentication</span>
                </div>
              </div>
            </div>
            <div className="project-card hover-lift">
              <div className="project-image">
                <img src="/Recipe.jpg" alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://github.com/Asal99/recipe-finder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a href="#" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Recipe Finder</h3>
                <p>
                  A responsive recipe search application that fetches meal data
                  from TheMealDB API
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Tailwind CSS</span>
                  <span>TheMealDB API</span>
                </div>
              </div>
            </div>

            <div className="project-card hover-lift">
              <div className="project-image">
                <img src="/diabetes.webp" alt="Project 2" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://github.com/asal99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a href="#" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>DiaSense</h3>
                <p>
                  A ML project that identifies the early symptoms of Diabetes
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>scikit-learn</span>
                  <span>Streamlit</span>
                </div>
              </div>
            </div>

            <div className="project-card hover-lift">
              <div className="project-image">
                <img src="/portfolio.png" alt="Project 3" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://github.com/Asal99/Porfolio-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a href="#" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>
                  A modern, responsive portfolio website built with Next.js and
                  Tailwind CSS
                </p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>Tailwind CSS</span>
                  <span>Framer Motion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-cta">
            <Link href="/portfolio" className="view-all-btn">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
