"use client";

import Image from "next/image";
import { useState } from "react";
import type { IconType } from "react-icons";

import {
  FiActivity,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCloud,
  FiCode,
  FiDatabase,
  FiDownload,
  FiExternalLink,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiServer,
  FiSettings,
  FiShield,
  FiTerminal,
  FiTool,
  FiX,
} from "react-icons/fi";

const profile = {
  name: "MD. RAFSAN JAMIL",
  initials: "RJ",
  image: "/profile.jpg",
  role: "DevOps & Cloud Engineer || Contributed to ISO/IEC 27001-aligned ISMS implementation",
  location: "Dhaka, Bangladesh",
  email: "mdrafsan.shah@gmail.com",
  github: "https://github.com/rafsan-999",
  linkedin: "https://www.linkedin.com/in/md-rafsan-jamil-31618619a",
  resume: "/resume.pdf",
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const focusAreas = [
  { value: "Docker", label: "Containerisation" },
  { value: "Kubernetes", label: "Container platforms" },
  { value: "CI/CD", label: "Delivery automation" },
  { value: "DevSecOps", label: "Secure pipelines" },
  { value: "Observability", label: "Monitoring and logs" },
];

const capabilities: Array<{
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    title: "Platform Engineering",
    description:
      "Building reliable Kubernetes and Docker platforms for development, staging and production workloads.",
    icon: FiLayers,
  },
  {
    title: "CI/CD Automation",
    description:
      "Creating repeatable pipelines for build, test, security scanning, image publishing and deployment.",
    icon: FiGitBranch,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Operating cloud, virtual machine and on-premises environments with an automation-first approach.",
    icon: FiCloud,
  },
  {
    title: "Security & Reliability",
    description:
      "Improving visibility, hardening delivery workflows and reducing risk through monitoring and DevSecOps.",
    icon: FiShield,
  },
];

