import React from "react";
import "./Blogs.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Blogs = () => {
  const blogs = [
    {
      title: "Building Scalable Applications with React",
      description: "Learn how to build scalable and maintainable React applications using modern best practices.",
      link: "https://yourblog.com/react-scalable-apps",
      date: "March 15, 2024"
    },
    {
      title: "The Future of Web Development",
      description: "Exploring upcoming trends and technologies that will shape the future of web development.",
      link: "https://yourblog.com/future-web-dev",
      date: "February 28, 2024"
    },
    {
      title: "Mastering TypeScript",
      description: "A comprehensive guide to using TypeScript effectively in your projects.",
      link: "https://yourblog.com/typescript-guide",
      date: "January 20, 2024"
    }
  ];

  return (
    <div className="blogs-main" id="blogs">
      <div className="blogs-container">
        <h1 className="blogs-heading">My Blog Posts</h1>
        <div className="blogs-cards-div">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-card-title">{blog.title}</div>
              <div className="blog-card-description">{blog.description}</div>
              <div className="blog-card-footer">
                <span className="blog-card-date">{blog.date}</span>
                <a 
                  href={blog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="blog-card-link"
                >
                  Read More <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 