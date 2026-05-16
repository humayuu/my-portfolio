import { useState, useEffect } from "react";

// ==========================================
// CONSTANTS
// ==========================================

const GITHUB = "https://github.com/humayuu";
const LINKEDIN = "https://www.linkedin.com/in/humayuu-ahmed/";
const GMAIL = "humayun.ahmed1198@gmail.com";
const WHATSAPP = "https://wa.me/923452578930";

const gmailCompose = (subject, body = "") => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: GMAIL,
    su: subject,
  });
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
};

const RESUME_PDF = "/Humayun_Ahmed_Resume.pdf";

const HERO_ROLE_FOCUS =
  "Passionate about full stack growth—solid backends, thoughtful interfaces, and shipping dependable web products.";
const HERO_GROWTH_LINE =
  "Leveling up with React.js & Modern JavaScript — on my way to becoming a Full Stack Developer.";

const HERO_BADGES = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "React",
  "PHP",
  "Laravel",
  "MySQL",
  "Git",
  "GitHub",
];

const SKILLS = {
  frontend: {
    icon: "fas fa-laptop",
    colorClass: "text-accent",
    badgesClass: "badge-blue",
    list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "React"],
  },
  backend: {
    icon: "fas fa-database",
    colorClass: "text-secondary-accent",
    badgesClass: "badge-purple",
    list: ["PHP", "Laravel", "MySQL"],
  },
  tools: {
    icon: "fas fa-wrench",
    colorClass: "text-success",
    badgesClass: "badge-green",
    list: ["Git", "GitHub"],
  },
};

const PROJECTS = [
  {
    id: 1,
    title: "TechMart",
    description:
      "A full-featured ecommerce-style platform for tech products with listings, cart flow, and admin-friendly structure—my flagship Laravel project.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    github: `${GITHUB}/Techmart`,
  },
  {
    id: 2,
    title: "Invoice Tracking System",
    description:
      "Create, track, and manage invoices in one place—forms, validation, and reporting focused on small business workflows.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: `${GITHUB}/invoice-tracking-system`,
  },
  {
    id: 3,
    title: "POS Barcode System",
    description:
      "A point-of-sale style app with barcode-friendly product lookup and checkout-style flows for retail-style demos.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: `${GITHUB}/posbarcode`,
  },
  {
    id: 4,
    title: "Shopping Cart",
    description:
      "Dynamic cart with add/update quantity and checkout-style steps—good practice with PHP, sessions, and jQuery.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    github: `${GITHUB}/Shopping-Cart`,
  },
  {
    id: 5,
    title: "News Blog",
    description:
      "A news/blog platform with categories, posts, and admin-style content management using Laravel and Blade.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Blade"],
    github: `${GITHUB}/news-blog`,
  },
];

const CONTACTS = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    label: "Connect",
    icon: "fab fa-linkedin",
    link: LINKEDIN,
    external: true,
    ariaLabel: "Open Humayun’s LinkedIn profile in a new tab",
  },
  {
    id: "gmail",
    platform: "Gmail",
    label: "Send message",
    icon: "fas fa-envelope",
    link: gmailCompose("Hello from your portfolio", "Hi Humayun,\n\n"),
    external: true,
    ariaLabel: "Open Gmail compose to email Humayun in a new tab",
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    label: "Chat on WhatsApp",
    icon: "fab fa-whatsapp",
    link: WHATSAPP,
    external: true,
    ariaLabel: "Open chat with Humayun on WhatsApp in a new tab",
  },
  {
    id: "github",
    platform: "GitHub",
    label: "View repositories",
    icon: "fab fa-github",
    link: GITHUB,
    external: true,
    ariaLabel: "Open Humayun’s GitHub profile in a new tab",
  },
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

const SectionHeading = ({ title }) => (
  <div className="text-center mb-5">
    <h2 className="fw-bold text-white mb-2">{title}</h2>
    <div
      className="mx-auto rounded bg-accent-bar"
      style={{ width: "60px", height: "4px" }}
      aria-hidden
    />
  </div>
);

