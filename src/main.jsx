import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink,
  Code2, BrainCircuit, Database, Globe, Award, BriefcaseBusiness,
  GraduationCap, Menu, X, Sparkles
} from "lucide-react";
import "./styles.css";

const projects = [
  { title:"Udhaar Khata", category:"Digital Credit Management System • MERN", description:"A full-stack credit tracking application with secure authentication, customer management, transaction tracking, debt recording, payment history, balance calculation and dashboard analytics.", tags:["MongoDB","Express","React","Node"], featured:true, link:"https://github.com/varshahanji13/Udhaar-Khata" },
  { title:"Shubhrasetu", category:"Women Safety System • Hackathon Winner", description:"An emergency alert and safe-route suggestion system with real-time monitoring and instant alert mechanisms for emergency response.", tags:["MERN","Safety Tech","Real-Time"], featured:true, link:"https://github.com/" },
  { title:"Anurag Blog App", category:"Full-Stack Development • MERN", description:"A dynamic blogging platform where users can create, update and manage blog posts with secure backend integration, structured APIs and responsive UI.", tags:["MongoDB","Express","React","Node"], link:"https://github.com/" },
  { title:"Auralife", category:"Mental Health Platform", description:"A wellness-focused platform with 3+ modules including journaling, emotional tracking and guided yoga sessions.", tags:["Web","Wellness","UX"], link:"https://github.com/" },
  { title:"Mantra", category:"Zero-Cost Literary Publishing Platform", description:"A community-driven portal supporting content publishing, reader interaction and author engagement across multiple user roles.", tags:["Web Development","Publishing","UI"], link:"https://github.com/" },
  { title:"Political Fake News Detection", category:"AI / Machine Learning", description:"An NLP-based fake-news detection project exploring text preprocessing and machine-learning approaches for political news classification.", tags:["Python","NLP","AI/ML"], link:"https://github.com/" }
];

const skills = [
  {name:"Python",icon:Code2},{name:"Java",icon:Code2},{name:"C",icon:Code2},{name:"JavaScript",icon:Code2},
  {name:"React.js",icon:Globe},{name:"HTML5 & CSS3",icon:Globe},{name:"Tailwind CSS",icon:Globe},
  {name:"Node.js / Express.js",icon:Globe},{name:"MongoDB / MySQL",icon:Database},{name:"Data Structures & Algorithms",icon:BrainCircuit},
  {name:"DBMS / OOP",icon:Database},{name:"Git / GitHub",icon:Github},{name:"Postman / VS Code",icon:Code2},
  {name:"Generative AI",icon:Sparkles},{name:"Prompt Engineering",icon:Sparkles},{name:"R Programming",icon:Code2}
];

