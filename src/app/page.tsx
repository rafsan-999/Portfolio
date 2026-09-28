"use client";

import Image from "next/image";
import { useState } from "react";
import type { IconType } from "react-icons";

import {
  FiActivity,
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiCloud,
  FiCode,
  FiDatabase,
  FiDownload,
  FiDroplet,
  FiExternalLink,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMonitor,
  FiMoon,
  FiServer,
  FiShield,
  FiSun,
  FiTool,
  FiX,
  FiZap,
} from "react-icons/fi";


type Theme = "dark" | "light" | "ocean" | "purple" | "system";

const themes: Array<{
  value: Theme;
  label: string;
  icon: IconType;
}> = [
  { value: "dark", label: "Dark", icon: FiMoon },
  { value: "light", label: "Light", icon: FiSun },
  { value: "ocean", label: "Ocean", icon: FiDroplet },
  { value: "purple", label: "Purple", icon: FiZap },
  { value: "system", label: "System", icon: FiMonitor },
];

const profile = {
  name: "MD. RAFSAN JAMIL",
  initials: "RJ",
  image: "/profile.png",
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
  { value: "Kubernetes", label: "Container Orchestration" },
  { value: "Docker", label: "Container platforms" },
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
      "Building reliable Kubernetes and Docker platforms for Development, UAT and Production Grade workloads.",
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
    responsibilities: [
      "Manage Kubernetes workloads across Development, UAT, and Production Grade environments in on-premises clusters, Azure Kubernetes Service (AKS), and Amazon Elastic Kubernetes Service (EKS).",
      "Manage and support secure, scalable, and highly available On-prem + Cloud infrastructure across Microsoft Azure, AWS, and Oracle Cloud Infrastructure (OCI)",
      "Build and maintain CI/CD pipelines using Azure DevOps, Argo CD and GitHub Actions.",
      "Containerise applications using Docker, multi-stage builds, image optimisation, vulnerability scanning, and production-focused build practices.",
      "Configure and maintain NGINX & Apache reverse proxies, Kubernetes ingress controllers, Gateway API, load balancers, DNS records, and TLS/SSL certificates.",
      "Investigate and resolve deployment, networking, Kubernetes, cloud infrastructure, database, and application-level incidents.",
      "Optimise MSSQL, PostgreSQL, and MySQL, databases through resource tuning, connection management, and performance monitoring",
      "Design and maintain automated database backup processes, including backup validation, automated backups with scheduled retention policies.",
      "For Monitoring Logging I used Prometheus, Grafana, Elasticsearch, and Kibana for application monitoring, metrics visualisation, centralised log management, and incident analysis.",
      "Played a key role in ISO/IEC 27001 ISMS implementation and the successful Year-1 surveillance audit across Kubernetes, Azure cloud services, NGINX Ingress, and on-premises infrastructure",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    return savedTheme && themes.some((item) => item.value === savedTheme) ? savedTheme : "dark";
  });
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    setThemeMenuOpen(false);
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <main
      data-theme={theme}
      className="portfolio-theme min-h-screen overflow-x-hidden"
    >
      <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

      <Header
        open={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen((current) => !current)}
        onClose={() => setMobileMenuOpen(false)}
        theme={theme}
        onThemeChange={changeTheme}
        themeMenuOpen={themeMenuOpen}
        setThemeMenuOpen={setThemeMenuOpen}
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
  theme,
  onThemeChange,
  themeMenuOpen,
  setThemeMenuOpen,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  themeMenuOpen: boolean;
  setThemeMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="theme-header fixed inset-x-0 top-1 z-50 border-b backdrop-blur-xl">
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
              className="theme-nav-link text-sm transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="theme-nav-link text-sm transition"
          >
            Contact
          </a>
          <ThemeSelector
            theme={theme}
            onThemeChange={onThemeChange}
            open={themeMenuOpen}
            setOpen={setThemeMenuOpen}
          />
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
            <div className="mt-2">
              <ThemeSelector
                theme={theme}
                onThemeChange={onThemeChange}
                open={themeMenuOpen}
                setOpen={setThemeMenuOpen}
                mobile
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


