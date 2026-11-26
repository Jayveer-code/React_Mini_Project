function About() {
  return (
    <div className="about-page">
      <h1>About SkillSwap</h1>
      <p className="page-intro">
        Project details for the SkillSwap Community Skill Exchange Portal.
      </p>

      <section className="about-block">
        <h2>Project Introduction</h2>
        <p>
          SkillSwap is a community-based skill exchange portal where members can
          share skills they can teach and skills they want to learn. It is built
          for students, working professionals, office colleagues, and anyone
          interested in exchanging knowledge.
        </p>
      </section>

      <section className="about-block">
        <h2>Project Objective</h2>
        <p>
          The main objective is to create a simple full-stack web application
          that allows users to add, view, update, and delete skill listings, and
          to find people for mutual skill exchange.
        </p>
      </section>

      <section className="about-block">
        <h2>Problem Statement</h2>
        <p>
          Many people want to learn new skills but do not know who nearby or in
          their community can teach them. At the same time, skilled people may
          not have an easy way to offer what they know. SkillSwap solves this by
          providing one portal to list, search, and manage teach/learn skills.
        </p>
      </section>

      <section className="about-block">
        <h2>Technologies Used</h2>
        <ul className="tech-list">
          <li>Frontend: React, Vite, JavaScript, CSS, Fetch API</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB with Mongoose</li>
          <li>Other: CORS for frontend-backend communication</li>
        </ul>
      </section>

      <section className="about-block">
        <h2>Main Features</h2>
        <ul className="tech-list">
          <li>Add a skill you can teach or want to learn</li>
          <li>View all skill listings from community members</li>
          <li>Update and delete skill listings</li>
          <li>Search skills by name</li>
          <li>Filter by “I Can Teach” and “I Want to Learn”</li>
          <li>Home, About, Contact, and Skills pages</li>
        </ul>
      </section>

      <section className="about-block">
        <h2>CRUD Operations Explanation</h2>
        <ul className="tech-list">
          <li><strong>Create (POST):</strong> Add a new skill listing using the form</li>
          <li><strong>Read (GET):</strong> Display all skill listings from MongoDB</li>
          <li><strong>Update (PUT):</strong> Edit an existing skill listing by ID</li>
          <li><strong>Delete (DELETE):</strong> Remove a skill listing by ID</li>
        </ul>
      </section>

      <section className="about-block">
        <h2>Project Workflow</h2>
        <ol className="workflow-list">
          <li>User opens the React frontend (Vite).</li>
          <li>User goes to the Skills page and fills the skill form.</li>
          <li>Frontend sends data to Express API using Fetch.</li>
          <li>Express saves or updates data in MongoDB using Mongoose.</li>
          <li>Frontend fetches the updated list and shows it in skill cards.</li>
        </ol>
      </section>
    </div>
  );
}

export default About;
