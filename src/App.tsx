import React from "react";
import "./App.scss";

// Components
import { Header } from "@/containers/Header/Header";
import { Greeting } from "@/containers/Greeting";
import { Skills } from "./containers/skills/Skills";
import { Projects } from "./containers/projects/Projects";
import { Achievement } from "./containers/achievement/Achievement";
import { Blogs } from "./containers/blogs/Blogs";
import { Contact } from "./containers/contact/Contact";
import { Footer } from "@/containers/Footer/Footer";
import { TopButton } from "./components/topButton/Top";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Greeting />
      </main>
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
