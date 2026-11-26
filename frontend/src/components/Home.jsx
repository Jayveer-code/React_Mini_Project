function Home({ changePage }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <p className="hero-label">Community Skill Exchange Portal</p>
        <h1 className="hero-brand">SkillSwap</h1>
        <h2 className="hero-heading">Connect, Teach and Learn</h2>
        <p className="hero-text">
          Share what you know. Learn what you need. SkillSwap helps people
          exchange skills and grow together as a community.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => changePage("skills")}>
            Explore Skills
          </button>
          <button className="btn btn-secondary" onClick={() => changePage("skills")}>
            Add a Skill
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section">
        <h2>How Skill Exchange Works</h2>
        <p className="section-intro">
          Add the skills you can teach and the skills you want to learn.
          Find people with matching interests and exchange knowledge.
        </p>

        <div className="cards-row">
          <div className="info-card">
            <span className="card-number">01</span>
            <h3>Share Your Skills</h3>
            <p>
              List skills you can teach, such as Python, Design, or Communication.
              Help others learn from your experience.
            </p>
          </div>

          <div className="info-card">
            <span className="card-number">02</span>
            <h3>Find Skills to Learn</h3>
            <p>
              Browse skills posted by other members. Search by skill name and
              filter by teach or learn type.
            </p>
          </div>

          <div className="info-card">
            <span className="card-number">03</span>
            <h3>Exchange Knowledge</h3>
            <p>
              Connect with people who can teach what you want to learn, or who
              want to learn what you can teach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
