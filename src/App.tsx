import React, { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';
import "./App.scss";

// Components
import Header from "@/components/header/Header";
import Greeting from "@/components/greeting/Greeting";
import Footer from "@/components/footer/Footer";
import { TopButton } from "./components/topButton/Top";
import SplashScreen from "./components/splashScreen/SplashScreen";

// Container Components
import { Skills } from "./containers/skills/Skills";
import { Projects } from "./containers/projects/Projects";
import { Achievement } from "./containers/achievement/Achievement";
import { Blogs } from "./containers/blogs/Blogs";
import { Contact } from "./containers/contact/Contact";
import { Experience } from "./containers/experience/Experience";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>
      
      {!loading && (
        <div className="app">
          <Header />
          <main>
            <Greeting />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Blogs />
            <Contact />
          </main>
          <Footer />
          <TopButton />
        </div>
      )}
    </>
  );
}

export default App;
