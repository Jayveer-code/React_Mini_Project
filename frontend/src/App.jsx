import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  // Simple page navigation using useState (no React Router needed)
  const [page, setPage] = useState("home");

  // Change page when Navbar link or button is clicked
  const changePage = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="app">
      <Navbar currentPage={page} changePage={changePage} />

      <main className="main-content">
        {page === "home" && <Home changePage={changePage} />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
        {page === "skills" && <Skills />}
      </main>

      <footer className="footer">
        <p>SkillSwap – Connect, Teach and Learn | Community Skill Exchange Portal</p>
      </footer>
    </div>
  );
}

export default App;
