"use client";
import React, { useState } from "react";
import "./style.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLaptop,
  FaMobile,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioProjects = [
    {
      id: 1,
      image: "/Recipe.jpg",
      title: "Recipe Finder",
      description:
        "A responsive recipe search application that fetches meal data from TheMealDB API",
      category: "fullstack",
      technologies: ["React", "Tailwind CSS", "TheMealDB API"],
      github: "https://github.com/Asal99/recipe-finder",
      liveDemo: "https://demo.com",
      featured: true,
    },
    {
      id: 2,
      image: "/diabetes.webp",
      title: "DiaSense",
      description:
        "Created an AI-powered diabetes prediction system using logistic regression and random forest.",
      category: "Machine Learning",
      technologies: ["Python", "scikit-learn", "Streamlit"],
      github: "https://github.com/Asal99/DiaSense",
      liveDemo: "https://demo.com",
      featured: true,
    },
    {
      id: 3,
      image: "/portfolio.png",
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      category: "frontend",
      technologies: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/Asal99/Porfolio-website",
      liveDemo: "https://demo.com",
      featured: false,
    },
  ];

  const categories = [
    {
      id: "all",
      label: "All Projects",
      icon: FaCode,
      count: portfolioProjects.length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      icon: FaServer,
      count: portfolioProjects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: FaLaptop,
      count: portfolioProjects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      icon: FaDatabase,
      count: portfolioProjects.filter((p) => p.category === "backend").length,
    },
    {
      id: "Machine Learning",
      label: "Machine Learning",
      icon: FaMobile,
      count: portfolioProjects.filter((p) => p.category === "Machine Learning")
        .length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fullstack":
        return <FaServer />;
      case "frontend":
        return <FaLaptop />;
      case "ML":
        return <FaDatabase />;
      default:
        return <FaCode />;
    }
  };

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <div className="portfolio-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="hero-subtitle">
            A collection of projects that showcase my skills, creativity, and
            passion for building exceptional digital experiences
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeFilter === category.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-icon">
                {React.createElement(category.icon)}
              </span>
              <span className="filter-label">{category.label}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-section">
        <div className="projects-container">
          {filteredProjects.length === 0 ? (
            <div className="empty-state">
              <FaCode className="empty-icon" />
              <h3>No projects found</h3>
              <p>No projects match the selected category.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`project-card ${
                    project.featured ? "featured" : ""
                  }`}
                >
                  {project.featured && (
                    <div className="featured-badge">
                      <span>⭐ Featured</span>
                    </div>
                  )}

                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link github"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <span className="project-category">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h3>Ready to work together?</h3>
          <p>Let's discuss your next project and bring your ideas to life</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">
              Get In Touch
            </a>
            <a href="/about" className="cta-btn secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
