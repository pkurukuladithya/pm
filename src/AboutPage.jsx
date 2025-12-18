import React, { useState } from "react";
import { Mail, Github, Phone, ArrowRight, Code, Cpu, Smartphone, Eye } from "lucide-react";
import profileImage from "./assets/new.jpg";

const highlights = [
  { label: "Role", value: "Systems Engineer" },
  { label: "Focus", value: "Colombo Sri Lanka" },
  { label: "Based in", value: "Colombo Sri Lanka" },
  { label: "Experience", value: "SLIIT CSE Committee" },
];

const skills = [
  { icon: <Code className="w-5 h-5" />, title: "UI + UX", items: ["React", "Vite", "Tailwind"] },
  { icon: <Cpu className="w-5 h-5" />, title: "System design", items: ["Node.js", "Spring Boot", "APIs"] },
  { icon: <Smartphone className="w-5 h-5" />, title: "Mobile", items: ["Flutter", "Kotlin", "Android"] },
  { icon: <Eye className="w-5 h-5" />, title: "Data integrations", items: ["MongoDB", "PostgreSQL", "REST"] },
];

const projects = [
  {
    name: "Smart Living Hub",
    desc: "Home automation with responsive web controls, real-time status, and energy-friendly presets.",
    tags: ["IoT", "ESP32", "Web UI"],
    gradient: "from-amber-400/20 to-orange-500/20",
  },
  {
    name: "Learning Pulse",
    desc: "LMS with Spring Boot + React: attendance, grading, and collaborative resources for learners.",
    tags: ["Spring", "React", "PostgreSQL"],
    gradient: "from-blue-400/20 to-cyan-500/20",
  },
  {
    name: "Retail Flow",
    desc: "E-commerce experience with product search, cart flows, order tracking, and admin dashboards.",
    tags: ["MERN", "Stripe sandbox"],
    gradient: "from-purple-400/20 to-pink-500/20",
  },
];

function AboutPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            P.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="text-amber-400 font-medium">Portfolio</a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="mailto:kurukuladithyapraveena@gmail.com"
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all"
          >
            Contact me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/60 text-sm mb-4">Hello,</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              I'm
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                Praveena
              </span>
              <br />
              Technologist
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              I design and ship solutions that balance usability with performance. Engineer focused on Full-stack and learners.
            </p>
            <a
              href="mailto:kurukuladithyapraveena@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/40 transition-all group"
            >
              <Mail className="w-5 h-5" />
              Hire me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Circular gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-transparent rounded-full blur-3xl"></div>

              {/* Profile image container */}
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Praveena"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Floating info card */}
              <div className="absolute bottom-8 -right-4 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                <p className="text-amber-400 font-semibold text-lg">Praveena</p>
                <p className="text-white/60 text-sm">Praveena Kurukuladithya</p>
                <p className="text-white/40 text-xs mt-1">IoT · Web UI · Rapid prototyping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
            <h2 className="text-4xl font-bold">What I build</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div key={skill.title} className="flex items-center gap-2 bg-zinc-800/50 border border-white/5 px-4 py-2 rounded-full">
                  {skill.icon}
                  <span className="text-sm font-medium">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling text */}
          <div className="overflow-hidden mb-16 py-4 border-y border-white/5">
            <div className="flex gap-8 animate-scroll whitespace-nowrap">
              <span className="text-white/30 text-sm">Felix cutnerd 20 aisriects pratine</span>
              <span className="text-white/30 text-sm">selescing 2e jueiction-all</span>
              <span className="text-white/30 text-sm">rioa psy 20</span>
              <span className="text-white/30 text-sm">UI + UX</span>
              <span className="text-white/30 text-sm">System design</span>
              <span className="text-white/30 text-sm">Data integrations</span>
            </div>
          </div>

          {/* Projects Section */}
          <h3 className="text-2xl font-bold mb-8">Projects Section</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.gradient} p-6 hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-widest text-white/50 font-semibold">Case study</span>
                  <h4 className="text-2xl font-bold mt-3 mb-4">{project.name}</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Capabilities */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Quick Capabilities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-amber-400/30 transition-all">
                <span className="text-amber-400 text-sm font-mono">//</span>
                <p className="text-white/60 text-sm uppercase tracking-wider mt-2 mb-1">{item.label}</p>
                <p className="text-white font-semibold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Open to internships, collaborations, and projects that blend software, hardware, and thoughtful design.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="mailto:kurukuladithyapraveena@gmail.com"
              className="flex items-center gap-3 bg-zinc-800/50 border border-white/10 rounded-2xl p-4 hover:border-amber-400/50 hover:bg-zinc-800 transition-all group"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              <span className="text-sm group-hover:text-amber-400 transition-colors">kurukuladithyapraveena@gmail.com</span>
            </a>
            <a
              href="https://github.com/pkurukuladithya"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-zinc-800/50 border border-white/10 rounded-2xl p-4 hover:border-amber-400/50 hover:bg-zinc-800 transition-all group"
            >
              <Github className="w-5 h-5 text-amber-400" />
              <span className="text-sm group-hover:text-amber-400 transition-colors">github.com/pkurukuladithya</span>
            </a>
            <a
              href="mailto:it23689862@my.sliit.lk"
              className="flex items-center gap-3 bg-zinc-800/50 border border-white/10 rounded-2xl p-4 hover:border-amber-400/50 hover:bg-zinc-800 transition-all group"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              <span className="text-sm group-hover:text-amber-400 transition-colors">it23689862@my.sliit.lk</span>
            </a>
            <div className="flex items-center gap-3 bg-zinc-800/50 border border-white/10 rounded-2xl p-4">
              <Phone className="w-5 h-5 text-amber-400" />
              <span className="text-sm">+94 763521561</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-white/40 text-sm">
          <p>(c) 2025 Praveena Kurukuladithya. Building thoughtful technology.</p>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default AboutPage;
