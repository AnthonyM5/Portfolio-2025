import React from "react";
import "./styles/App.css";

// Components
import { Header } from "./components/header/Header";
import { Greeting } from "./components/greeting/Greeting";
import { Skills } from "./containers/skills/Skills";
import { Projects } from "./containers/projects/Projects";
import { Achievement } from "./containers/achievement/Achievement";
import { Blogs } from "./containers/blogs/Blogs";
import { Contact } from "./containers/contact/Contact";
import { Footer } from "./containers/Footer/Footer";
import { TopButton } from "./components/topButton/Top";

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Skills />
      <Projects />
      <Achievement />
      <Blogs />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