function ThemeSelector({
  theme,
  onThemeChange,
  open,
  setOpen,
  mobile = false,
}: {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  mobile?: boolean;
}) {
  const selectedTheme =
    themes.find((item) => item.value === theme) ?? themes[0];
  const SelectedIcon = selectedTheme.icon;

  return (
    <div className={`relative ${mobile ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Select website theme"
        aria-expanded={open}
        className={`theme-control inline-flex h-10 items-center justify-center gap-2 rounded-xl border px-3 text-sm transition hover:-translate-y-0.5 ${
          mobile ? "w-full" : ""
        }`}
      >
        <SelectedIcon size={17} />
        <span>{selectedTheme.label}</span>
        <FiChevronDown
          size={15}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={`theme-menu z-[80] w-44 overflow-hidden rounded-xl border p-1.5 shadow-2xl ${
            mobile
              ? "mt-2 w-full"
              : "absolute right-0 top-12"
          }`}
        >
          {themes.map((item) => {
            const Icon = item.icon;
            const selected = theme === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => onThemeChange(item.value)}
                className="theme-menu-item flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition"
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} />
                  {item.label}
                </span>
                {selected && <FiCheck size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-24 overflow-hidden px-5 pb-12 pt-[86px] sm:px-6 sm:pb-14"
    >
      <div className="page-grid absolute inset-0 opacity-40" />

      <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-[5%] right-[8%] h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 lg:grid-cols-[0.88fr_1.12fr]">
        {/* Left content */}
        <div className="relative z-20 animate-rise lg:-mt-14">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            Available for DevOps & Cloud opportunities
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.38em] text-cyan-400 sm:text-sm">
            DevOps • Cloud • SRE
          </p>

          <h1 className="mt-6 max-w-3xl text-2xl font-black leading-tight tracking-tight">
            I Engineer Systems
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Behind Reliable Products.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            I build Kubernetes platforms, automate delivery pipelines and
            operate secure cloud infrastructure across Azure, AWS, OCI and
            on-premises environments.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(34,211,238,0.3)]"
            >
              Explore my infrastructure
              <FiArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-3.5 font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FiDownload size={18} />
              Resume
            </a>
          </div>

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

            <span className="ml-1 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
              <FiMapPin size={17} />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Right architecture visual */}
        <InfrastructureOrbit />
      </div>

      <DeploymentTicker />
    </section>
  );
}
function InfrastructureOrbit() {
  return (
    <div className="relative mx-auto -mt-14 h-[308px] w-full max-w-[480px] animate-rise-delayed sm:h-[480px] lg:-mt-52">
      <div className="infra-orbit-scale absolute left-[calc(50%-240px)] top-[calc(50%-220px)] h-[440px] w-[480px]">
        {/* Background illumination */}
        <div className="absolute left-1/2 top-1/2 h-[335px] w-[335px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[90px]" />

        {/* Outer orbit */}
        <div className="orbit-slow absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15">
          <OrbitNode
            className="-left-5 top-[42%]"
            icon={FiLayers}
            label="Kubernetes"
            accent="cyan"
          />

          <OrbitNode
            className="right-[3%] top-[9%]"
            icon={FiCloud}
            label="Cloud"
            accent="blue"
          />

          <OrbitNode
            className="bottom-[4%] right-[11%]"
            icon={FiActivity}
            label="Observability"
            accent="emerald"
          />
        </div>

        {/* Middle orbit */}
        <div className="orbit-reverse absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20">
          <OrbitNode
            className="-right-8 top-[38%]"
            icon={FiGitBranch}
            label="CI/CD"
            accent="violet"
          />

          <OrbitNode
            className="bottom-[4%] left-[8%]"
            icon={FiShield}
            label="DevSecOps"
            accent="orange"
          />

          <OrbitNode
            className="left-[2%] top-[5%]"
            icon={FiServer}
            label="Infrastructure"
            accent="cyan"
          />
        </div>

        {/* Connecting rays */}
        <div className="absolute left-1/2 top-1/2 h-px w-[75%] -translate-x-1/2 rotate-[25deg] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -rotate-[35deg] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 rotate-[90deg] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />

        {/* Central profile node */}
        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-[calc(50%+20px)]">
          <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="absolute -inset-5 animate-pulse rounded-full border border-cyan-400/25" />

          <div className="relative w-[230px] overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[var(--surface)]/90 p-5 text-center shadow-[0_35px_100px_rgba(8,145,178,0.2)] backdrop-blur-2xl">
            <div className="relative mx-auto h-32 w-32">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-60 blur-md" />

              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-cyan-400/50">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority
                  quality={100}
                  sizes="256px"
                  className="object-cover object-top"
                />
              </div>

              <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-4 border-[var(--surface)] bg-emerald-400" />
            </div>

            <p className="mt-4 text-base font-bold">{profile.name}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              DevOps & Cloud Engineer
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] py-2 text-xs text-emerald-400">
              <FiCheckCircle size={14} />
              Systems operational
            </div>
          </div>
        </div>

        {/* Floating metrics */}
        <FloatingMetric
          className="left-0 top-[6%]"
          value="6+"
          label="Production clusters"
        />

        <FloatingMetric
          className="bottom-[5%] left-[2%]"
          value="300+"
          label="Applications"
        />

        <FloatingMetric
          className="right-0 top-[48%]"
          value="99.9%"
          label="Reliability"
        />
      </div>
    </div>
  );
}
function OrbitNode({
  className,
  icon: Icon,
  label,
  accent,
}: {
  className: string;
  icon: IconType;
  label: string;
  accent: "cyan" | "blue" | "emerald" | "violet" | "orange";
}) {
  const accents = {
    cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-400",
    blue: "border-blue-400/30 bg-blue-400/10 text-blue-400",
    emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    violet: "border-violet-400/30 bg-violet-400/10 text-violet-400",
    orange: "border-orange-400/30 bg-orange-400/10 text-orange-400",
  };

  return (
    <div
      className={`absolute ${className} flex items-center gap-2 rounded-xl border px-3 py-2 shadow-xl backdrop-blur-xl ${accents[accent]}`}
    >
      <Icon size={17} />
      <span className="text-xs font-semibold">{label}</span>
    </div>
  );
}

function FloatingMetric({
  className,
  value,
  label,
}: {
  className: string;
  value: string;
  label: string;
}) {
  return (
    <div
      className={`absolute z-40 ${className} rounded-2xl border border-[var(--border)] bg-[var(--surface)]/85 px-4 py-3 shadow-2xl backdrop-blur-xl`}
    >
      <p className="text-lg font-bold text-cyan-400">{value}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--muted)]">
        {label}
      </p>
    </div>
  );
}

function DeploymentTicker() {
  const entries = [
    "AKS production healthy",
    "Docker images scanned",
    "Terraform state synchronized",
    "Database backups verified",
    "CI/CD deployment successful",
  ];

  return (
    <div className="relative mx-auto mt-10 max-w-7xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] backdrop-blur-xl lg:-mt-24">
      <div className="flex min-w-max animate-ticker items-center">
        {[...entries, ...entries].map((entry, index) => (
          <div
            key={`${entry}-${index}`}
            className="flex items-center gap-3 border-r border-[var(--border)] px-7 py-3 text-xs text-[var(--muted)]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            {entry}
          </div>
        ))}
      </div>
    </div>
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
    <section id="about" className="scroll-mt-24 px-5 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title="DevOps & Cloud Engineer"
          description="Hi, This is Md. Rafsan Jamil, I am a DevOps and Cloud Engineer with 3+ years of experience building secure, scalable, reliable, and highly available infrastructure across cloud and on-premises environments.I have managed and configured up to six production Azure Kubernetes Service clusters, supporting more than 300 applications. My expertise includes Kubernetes, Docker, CI/CD automation, Terraform, Linux, monitoring, and cloud platforms such as AWS, Azure, and OCI.I focus on automating deployments, improving system reliability, strengthening infrastructure security, and building resilient platforms that scale with business needs."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <FiCode size={27} />
            </div>
            <h3 className="mt-6 text-2xl font-bold">How I work</h3>
            <p className="mt-5 leading-8 text-slate-400">
              I focus on building secure, reliable, and scalable infrastructure that reduces manual effort, improves deployment consistency, and gives teams clear visibility into system health.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Manage multiple production-grade AKS clusters",
                "Build secure, controlled, & repeatable CI/CD workflows",
                "Automate repetitive tasks to reduce errors & improve efficiency",
                "Design systems for observability, high availability, and scalability",
                "Document clearly for confident operations and troubleshooting.",
                "Continuously improve system performance, security, reliability",
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
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14"
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
    <section id="projects" className="scroll-mt-24 px-5 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured work"
          title="DevOps Projects and Case Studies"
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

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300"
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
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional journey"
          title="3+ Years of Experience"
          description="DevOps & Cloud Engineer with 3+ years of experience building secure, scalable, and highly available infrastructure across cloud and on-premises environments. Skilled in Docker, Kubernetes, CI/CD automation, and Terraform, with hands-on expertise in AWS, Azure, and OCI. Contributed to ISO/IEC 27001:2022 ISMS implementation and surveillance audits by aligning cloud, Kubernetes, and infrastructure security controls with compliance requirements."
        />

        <div className="mt-14">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="grid items-start gap-8 rounded-3xl border border-white/10 bg-slate-950/70 p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10"
            >
              <div className="self-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                  <FiBriefcase size={24} />
                </span>

                <p className="mt-6 font-mono text-sm text-cyan-400">
                  {item.period}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {item.role}
                </h3>

                <p className="mt-2 text-slate-400">
                  {item.company}
                </p>
              </div>

              <div className="space-y-4">
                {item.responsibilities.map((responsibility) => (
                  <div
                    key={responsibility}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                    <p className="leading-7 text-slate-300">
                      {responsibility}
                    </p>
                  </div>
                ))}
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
    <section id="contact" className="scroll-mt-24 px-5 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.09] via-slate-900/60 to-blue-500/[0.06] px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />
          <div className="relative">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
              <FiMail size={22} />
            </span>
            <p className="mt-5 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">Get in touch</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-xl font-bold tracking-tight sm:text-2xl">
              Let&apos;s Build Reliable & Secure Systems Together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Reach out for DevOps, cloud infrastructure, Kubernetes, CI/CD or platform engineering opportunities.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  profile.email
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                <FiMail size={18} />
                Send an email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 font-semibold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500">
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
      <h2 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}