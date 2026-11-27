"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";


const projects = [
  {
    number: "01",
    name: "MONALIZA SILVER",
    category: "ONLINE SILVER SHOWROOM",
    description:
      "An online showroom experience created for a silver jewelry brand.",
    type: "monaliza",
    status: "UNDER CONSTRUCTION",
    image: "/projects/monaliza-bg.png",
    link: "https://monaliza-silver.vercel.app/",
    action: "Preview showroom",
  },
  {
    number: "02",
    name: "LIMITED 19",
    category: "FASHION E-COMMERCE",
    description:
      "An online fashion website designed for a contemporary clothing brand.",
    type: "limited19",
    status: "UNDER CONSTRUCTION",
    image: "/projects/limited19-bg.png",
    link: "https://limited19-preview.vercel.app/",
    action: "Preview website",
  },
];


const services = [
  "Shopify Development",
  "Website Design",
  "E-commerce Redesign",
  "Digital Experiences",
];

export default function Home() {
  return (
    <main id="top">

      {/* NAVIGATION */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo display-font">
            RI3O<span>.</span>
          </a>

<nav className="desktop-nav">
  <a href="#work">Work</a>
  <a href="#services">Services</a>
  <a href="#pricing">Pricing</a>
  <a href="#about">About</a>
</nav>

          <a href="#contact" className="nav-cta">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="availability">
            <span className="availability-dot" />
            INDEPENDENT DIGITAL CREATIVE STUDIO
          </div>

          <h1 className="hero-title display-font">
            WE BUILD
            <br />
            <span className="outline-text">DIGITAL</span>
            <br />
            EXPERIENCES<span className="accent">.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              We design and develop digital experiences
              that move brands forward. Thoughtful design.
              Powerful technology. Real impact.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button-primary">
                Explore our work
                <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="button-secondary">
                Start a project
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="hero-index">
          <span>BASED IN EGYPT</span>
          <span>WORKING WORLDWIDE</span>
          <a href="#work">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </div>
      </section>

      {/* MOVING TEXT */}
      <div className="marquee">
        <div className="marquee-track display-font">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              DESIGN <b>✳</b> DEVELOP <b>✳</b> CREATE
              <b>✳</b> BUILD DIGITAL <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      
{/* PROJECTS */}

<section id="work" className="work-section container">

  <div className="section-heading">
    <div>
      <span className="eyebrow">01 / SELECTED WORK</span>
      <h2 className="display-font">
        OUR RECENT <span className="muted">WORK.</span>
      </h2>
    </div>

    <p>Digital experiences made with intention.</p>
  </div>

  <div className="projects-grid">

    {projects.map((project) => (
      <article className="project-card" key={project.number}>

        <div
          className={`project-visual project-background ${project.type}`}
          style={{
            backgroundImage: `url("${project.image}")`,
          }}
        >
          <span className="project-number">
            {project.number}
          </span>

          <span className="project-status">
            {project.status}
          </span>
        </div>

        <div className="project-info">
          <div>
            <h3>{project.name}</h3>
            <p>{project.category}</p>
          </div>

          <span className="project-index">
            {project.number}
          </span>
        </div>

        <p className="project-description">
          {project.description}
          <a
  href={`/projects/${project.type === "monaliza"
    ? "monaliza-silver"
    : "limited-19"}`}
  className="project-link"
>
  View case study
  <ArrowUpRight size={17} />
</a>
        </p>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {project.action}
            <ArrowUpRight size={17} />
          </a>
        ) : (
          <span className="project-link project-link-disabled">
            {project.action}
          </span>
        )}

      </article>
    ))}

  </div>
</section>


{/* SERVICES */}

<section id="services" className="services-section container">

  <span className="eyebrow">02 / WHAT WE DO</span>

  <div className="section-heading">
    <h2 className="display-font">
      SERVICES THAT
      <br />
      MOVE BRANDS <span className="muted">FORWARD.</span>
    </h2>
    <p>
      From concept to launch, we build digital
      experiences designed to make an impact.
    </p>
  </div>

  <div className="services-grid">

    <article className="service-card">
      <span>01 / DESIGN</span>
      <h3>Website Design</h3>
      <p>
        Modern, responsive and visually distinctive
        websites built around your brand identity.
      </p>
      <span className="service-arrow">↗</span>
    </article>

    <article className="service-card">
      <span>02 / E-COMMERCE</span>
      <h3>Shopify Development</h3>
      <p>
        Professional Shopify stores designed to
        showcase products and create smooth
        shopping experiences.
      </p>
      <span className="service-arrow">↗</span>
    </article>

    <article className="service-card">
      <span>03 / DEVELOPMENT</span>
      <h3>Web Development</h3>
      <p>
        Custom websites and digital experiences
        developed with modern technologies.
      </p>
      <span className="service-arrow">↗</span>
    </article>

  </div>

</section>


{/* PRICING */}

<section id="pricing" className="pricing-section container">

  <div className="pricing-heading">
    <span className="eyebrow">03 / INVESTMENT</span>

    <h2 className="display-font">
      CLEAR PRICING.
      <br />
      <span className="muted">NO SURPRISES.</span>
    </h2>

    <p>
      Every business is different. Choose a starting
      point, and let's build something that fits
      your goals.
    </p>

    
  </div>

  <div className="pricing-grid">

    <article className="price-card">
      <span className="price-number">01 / STARTER</span>

      <h3>THE STARTER</h3>

      <div className="price-amount">
        EGP 3,499
      </div>

      

      <p className="price-description">
        A professional online presence for
        individuals and small businesses.
      </p>

      <ul>
        <li>Up to 3 pages</li>
        <li>Responsive design</li>
        <li>Contact form</li>
        <li>Basic SEO setup</li>
        <li>1 revision round</li>
      </ul>

      <a href="#contact" className="price-button">
        Start a project <ArrowUpRight size={16} />
      </a>
    </article>

    <article className="price-card featured-price">

      <span className="price-number">
        02 / BUSINESS
      </span>

      <span className="popular-label">
        MOST POPULAR
      </span>

      <h3>THE BUSINESS</h3>

      <div className="price-amount">
        EGP 5,999
      </div>

      

      <p className="price-description">
        A complete digital experience for
        growing businesses and brands.
      </p>

      <ul>
        <li>Up to 6 pages</li>
        <li>Custom visual direction</li>
        <li>Responsive design</li>
        <li>WhatsApp integration</li>
        <li>Basic SEO setup</li>
        <li>2 revision rounds</li>
      </ul>

      <a href="#contact" className="price-button featured-button">
        Start a project <ArrowUpRight size={16} />
      </a>

    </article>

    <article className="price-card">

      <span className="price-number">
        03 / E-COMMERCE
      </span>

      <h3>THE E-COMMERCE</h3>

      <div className="price-amount">
        EGP 9,999
      </div>


      <p className="price-description">
        A Shopify store designed to turn
        visitors into customers.
      </p>

      <ul>
        <li>Shopify store setup</li>
        <li>Theme customization</li>
        <li>Homepage and product pages</li>
        <li>Up to 20 products</li>
        <li>Payment and shipping setup</li>
        <li>Mobile optimization</li>
        <li>Basic SEO setup</li>
      </ul>

      <a href="#contact" className="price-button">
        Start a project <ArrowUpRight size={16} />
      </a>

    </article>

<div className="pricing-inclusions">
  <div className="inclusions-heading">
    <span>WHAT'S INCLUDED</span>
    <h3>Clear pricing. No surprises.</h3>
    <p>
      Everything you need to know about what's covered
      in your website package.
    </p>
  </div>

  <div className="inclusions-table">
    {[
      ["Website design", "Included"],
      ["Website development", "Included"],
      ["Responsive design", "Included"],
      ["Basic SEO setup", "Included"],
      ["Domain registration", "Extra fees"],
      ["Hosting", "Extra fees"],
      ["Shopify subscription", "Extra fees"],
      ["Premium themes", "Extra fees"],
      ["Paid apps / plugins", "Extra fees"],
      ["Website maintenance", "Free"],
    ].map(([item, status]) => (
      <div className="inclusions-row" key={item}>
        <span>{item}</span>
        <span
          className={
            status === "Included"
              ? "status-included"
              : status === "Free"
              ? "status-free"
              : "status-extra"
          }
        >
          {status}
        </span>
      </div>
    ))}
  </div>
</div>

  </div>

  <div className="custom-price">
    <div>
      <span className="eyebrow">HAVE SOMETHING DIFFERENT IN MIND?</span>
      <h3>LET'S BUILD SOMETHING CUSTOM.</h3>
      <p>
        Complex websites, custom features and
        projects that need a different approach.
      </p>
    </div>

    <a href="#contact" className="button-primary">
      Request a custom quote
      <ArrowUpRight size={17} />
    </a>
  </div>

  <p className="pricing-note">
    All prices are starting estimates. Final quotations
    depend on project scope. Domain, hosting, subscriptions,
    premium themes and third-party services are not included
    unless specified. 50% deposit to begin.
  </p>

</section>


      {/* ABOUT */}
      <section id="about" className="about-section container">
        <span className="eyebrow">03 / THE STUDIO</span>

        <h2 className="display-font">
          GOOD DESIGN ISN'T
          <br />
          JUST HOW IT <span className="accent">LOOKS.</span>
          <br />
          IT'S HOW IT WORKS.
        </h2>

        <p>
          RI3O is a digital creative studio focused on
          creating distinctive websites and e-commerce
          experiences. We bring design, technology and
          business together to help brands stand out.
        </p>
      </section>

     
{/* CONTACT */}
<section id="contact" className="contact-section">
  <div className="container">
    <span className="eyebrow">04 / HAVE A PROJECT?</span>

    <h2 className="display-font">
      LET'S MAKE
      <br />
      SOMETHING <span className="accent">MATTER.</span>
    </h2>

    <p className="contact-intro">
      Tell us a little about what you're building.
      We'll get back to you as soon as possible.
    </p>

    <form
      className="inquiry-form"
      action="https://formspree.io/f/xppdywqp"
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="New RI3O Project Inquiry"
      />

      {/* Spam protection */}
      <input
        type="text"
        name="_gotcha"
        className="form-honeypot"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="full-name">FULL NAME *</label>
          <input
            id="full-name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">EMAIL ADDRESS *</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="business">BRAND / BUSINESS NAME</label>
          <input
            id="business"
            type="text"
            name="business"
            placeholder="Your brand name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="project-type">PROJECT TYPE *</label>
          <select
            id="project-type"
            name="project_type"
            required
            defaultValue=""
          >
            <option value="" disabled>Select a project type</option>
            <option value="Shopify Store">Shopify Store</option>
            <option value="Business Website">Business Website</option>
            <option value="Custom Website">Custom Website</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Other">Something else</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="budget">ESTIMATED BUDGET</label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
          >
            <option value="" disabled>Select your budget</option>
            <option value="Under EGP 5,000">Under EGP 5,000</option>
            <option value="EGP 5,000–10,000">EGP 5,000–10,000</option>
            <option value="Above EGP 10,000">Above EGP 10,000</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="launch-date">PREFERRED LAUNCH DATE</label>
          <input
            id="launch-date"
            type="date"
            name="launch_date"
          />
        </div>
      </div>

      <div className="form-field form-message">
        <label htmlFor="project-details">TELL US ABOUT YOUR PROJECT *</label>
        <textarea
          id="project-details"
          name="message"
          placeholder="What are you looking to build? Tell us about your idea, goals and requirements..."
          rows={6}
          required
        />
      </div>

      <button type="submit" className="button-primary inquiry-submit">
        SUBMIT INQUIRY
        <ArrowUpRight size={18} />
      </button>

      <p className="form-note">
        Your information will only be used to discuss your project.
      </p>

<a
  href="https://www.instagram.com/ri3o_studio/"
  target="_blank"
  rel="noopener noreferrer"
  className="instagram-contact"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.7"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
</svg>
  <span>OR CONNECT WITH US ON INSTAGRAM</span>
  <ArrowUpRight size={15} />
</a>

    </form>
  </div>
</section>
{/* FOOTER */}
<footer className="footer container">
  <a href="#top" className="logo display-font">
    RI3O<span>.</span>
  </a>

  <p>© 2026 RI3O Studio. All rights reserved.</p>

  <a href="#top">BACK TO TOP ↑</a>
</footer>

</main>
);
}


