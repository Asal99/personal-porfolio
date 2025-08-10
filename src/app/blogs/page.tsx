"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { FaCalendar, FaArrowRight, FaSearch, FaBookOpen } from "react-icons/fa";

interface Blog {
  _id: string;
  title: string;
  createdAt: string;
  excerpt?: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, blogs]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setBlogs(data);
      setFilteredBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="blog-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="hero-content">
          <h1 className="page-title">
            <FaBookOpen className="title-icon" />
            My Blog
          </h1>
          <p className="hero-subtitle">
            Thoughts, insights, and discoveries from my journey in tech
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="blog-count">
          {filteredBlogs.length} {filteredBlogs.length === 1 ? "blog" : "blogs"}{" "}
          found
        </div>
      </div>

      {/* Blog List */}
      <div className="blog-content">
        {!Array.isArray(filteredBlogs) || filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <FaBookOpen className="empty-icon" />
            <h3>No blogs found</h3>
            <p>
              {searchTerm
                ? `No blogs match "${searchTerm}"`
                : "No blogs have been published yet."}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="clear-search-btn"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <article key={String(blog._id)} className="blog-card">
                <div className="card-header">
                  <div className="blog-meta">
                    <FaCalendar className="meta-icon" />
                    <span className="blog-date">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <h2 className="blog-title">{blog.title}</h2>
                  {blog.excerpt && (
                    <p className="blog-excerpt">{blog.excerpt}</p>
                  )}
                </div>

                <div className="card-footer">
                  <Link
                    href={`/blogs/${String(blog._id)}`}
                    className="read-more"
                  >
                    Read More
                    <FaArrowRight className="arrow-icon" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h3>Stay Updated</h3>
          <p>Get notified when I publish new articles and insights</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