const certifications = [
  "IUCEE — Generative AI For All",
  "Cisco — Networking Essentials",
  "Cisco — Operating Systems",
  "NPTEL — Data Structures & Algorithms with Python",
  "Google Cloud — Machine Learning & AI",
  "Udemy — Java for Beginners"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="nav">
        <a className="logo" href="#home" onClick={closeMenu}>
          <span>V</span> Varsha.
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Experience", "Research", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="nav-resume" href="/resume.pdf" download>
          <Download size={16}/> Resume
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-glow one"></div>
          <div className="hero-glow two"></div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot"></span> Open to opportunities</div>
            <h1>Hi, I'm <span>Varsha Hanji.</span></h1>
            <h2>Computer Science Engineer <span className="slash">/</span> Developer <span className="slash">/</span> AI Enthusiast</h2>
            <p>
              I build practical web applications and explore AI/ML solutions that turn
              ideas into useful, user-focused products.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View my work <ArrowUpRight size={18}/></a>
              <a className="btn secondary" href="#contact">Let's connect <Mail size={18}/></a>
            </div>
            <div className="socials">
              <a href="https://github.com/varshahanji13" target="_blank" rel="noreferrer"><Github size={19}/></a>
              <a href="https://www.linkedin.com/in/varsha-hanji-89a173373" target="_blank" rel="noreferrer"><Linkedin size={19}/></a>
              <a href="mailto:varshahanji3@gmail.com"><Mail size={19}/></a>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="orbit orbit1"></div>
            <div className="orbit orbit2"></div>
            <div className="code-card">
              <div className="code-top"><i></i><i></i><i></i><span>portfolio.jsx</span></div>
              <div className="code-content">
                <p><b className="pink">const</b> <b className="blue">developer</b> = {'{'}</p>
                <p className="indent"><span className="key">name</span>: <span className="green">'Varsha Hanji'</span>,</p>
                <p className="indent"><span className="key">degree</span>: <span className="green">'B.Tech CSE'</span>,</p>
                <p className="indent"><span className="key">focus</span>: [</p>
                <p className="indent2"><span className="green">'Full Stack'</span>,</p>
                <p className="indent2"><span className="green">'AI / ML'</span>,</p>
                <p className="indent2"><span className="green">'Research'</span></p>
                <p className="indent">],</p>
                <p className="indent"><span className="key">coffee</span>: <span className="orange">true</span></p>
                <p>{'}'}</p>
                <p className="cursor">▌</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span><div><p className="mini">ABOUT ME</p><h2>Building with curiosity.</h2></div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p className="lead">I'm a B.Tech Computer Science Engineering student at <strong>Anurag University, Hyderabad</strong> with a CGPA of 8.85/10, interested in software development, Artificial Intelligence and research-oriented opportunities.</p>
              <p>I enjoy taking an idea from a rough concept to a working product — designing the interface, building APIs, connecting databases and improving the user experience.</p>
              <p>My work spans MERN applications, database-backed systems, AI/ML and Generative AI. I enjoy building practical applications and exploring research-oriented opportunities where I can deepen my technical skills.</p>
            </div>
            <div className="edu-card">
              <GraduationCap size={28}/>
              <div><span>Currently pursuing</span><h3>B.Tech — Computer Science Engineering</h3><p>Anurag University · Hyderabad</p></div>
              <div className="edu-stat"><strong>8.85</strong><span>CGPA</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="section-heading">
            <span>02</span><div><p className="mini">TOOLKIT</p><h2>Skills & technologies.</h2></div>
          </div>
          <div className="skills-grid">
            {skills.map(({name, icon: Icon}) => (
              <div className="skill" key={name}><Icon size={20}/><span>{name}</span></div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span>03</span><div><p className="mini">SELECTED WORK</p><h2>Things I've built.</h2></div>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className={`project ${p.featured ? "featured" : ""}`} key={p.title}>
                <div className="project-number">0{i+1}</div>
                <div className="project-icon"><Code2 size={22}/></div>
                <p className="project-cat">{p.category}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <a href={p.link} target="_blank" rel="noreferrer">View project <ExternalLink size={15}/></a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section muted">
          <div className="section-heading">
            <span>04</span><div><p className="mini">EXPERIENCE</p><h2>Learning by building.</h2></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">MAR 2024 — PRESENT</div>
              <div><h3>Software Development Intern · Blue Stock Company</h3><p>Remote</p>
              <ul><li>Contributed to application feature development and backend logic creation.</li><li>Collaborated with the development team on debugging, system architecture understanding and performance optimization.</li></ul></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">JUN 2025 — PRESENT</div>
              <div><h3>Cisco AICTE Virtual Internship</h3><p>Networking</p>
              <ul><li>Completed structured training in routing, switching, IP addressing and network security concepts; performed hands-on network configuration and troubleshooting simulations using virtual lab environments.</li></ul></div>
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="section-heading"><span>05</span><div><p className="mini">ACHIEVEMENTS</p><h2>Beyond the classroom.</h2></div></div>
          <div className="achievement-grid">
            <div className="achievement"><Award size={22}/><div><h3>ANUSF 3.0 Hackathon Winner</h3><p>Designed and developed Shubhrasetu, a women-safety and legal-awareness platform with real-time emergency response features.</p></div></div>
            <div className="achievement"><Award size={22}/><div><h3>PyChamp Finalist</h3><p>Finalist in the university-level PyChamp Python competition; optimized code to reduce execution time by 15% versus the average contestant.</p></div></div>
            <div className="achievement"><BriefcaseBusiness size={22}/><div><h3>Business Intelligence Club Member</h3><p>Orchestrated three data analytics workshops, improving participant understanding of data visualization tools by 20% based on pre- and post-session surveys.</p></div></div>
            <div className="achievement"><Sparkles size={22}/><div><h3>IANE & InnoQuest 3.0 Participant</h3><p>Participated in innovation-driven technical competitions.</p></div></div>
          </div>
        </section>

        <section id="research" className="section research">
          <div className="research-box">
            <div>
              <p className="mini">06 · RESEARCH</p>
              <h2>Curious about what happens <em>under the hood.</em></h2>
              <p>I'm particularly interested in AI/ML, Natural Language Processing, Generative AI and applied research. My fake-news detection work explores how different text representations and deep-learning architectures can be combined for classification.</p>
              <a className="btn primary" href="#contact">Discuss a research opportunity <ArrowUpRight size={18}/></a>
            </div>
            <div className="research-icon"><BrainCircuit size={80} strokeWidth={1}/></div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span>07</span><div><p className="mini">CERTIFICATIONS</p><h2>Always learning.</h2></div>
          </div>
          <div className="cert-grid">
            {certifications.map((c, i) => <div className="cert" key={c}><Award size={19}/><span>{c}</span><small>0{i+1}</small></div>)}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <p className="mini">08 · CONTACT</p>
            <h2>Let's build something<br/><span>meaningful.</span></h2>
            <p>Have an internship opportunity, project idea or research collaboration in mind? I'd love to hear from you.</p>
            <a className="btn primary" href="mailto:your.email@example.com">Email me <Mail size={18}/></a>
            <div className="contact-links">
              <a href="https://github.com/varshahanji13" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Varsha Hanji</span>
        <span>Designed & built with React · Hyderabad</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
