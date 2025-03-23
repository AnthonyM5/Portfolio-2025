import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Experience from "./containers/Experience";
import Contact from "./containers/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./containers/splashScreen/SplashScreen"; // new splash screen container

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <SplashScreen />
  ) : (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