// ==========================================
// SECTIONS
// ==========================================

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const hasSolidBg = isScrolled || isMenuOpen;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top py-3 ${hasSolidBg ? "navbar-scrolled" : ""}`}
      style={{
        backgroundColor: hasSolidBg ? "#0a0a0f" : "transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold fs-4 text-white"
          href="#home"
          onClick={closeMenu}
        >
          Humayun<span className="text-accent">.</span>
        </a>
        <button
          className="navbar-toggler border-0 shadow-none p-2"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <i
            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-white fs-4`}
            aria-hidden
          />
        </button>
        <div
          id="navbarNav"
          className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav gap-2 gap-lg-3 align-items-lg-center">
            {NAV_LINKS.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link text-nav-muted fw-medium"
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="container py-5 mt-5 min-vh-100 d-flex align-items-center"
    >
      <div className="row w-100 align-items-center flex-column-reverse flex-lg-row">
        <div className="col-lg-7 text-center text-lg-start mt-5 mt-lg-0">
          <div className="available-badge">
            <div className="pulsing-dot">
              <span className="pulsing-dot-ping" aria-hidden />
              <span className="pulsing-dot-core" aria-hidden />
            </div>
            Open to junior roles & internships
          </div>

          <h1 className="display-4 fw-bold text-white mb-0">
            Hi, I&apos;m{" "}
            <span className="display-3 text-accent d-block d-lg-inline">
              Humayun
            </span>
          </h1>

          <p className="fs-4 fw-semibold text-white mt-3 mb-2 hero-lead-width mx-auto mx-lg-0 lh-sm">
            <span className="text-accent">PHP &amp; Laravel</span> Developer
          </p>
          <p className="fs-6 text-secondary fw-medium mb-2 hero-lead-width mx-auto mx-lg-0 lh-lg">
            {HERO_ROLE_FOCUS}
          </p>
          <p className="fs-6 text-secondary text-opacity-90 mb-3 hero-lead-width mx-auto mx-lg-0 lh-lg">
            {HERO_GROWTH_LINE}
          </p>

          <p className="lead text-secondary mb-4 hero-lead-width mx-auto mx-lg-0">
            I enjoy turning ideas into{" "}
            <strong className="text-light fw-semibold">
              maintainable Laravel
            </strong>{" "}
            features and{" "}
            <strong className="text-light fw-semibold">
              clear, reliable UI flows
            </strong>
            —always learning from real builds and documentation.
          </p>

          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
              {HERO_BADGES.map((skill) => (
                <span
                  key={skill}
                  className="badge bg-secondary rounded-pill py-2 px-3 fw-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 justify-content-center justify-content-lg-start hero-cta-group">
            <a
              href={RESUME_PDF}
              download="Humayun_Ahmed_Resume.pdf"
              className="btn btn-gradient py-2 px-4 rounded-3 d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
              aria-label="Download resume as PDF"
            >
              <i className="fas fa-download" aria-hidden />
              Download resume
            </a>
            <a
              href="#projects"
              className="btn btn-outline-custom py-2 px-4 rounded-3 d-inline-flex align-items-center justify-content-center text-decoration-none"
            >
              View my work
            </a>
          </div>
        </div>

        <div className="col-lg-5 text-center mt-5 mt-lg-0">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-border">
              <div className="hero-avatar" aria-hidden>
                <span>H</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container py-5">
        <SectionHeading title="About Me" />

        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="fs-5 text-secondary lh-lg mb-0 text-center text-lg-start">
              <p className="mb-3">
                I work mostly with{" "}
                <strong className="text-light fw-semibold">
                  PHP and Laravel
                </strong>{" "}
                to build web apps and handle backend work. I&apos;m learning{" "}
                <strong className="text-light fw-semibold">
                  JavaScript and React
                </strong>{" "}
                so I can grow into full stack development over time.
              </p>
              <p className="mb-0">
                I learn by building small projects and reading the official
                docs. I&apos;m{" "}
                <strong className="text-light fw-semibold">
                  open to junior roles and internships
                </strong>
                —happy to learn on the job and help the team wherever I can.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-sm-4">
                <div className="glass-card text-center p-3">
                  <h3 className="fw-bold text-accent mb-1 fs-2">5+</h3>
                  <p className="text-secondary small mb-0">
                    Portfolio projects
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="glass-card text-center p-3">
                  <h3 className="fw-bold text-accent mb-1 fs-2">1+</h3>
                  <p className="text-secondary small mb-0">Years learning</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="glass-card text-center p-3">
                  <h3 className="fw-bold text-accent mb-1 fs-2">10+</h3>
                  <p className="text-secondary small mb-0">
                    Tools &amp; topics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="container py-5 mt-4">
      <SectionHeading title="My Tech Stack" />

      <div className="row g-4 justify-content-center">
        {Object.entries(SKILLS).map(([category, data]) => (
          <div className="col-md-4" key={category}>
            <div className="glass-card d-flex flex-column align-items-center text-center">
              <i
                className={`${data.icon} fs-1 ${data.colorClass} mb-3`}
                aria-hidden
              />
              <h3 className="fw-bold text-white mb-4 text-capitalize h4">
                {category}
              </h3>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {data.list.map((skill) => (
                  <span
                    key={skill}
                    className={`badge badge-custom-pill ${data.badgesClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-5 mt-4"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container py-4">
        <SectionHeading title="What I've Built" />

        <div className="row g-4">
          {PROJECTS.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-12">
              <div className="glass-card project-card d-flex flex-column h-100">
                <h4 className="fw-bold text-white mb-3">{project.title}</h4>
                <p className="text-secondary flex-grow-1">
                  {project.description}
                </p>

                <div className="mb-4 d-flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={`${project.id}-${t}-${idx}`}
                      className="badge badge-custom-pill badge-purple"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center text-decoration-none text-light fw-medium github-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <i className="fab fa-github me-2" aria-hidden />
                    <span className="text-decoration-underline github-link-text">
                      View on GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="container py-5 mt-4">
      <div className="text-center mx-auto mb-5 text-container-narrow">
        <h2 className="fw-bold text-white mb-3">Let&apos;s work together</h2>
        <p className="text-secondary fs-5 mb-0">
          I&apos;m looking for a{" "}
          <span className="text-light fw-medium">junior developer role</span>{" "}
          focused on PHP, Laravel, or full stack work—and I&apos;m open to the
          right internship if it&apos;s a strong learning fit. If you&apos;d
          like to talk about a role, a project, or mentorship, reach out through
          whichever channel you prefer below.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {CONTACTS.map((contact) => (
          <div key={contact.id} className="col-sm-6 col-lg-3">
            <a
              href={contact.link}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="text-reset text-decoration-none d-block h-100 contact-tile-link"
              aria-label={contact.ariaLabel}
            >
              <div className="glass-card contact-card text-center d-flex flex-column align-items-center justify-content-center h-100 w-100 p-4 border-0">
                <i
                  className={`${contact.icon} fs-1 text-accent mb-3`}
                  aria-hidden
                />
                <h3 className="fw-bold text-light mb-1 h5">
                  {contact.platform}
                </h3>
                <p className="text-secondary small mb-0">{contact.label}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      className="py-4 border-top border-secondary border-opacity-25"
      style={{ backgroundColor: "#050508" }}
    >
      <div className="container text-center">
        <p className="text-secondary small mb-0">
          © {new Date().getFullYear()} Humayun — PHP · Laravel · learning React
        </p>
      </div>
    </footer>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#home"
      className="back-to-top-btn btn btn-gradient rounded-circle shadow d-flex align-items-center justify-content-center text-decoration-none"
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" aria-hidden />
    </a>
  );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
