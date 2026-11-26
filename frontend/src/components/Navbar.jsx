function Navbar({ currentPage, changePage }) {
  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => changePage("home")}>
        SkillSwap
      </div>

      <ul className="nav-links">
        <li>
          <button
            className={currentPage === "home" ? "nav-link active" : "nav-link"}
            onClick={() => changePage("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={currentPage === "skills" ? "nav-link active" : "nav-link"}
            onClick={() => changePage("skills")}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className={currentPage === "about" ? "nav-link active" : "nav-link"}
            onClick={() => changePage("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={currentPage === "contact" ? "nav-link active" : "nav-link"}
            onClick={() => changePage("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