const skillGroups: Array<{
  title: string;
  icon: IconType;
  items: string[];
}> = [
  {
    title: "Containers & Orchestration",
    icon: FiLayers,
    items: [
      "Docker",
      "Kubernetes",
      "K3s",
      "Karmada",
      "Gateway API",
      "Ingress NGINX Controller",
      "MetalLB","Helm"
    ],
  },
  
  {
    title: "CI/CD & GitOps",
    icon: FiGitBranch,
    items: [
      "Azure DevOps",
      "Jenkins",
      "Argo CD",
      "GitHub Actions",
      "Git",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: FiCloud,
    items: ["AWS", "Azure", "Oracle","Terraform", "Ansible", "Proxmox", "Linux"],
  },
  {
    title: "Networking & Security",
    icon: FiShield,
    items: ["Nginx", "Apache", "Cloudflare", "TLS/SSL", "Wazuh", "SonarQube"],
  },
  {
    title: "Monitoring & Logging",
    icon: FiActivity,
    items: [
      "Prometheus",
      "Grafana",
      "Kibana",
      "Beszel",
      "Uptime Kuma",
      "OpenObserve",
    ],
  },
  {
    title: "Scripting & Databases",
    icon: FiDatabase,
    items: ["Python", "Go", "Bash", "PowerShell", "MSSQL", "PostgreSQL", "MySQL", "Redis"],
  },
];

const projects: Array<{
  number: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  icon: IconType;
  url?: string;
}> = [
  {
    number: "01",
    title: "Production Kubernetes Platform",
    description:
      "Designed and operated a multi-node Kubernetes environment for production workloads with ingress, load balancing, storage and TLS.",
    highlights: [
      "Multi-node control-plane and worker architecture",
      "NGINX Ingress with MetalLB and TLS",
      "Persistent storage and workload troubleshooting",
    ],
    stack: ["Kubernetes", "Docker", "Helm", "NGINX", "MetalLB"],
    icon: FiServer,
  },
  {
    number: "02",
    title: "Azure DevOps Delivery Pipelines",
    description:
      "Built automated pipelines that compile applications, publish container images and deploy workloads across multiple environments.",
    highlights: [
      "Automated build and container publishing",
      "Environment-based Kubernetes deployments",
      "Security checks and controlled releases",
    ],
    stack: ["Azure DevOps", "Docker", "Kubernetes", "YAML", "Git"],
    icon: FiGitBranch,
  },
  {
    number: "03",
    title: "Multi-Cluster Kubernetes Management",
    description:
      "Managed application distribution across multiple Kubernetes clusters using centralised policies and cluster-aware deployment workflows.",
    highlights: [
      "Central cluster registration and visibility",
      "Policy-based workload propagation",
      "Cross-cluster configuration and secret migration",
    ],
    stack: ["Karmada", "Kubernetes", "kubectl", "Helm"],
    icon: FiLayers,
  },
  {
    number: "04",
    title: "Monitoring & DevSecOps Stack",
    description:
      "Implemented infrastructure monitoring, uptime checks, centralised logging and security tooling for faster incident response.",
    highlights: [
      "Infrastructure and service health dashboards",
      "Centralised logs and alerting",
      "SAST, DAST and secret-scanning workflows",
    ],
    stack: ["Prometheus", "Grafana", "Kibana", "Wazuh", "SonarQube"],
    icon: FiActivity,
  },
];

const experience = [
  {
    period: "Present",
    role: "DevOps & Cloud Engineer",
    company: "AKIJ iBOS",
    summary:
      "Supporting production infrastructure, software delivery automation, Kubernetes platforms and monitoring systems.",
    responsibilities: [
      "Manage Kubernetes workloads across development, staging and production environments.",
      "Build and maintain Azure DevOps, GitLab and GitHub-based CI/CD pipelines.",
      "Containerise applications using Docker and production-focused build practices.",
      "Configure reverse proxies, ingress controllers, DNS and TLS certificates.",
      "Investigate deployment, networking, database and application incidents.",
      "Support observability, backups, infrastructure automation and DevSecOps initiatives.",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

      <Header
        open={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen((current) => !current)}
        onClose={() => setMobileMenuOpen(false)}
      />

      <Hero />
      <FocusStrip />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Header({
  open,
  onToggle,
  onClose,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-1 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
<a
  href="#home"
  className="group flex items-center gap-3"
  onClick={onClose}
>
  <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-300/20 bg-gradient-to-br from-slate-600 via-slate-900 to-black shadow-xl shadow-black/60 transition duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:border-cyan-300/40">
    <Image
      src="/devops-logo.png"
      alt="DevOps logo"
      fill
      priority
      sizes="40px"
      className="object-contain p-1"
    />
  </div>

  <span className="font-semibold tracking-tight">
    {profile.name}
  </span>
</a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={onToggle}
          className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
        >
          {open ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={onClose}
              className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950"
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-5 pb-20 pt-32 sm:px-6"
    >
      <div className="page-grid absolute inset-0 opacity-70" />

      <div className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          {/* Profile information */}
          <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 blur-md transition duration-300 group-hover:opacity-100" />

              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-400/60 bg-slate-400 shadow-2xl shadow-cyan-950/60 sm:h-32 sm:w-32">
                <Image
                  src={profile.image}
                  alt={`${profile.name} profile picture`}
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>

              <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-emerald-400" />
            </div>

            <div>
              <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {profile.name}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {profile.role}
              </p>

              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                Available for DevOps & Cloud Opportunities
              </div>
            </div>
          </div>

          {/* Role label */}
          <p className="font-mono text-sm uppercase tracking-[0.32em] text-cyan-400">
            DevOps • Cloud • SRE
          </p>

          {/* Main heading */}
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I Build Secure

            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              & Highly Available Cloud Platforms.
            </span>
          </h1>

          {/* Introduction */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I automate software delivery, operate Kubernetes environments and
            improve production reliability with Docker, cloud infrastructure,
            monitoring and DevSecOps practices.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Explore projects
              <FiArrowRight size={18} />
            </a>

            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <SocialLink href={profile.github} label="GitHub">
              <FiGithub size={20} />
            </SocialLink>

            <SocialLink href={profile.linkedin} label="LinkedIn">
              <FiLinkedin size={20} />
            </SocialLink>

            <SocialLink
              href={`mailto:${profile.email}`}
              label="Email"
              external={false}
            >
              <FiMail size={20} />
            </SocialLink>

            <span className="ml-1 inline-flex items-center gap-2 text-sm text-slate-500">
              <FiMapPin size={17} />
              {profile.location}
            </span>
          </div>
        </div>

        <TerminalPanel />
      </div>
    </section>
  );
}
function SocialLink({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
    >
      {children}
    </a>
  );
}
function TerminalPanel() {
  return (
    <div className="relative animate-rise-delayed">
      <div className="absolute -inset-8 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="terminal-shadow relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
            <FiTerminal size={14} />
            infrastructure.ps1
          </div>
        </div>

        <div className="space-y-7 p-6 font-mono text-sm leading-7 sm:p-8">
          <TerminalCommand command="kubectl get nodes">
            <div className="mt-2 text-slate-500">
              <p>NAME STATUS ROLE</p>
              <p>
                control-plane <span className="text-emerald-400">Ready</span> control-plane
              </p>
              <p>
                worker-01 <span className="text-emerald-400">Ready</span> worker
              </p>
              <p>
                worker-02 <span className="text-emerald-400">Ready</span> worker
              </p>
            </div>
          </TerminalCommand>

          <TerminalCommand command="terraform apply --auto-approve">
            <p className="mt-2 text-emerald-400">Apply complete! Infrastructure is ready ✓</p>
          </TerminalCommand>

          <TerminalCommand command="az pipelines run --name production">
            <p className="mt-2 text-emerald-400">Pipeline completed successfully ✓</p>
          </TerminalCommand>

          <p className="animate-pulse text-cyan-400">PS&gt; _</p>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl md:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
          <FiCheckCircle size={19} />
        </span>
        <div>
          <p className="text-xs text-slate-500">Platform status</p>
          <p className="text-sm font-semibold text-emerald-400">All systems operational</p>
        </div>
      </div>
    </div>
  );
}

function TerminalCommand({
  command,
  children,
}: {
  command: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>
        <span className="text-cyan-400">PS&gt;</span>{" "}
        <span className="text-slate-100">{command}</span>
      </p>
      {children}
    </div>
  );
}

function FocusStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-5 sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-5">
        {focusAreas.map((item, index) => (
          <div
            key={item.value}
            className={`px-4 py-8 text-center ${index > 0 ? "border-l border-white/10" : ""}`}
          >
            <p className="text-lg font-bold text-cyan-400 sm:text-xl">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title="DEVOPS & CLOUD ENGINEER"
          description="Hi, This is Md. Rafsan Jamil, I am a DevOps and Cloud Engineer with 3+ years of experience building secure, scalable, reliable, and highly available infrastructure across cloud and on-premises environments.I have managed and configured up to six production Azure Kubernetes Service clusters, supporting more than 300 applications. My expertise includes Kubernetes, Docker, CI/CD automation, Terraform, Linux, monitoring, and cloud platforms such as AWS, Azure, and OCI.I focus on automating deployments, improving system reliability, strengthening infrastructure security, and building resilient platforms that scale with business needs."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <FiCode size={27} />
            </div>
            <h3 className="mt-6 text-2xl font-bold">How I work</h3>
            <p className="mt-5 leading-8 text-slate-400">
              I focus on reducing manual operations, improving deployment consistency and giving teams clear visibility into the health of their systems.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Automate repeatable operational work",
                "Build secure and controlled delivery workflows",
                "Design for visibility, recovery and scale",
                "Document infrastructure so teams can operate it",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="shrink-0 text-cyan-400" size={18} />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-slate-900/55 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical skills"
          title="Tools I use to ship and operate software"
          description="A practical stack covering containers, infrastructure, delivery automation, security, networking, databases and observability."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-white/10 bg-slate-950/70 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={24} />
                  </span>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured work"
          title="DevOps projects and case studies"
          description="Selected work demonstrating practical experience in Kubernetes, CI/CD, multi-cluster operations, monitoring and security."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 sm:p-8"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={25} />
                    </span>
                    <span className="font-mono text-sm text-slate-600">/ {project.number}</span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-slate-300">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-400" size={17} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-cyan-400/[0.07] px-3 py-1.5 text-xs text-cyan-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                    >
                      View case study
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional journey"
          title="Experience"
          description="DevOps & Cloud Engineer with 3+ years of experience building secure, scalable, and highly available infrastructure across cloud and on-premises environments. Skilled in Docker, Kubernetes, CI/CD automation, and Terraform, with hands-on expertise in AWS, Azure, and OCI. Contributed to ISO/IEC 27001:2022 ISMS implementation and surveillance audits by aligning cloud, Kubernetes, and infrastructure security controls with compliance requirements."
        />

        <div className="mt-14">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/70 p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                  <FiBriefcase size={24} />
                </span>
                <p className="mt-6 font-mono text-sm text-cyan-400">{item.period}</p>
                <h3 className="mt-3 text-2xl font-bold">{item.role}</h3>
                <p className="mt-2 text-slate-400">{item.company}</p>
              </div>

              <div>
                <p className="leading-8 text-slate-400">{item.summary}</p>
                <div className="mt-7 space-y-4">
                  {item.responsibilities.map((responsibility) => (
                    <div key={responsibility} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <p className="leading-7 text-slate-300">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.09] via-slate-900/60 to-blue-500/[0.06] px-7 py-14 text-center sm:px-12 sm:py-16">
          <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />
          <div className="relative">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
              <FiMail size={26} />
            </span>
            <p className="mt-7 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">Get in touch</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Build Reliable & Secure Systems Together
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Reach out for DevOps, cloud infrastructure, Kubernetes, CI/CD or platform engineering opportunities.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  profile.email
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                <FiMail size={18} />
                Send an email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500">
              <FiMapPin size={16} />
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="inline-flex items-center gap-2">
          <FiTool size={15} />
          Built with Next.js, TypeScript and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}
