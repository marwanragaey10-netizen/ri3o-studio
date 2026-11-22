
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projectData = {
  "monaliza-silver": {
    number: "01",
    name: "MONALIZA SILVER",
    category: "ONLINE SILVER SHOWROOM",
    description:
      "An online showroom experience created for a silver jewelry brand.",
    concept:
      "The experience is designed around simplicity, elegance and the beauty of silver jewelry. A quiet digital environment that lets the products take center stage.",
    image: "/projects/monaliza-bg.png",
    website: "https://monaliza-silver.vercel.app/",
    action: "Explore the showroom",
    industry: "Jewelry",
    platform: "Next.js",
    status: "UNDER CONSTRUCTION",
  },
  "limited-19": {
    number: "02",
    name: "LIMITED 19",
    category: "FASHION E-COMMERCE",
    description:
      "An online fashion website designed for a contemporary clothing brand.",
    concept:
      "A mysterious and minimal digital identity built around exclusivity, editorial typography and a distinctive fashion experience.",
    image: "/projects/limited19-bg.png",
    website: "https://limited19-preview.vercel.app/",
    action: "Explore the website",
    industry: "Fashion",
    platform: "Next.js",
    status: "UNDER CONSTRUCTION",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project =
    projectData[slug as keyof typeof projectData];

  if (!project) {
    notFound();
  }

  return (
    <main className="case-page">

      <nav className="case-nav container">
        <Link href="/" className="logo display-font">
          RI3O<span>.</span>
        </Link>

        <Link href="/#work" className="case-back">
          <ArrowLeft size={15} />
          BACK TO WORK
        </Link>
      </nav>

      <section className="case-hero container">
        <span className="eyebrow">
          PROJECT {project.number} / {project.category}
        </span>

        <h1 className="display-font">
          {project.name}
          <span className="accent">.</span>
        </h1>

        <p>{project.description}</p>

        <span className="case-status">
          {project.status}
        </span>
      </section>

      <section className="case-image container">
        <div
          className="case-image-background"
          style={{
            backgroundImage: `url("${project.image}")`,
          }}
        />
      </section>

      <section className="case-details container">

        <div className="case-overview">
          <span className="eyebrow">PROJECT OVERVIEW</span>
          <h2 className="display-font">
            THE IDEA BEHIND
            <br />
            THE EXPERIENCE.
          </h2>
          <p>{project.concept}</p>
        </div>

        <div className="case-information">
          <div>
            <span>INDUSTRY</span>
            <p>{project.industry}</p>
          </div>

          <div>
            <span>PLATFORM</span>
            <p>{project.platform}</p>
          </div>

          <div>
            <span>STATUS</span>
            <p>{project.status}</p>
          </div>
        </div>

      </section>

      <section className="case-cta container">
        <span className="eyebrow">EXPLORE THE PROJECT</span>

        <h2 className="display-font">
          SEE IT
          <br />
          IN ACTION<span className="accent">.</span>
        </h2>

        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary"
        >
          {project.action}
          <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="footer container">
        <Link href="/" className="logo display-font">
          RI3O<span>.</span>
        </Link>

        <p>© 2026 RI3O Studio.</p>

        <Link href="/#work">ALL PROJECTS ↑</Link>
      </footer>

    </main>
  );
}
