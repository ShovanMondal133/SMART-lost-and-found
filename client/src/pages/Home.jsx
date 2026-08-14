import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* ================= NAVIGATION BAR ================= */}

      <nav className="navbar">

        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          🔍 Smart<span>Lost & Found</span>
        </div>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#categories">
            Categories
          </a>

          <a href="#how-it-works">
            How It Works
          </a>

          <button
            className="browse-nav-btn"
            onClick={() => navigate("/browse")}
          >
            Browse Items
          </button>

          <button className="login-btn">
            Login
          </button>

        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p className="welcome-text">
            🎓 College Lost & Found Portal
          </p>

          <h1>
            Lost Something?
            <br />

            <span>
              Let's Help You Find It.
            </span>
          </h1>

          <p className="hero-description">
            Report lost items, share found items, and help
            your college community return belongings to their
            rightful owners.
          </p>


          {/* HERO BUTTONS */}

          <div className="hero-buttons">

            <button
              className="lost-btn"
              onClick={() => navigate("/report-lost")}
            >
              🔴 Report Lost Item
            </button>


            <button
              className="found-btn"
              onClick={() => navigate("/report-found")}
            >
              🟢 Report Found Item
            </button>

          </div>


          {/* BROWSE BUTTON */}

          <button
            className="browse-btn"
            onClick={() => navigate("/browse")}
          >
            🔎 Browse Lost & Found Items
          </button>

        </div>

      </section>


      {/* ================= CATEGORIES SECTION ================= */}

      <section
        className="categories"
        id="categories"
      >

        <div className="section-heading">

          <p>
            Browse Items
          </p>

          <h2>
            Find What You're Looking For
          </h2>

          <span>
            Browse common categories of lost and found items
            around your campus.
          </span>

        </div>


        <div className="category-grid">


          {/* ELECTRONICS */}

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >

            <div className="category-icon">
              📱
            </div>

            <h3>
              Electronics
            </h3>

            <p>
              Phones, chargers, laptops and more
            </p>

          </div>


          {/* ID CARDS */}

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >

            <div className="category-icon">
              🪪
            </div>

            <h3>
              ID Cards
            </h3>

            <p>
              College IDs and important cards
            </p>

          </div>


          {/* BOOKS */}

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >

            <div className="category-icon">
              📚
            </div>

            <h3>
              Books
            </h3>

            <p>
              Textbooks, notes and study materials
            </p>

          </div>


          {/* BAGS */}

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >

            <div className="category-icon">
              🎒
            </div>

            <h3>
              Bags
            </h3>

            <p>
              Backpacks and other bags
            </p>

          </div>


          {/* KEYS */}

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >

            <div className="category-icon">
              🔑
            </div>

            <h3>
              Keys
            </h3>

            <p>
              House, vehicle and locker keys
            </p>

          </div>


          {/* WALLETS */}

          <div
            className="category-card"
            onClick={() => navigate("/browse")}
          >

            <div className="category-icon">
              👛
            </div>

            <h3>
              Wallets
            </h3>

            <p>
              Wallets and personal belongings
            </p>

          </div>


        </div>


        {/* VIEW ALL BUTTON */}

        <div className="category-button-container">

          <button
            className="browse-btn"
            onClick={() => navigate("/browse")}
          >
            View All Reported Items →
          </button>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        className="how-it-works"
        id="how-it-works"
      >

        <div className="section-heading">

          <p>
            Simple Process
          </p>

          <h2>
            How Smart Lost & Found Works
          </h2>

          <span>
            Finding or returning an item is simple.
          </span>

        </div>


        <div className="steps">


          {/* STEP 1 */}

          <div className="step">

            <div className="step-number">
              1
            </div>

            <h3>
              Report
            </h3>

            <p>
              Report an item that you have lost or
              found on campus.
            </p>

          </div>


          {/* STEP 2 */}

          <div className="step">

            <div className="step-number">
              2
            </div>

            <h3>
              Search
            </h3>

            <p>
              Search through reported items using
              categories and keywords.
            </p>

          </div>


          {/* STEP 3 */}

          <div className="step">

            <div className="step-number">
              3
            </div>

            <h3>
              Connect
            </h3>

            <p>
              Connect with the person who reported
              the matching item.
            </p>

          </div>


          {/* STEP 4 */}

          <div className="step">

            <div className="step-number">
              4
            </div>

            <h3>
              Return
            </h3>

            <p>
              Return the item to its rightful owner
              and mark it as returned.
            </p>

          </div>


        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section className="cta-section">

        <div className="cta-content">

          <h2>
            Lost Something on Campus?
          </h2>

          <p>
            Don't worry. Report it now and let your
            college community help you find it.
          </p>

          <button
            className="lost-btn"
            onClick={() => navigate("/report-lost")}
          >
            🔴 Report Lost Item
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-section">

            <div className="footer-logo">
              🔍 Smart Lost & Found
            </div>

            <p>
              Helping students find what they have lost
              and return what they have found.
            </p>

          </div>


          <div className="footer-section">

            <h3>
              Quick Links
            </h3>

            <button onClick={() => navigate("/")}>
              Home
            </button>

            <button onClick={() => navigate("/browse")}>
              Browse Items
            </button>

            <button onClick={() => navigate("/report-lost")}>
              Report Lost
            </button>

            <button onClick={() => navigate("/report-found")}>
              Report Found
            </button>

          </div>


          <div className="footer-section">

            <h3>
              Categories
            </h3>

            <p>📱 Electronics</p>
            <p>🪪 ID Cards</p>
            <p>📚 Books</p>
            <p>🎒 Bags</p>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Smart Lost & Found Portal
          </p>

          <p>
            Built for College Community
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;