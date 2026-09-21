/**
 * Central Portfolio Data Configuration for Md Arman Khan
 * 
 * NOTE TO USER:
 * You can edit all your personal information, contact info, bio, skills,
 * projects, and links directly in this single file.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  securityFocus: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPlaceholder: boolean;
  notes?: string;
}

export interface SkillItem {
  name: string;
  level: 'Focus Area' | 'Working Knowledge' | 'Learning';
  description?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface FocusArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface JourneyStep {
  phase: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Ongoing';
  highlight?: string;
}

export interface SocialLink {
  name: 'GitHub' | 'LinkedIn' | 'Telegram' | 'Email' | 'Phone';
  label: string;
  url: string; // If empty or "#", marked as Coming Soon
  status: 'Active' | 'Coming Soon';
  username?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Md Arman Khan",
    shortName: "Arman",
    logoInitial: "AK",
    title: "Jr Pentester",
    subTitle: "Junior Penetration Tester",
    organization: "Bytecapsule",
    location: "Bangladesh",
    statusBadge: "Active Security Researcher",
    availabilityNote: "Open for Vulnerability Assessments & Ethical Hacking Collaborations",
    phone: "01973488251",
    email: "mailfor.pentest.arman@gmail.com",
    cvFilename: "Md_Arman_Khan_Jr_Pentester_CV.pdf",
    githubUrl: "https://github.com/mailforpentestarman-boop",
    linkedinUrl: "https://www.linkedin.com/in/md-arman-khan-pentester",
    profileImage: "./profile.jpg",
    profileImageFallback: "./457557646_982351133576521_1025048881522781492_n.jpg",
    profileImageAlt: "Md Arman Khan - Junior Penetration Tester at Bytecapsule",
    
    heroIntro: "Junior Penetration Tester focused on web, API and network security, vulnerability assessment, and security research.",
    
    aboutBio: "I'm Md Arman Khan, a Junior Penetration Tester passionate about cybersecurity, ethical hacking and security research. I am focused on understanding how systems, applications, APIs and networks can be tested, secured and improved.",
    
    philosophy: "Security is not about breaking systems. It's about understanding how they can fail — and helping make them stronger.",
  },

  socials: [
    {
      name: "GitHub",
      label: "GitHub Profile",
      url: "https://github.com/mailforpentestarman-boop",
      status: "Active",
      username: "@mailforpentestarman-boop"
    },
    {
      name: "LinkedIn",
      label: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/md-arman-khan-pentester",
      status: "Active",
      username: "md-arman-khan-pentester"
    },
    {
      name: "Telegram",
      label: "Telegram Contact",
      url: "", // Leave empty for "Coming Soon" or insert "https://t.me/yourhandle"
      status: "Coming Soon",
      username: "@arman_pentest"
    }
  ] as SocialLink[],

  focusAreas: [
    {
      id: "web-sec",
      title: "Web Application Security",
      tagline: "OWASP-Aligned Penetration Testing",
      description: "Evaluating web applications to identify architectural weaknesses, authentication flaws, and client/server validation bypasses.",
      points: [
        "OWASP-based testing methodology",
        "Authentication testing & session security",
        "Authorization & privilege escalation testing",
        "Input validation & boundary checks",
        "Common web vulnerabilities (XSS, SQLi, CSRF, IDOR)"
      ]
    },
    {
      id: "api-sec",
      title: "API Security",
      tagline: "RESTful & Endpoint Hardening",
      description: "Auditing backend services and API gateways to ensure resilient access controls, parameter isolation, and strict token enforcement.",
      points: [
        "API endpoint discovery & attack surface mapping",
        "Authentication and authorization validation",
        "Parameter manipulation & payload testing",
        "Broken object level authorization (BOLA) tests",
        "API vulnerability assessment & reporting"
      ]
    },
    {
      id: "net-sec",
      title: "Network Security",
      tagline: "Infrastructure & Port Reconnaissance",
      description: "Analyzing network segments, open ports, perimeter firewalls, and service versions to prevent unauthorized entry vectors.",
      points: [
        "Network reconnaissance & topology discovery",
        "Service & banner enumeration",
        "Security configuration assessment",
        "Basic network penetration testing & protocol checks"
      ]
    },
    {
      id: "vuln-assess",
      title: "Vulnerability Assessment",
      tagline: "Systematic Risk Identification",
      description: "Executing structured scans and manual validation to catalog threats, assess severity, and provide actionable remediation guidance.",
      points: [
        "Vulnerability discovery & baseline scanning",
        "Manual verification & false-positive elimination",
        "Risk identification & CVSS severity evaluation",
        "Clear technical security documentation & reporting"
      ]
    },
    {
      id: "sec-research",
      title: "Security Research",
      tagline: "Continuous Threat Analysis & CTF",
      description: "Dedicated to continuous security education, tracking novel threat mechanisms, reproducing CVEs, and solving Capture The Flag labs.",
      points: [
        "Learning and analyzing new vulnerability classes",
        "Hands-on security tools research & scripting",
        "CTF-style learning & practice challenges",
        "Cybersecurity research & defense understanding"
      ]
    }
  ] as FocusArea[],

  skillCategories: [
    {
      title: "Offensive Security",
      subtitle: "Core penetration testing and vulnerability analysis disciplines",
      skills: [
        { name: "Penetration Testing", level: "Focus Area", description: "Structured methodology for finding and demonstrating exploitable weaknesses" },
        { name: "Web Security", level: "Focus Area", description: "In-depth review of web apps against OWASP Top 10 vulnerabilities" },
        { name: "API Security", level: "Focus Area", description: "Testing token validation, endpoints, rate limits, and access controls" },
        { name: "Vulnerability Assessment", level: "Focus Area", description: "Systematic auditing, flaw verification, and risk documentation" },
        { name: "Network Security", level: "Working Knowledge", description: "Port scanning, service fingerprinting, and packet analysis" },
        { name: "Reconnaissance", level: "Working Knowledge", description: "OSINT, subdomain discovery, and attack surface enumeration" }
      ]
    },
    {
      title: "Security Tools",
      subtitle: "Essential toolchain used for reconnaissance, interception, and assessment",
      skills: [
        { name: "Burp Suite", level: "Focus Area", description: "HTTP/S proxy interception, repeater, intruder, and vulnerability scanning" },
        { name: "Nmap", level: "Working Knowledge", description: "Network discovery, port probing, and NSE script vulnerability detection" },
        { name: "Wireshark", level: "Working Knowledge", description: "Packet inspection, traffic capture analysis, and protocol troubleshooting" },
        { name: "Linux", level: "Working Knowledge", description: "CLI navigation, bash scripting, file permissions, and environment setup" },
        { name: "Git / GitHub", level: "Working Knowledge", description: "Source version control, repository maintenance, and workflow tracking" }
      ]
    },
    {
      title: "Programming & Scripting",
      subtitle: "Languages applied to security automation, code review, and web mechanics",
      skills: [
        { name: "Python", level: "Working Knowledge", description: "Writing scripts for automation, parsing network data, and custom requests" },
        { name: "HTML", level: "Working Knowledge", description: "DOM inspection, form structures, and client-side code comprehension" },
        { name: "CSS", level: "Working Knowledge", description: "UI layout comprehension and styling inspection" },
        { name: "JavaScript", level: "Learning", description: "Understanding client-side execution, DOM-based XSS, and asynchronous requests" },
        { name: "Java", level: "Learning", description: "Object-oriented programming concepts and application architecture" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "lab-web-security",
      title: "Web Security Lab",
      category: "Hands-on Security Lab",
      description: "Dedicated testing environment deployed to evaluate and simulate OWASP Top 10 vulnerabilities including SQL injection, cross-site scripting (XSS), and broken authentication vectors.",
      securityFocus: ["OWASP Top 10", "SQL Injection", "XSS", "Session Security"],
      technologies: ["Burp Suite", "Linux", "Python", "Docker"],
      githubUrl: "https://github.com/mailforpentestarman-boop",
      isPlaceholder: false,
      notes: "Research & Practice Lab Environment"
    },
    {
      id: "lab-api-security",
      title: "API Security Testing Lab",
      category: "Endpoint Assessment Lab",
      description: "Custom sandbox lab designed to simulate REST API security testing, focusing on Broken Object Level Authorization (BOLA), token verification, and input fuzzing.",
      securityFocus: ["API Recon", "BOLA / IDOR", "Token Manipulation", "Parameter Fuzzing"],
      technologies: ["Postman", "Burp Suite", "Python", "JSON"],
      githubUrl: "https://github.com/mailforpentestarman-boop",
      isPlaceholder: false,
      notes: "API Security Simulation Project"
    },
    {
      id: "lab-network-security",
      title: "Network Security Lab",
      category: "Infrastructure Lab",
      description: "Isolated virtual network environment configured to practice service enumeration, firewall rule evaluation, port reconnaissance, and network packet telemetry.",
      securityFocus: ["Service Enumeration", "Port Scanning", "Packet Analysis", "Firewall Rules"],
      technologies: ["Nmap", "Wireshark", "Linux", "VirtualBox"],
      githubUrl: "https://github.com/mailforpentestarman-boop",
      isPlaceholder: false,
      notes: "Network Enumeration Practice"
    },
    {
      id: "tool-automation",
      title: "Security Automation Tool",
      category: "Custom Security Scripting",
      description: "Lightweight modular Python scripts created to automate repetitive reconnaissance tasks, parse port scan outputs, and verify HTTP security response headers.",
      securityFocus: ["Recon Automation", "Header Auditing", "Target Profiling", "Reporting"],
      technologies: ["Python", "Bash", "Git", "Linux"],
      githubUrl: "https://github.com/mailforpentestarman-boop",
      isPlaceholder: false,
      notes: "Security Automation Prototype"
    },
    {
      id: "research-project",
      title: "Cybersecurity Research Project",
      category: "Security Research & Documentation",
      description: "Documented write-ups and analysis analyzing contemporary vulnerability advisories, vulnerability root causes, remediation validation, and lab reproductions.",
      securityFocus: ["CVE Root Cause", "Mitigation Strategies", "Technical Reporting", "CTF Practice"],
      technologies: ["Markdown", "Git", "Burp Suite", "Linux"],
      githubUrl: "https://github.com/mailforpentestarman-boop",
      isPlaceholder: false,
      notes: "Ongoing Security Research"
    }
  ] as ProjectItem[],

  journeyTimeline: [
    {
      phase: "Foundation",
      title: "Diploma in Computer Science & Technology",
      description: "Built fundamental knowledge in computer systems, operating system architectures, data structures, and computer networking principles.",
      status: "Completed",
      highlight: "Academic Foundation"
    },
    {
      phase: "Exploration",
      title: "Cybersecurity Learning",
      description: "Immersed in information security principles, threat models, cryptography basics, and ethical hacking protocols.",
      status: "Completed",
      highlight: "Security Fundamentals"
    },
    {
      phase: "Specialization",
      title: "Penetration Testing",
      description: "Focused on offensive security methods, vulnerability identification, scoping, ethical disclosure rules, and testing frameworks.",
      status: "In Progress",
      highlight: "Methodology & Hands-on"
    },
    {
      phase: "Deep Dive",
      title: "Web & API Security",
      description: "Intensive focus on web app mechanics, API endpoint testing, OWASP standards, and practical testing with Burp Suite.",
      status: "In Progress",
      highlight: "Core Assessment Specialization"
    },
    {
      phase: "Investigation",
      title: "Security Research",
      description: "Reproducing documented vulnerabilities in controlled lab setups, exploring modern security tools, and solving CTF challenges.",
      status: "Ongoing",
      highlight: "Hands-on CTF & Labs"
    },
    {
      phase: "Commitment",
      title: "Continuous Learning",
      description: "Constantly expanding knowledge with evolving threat landscapes, defensive engineering principles, and emerging attack vectors.",
      status: "Ongoing",
      highlight: "Lifelong Growth"
    }
  ] as JourneyStep[],

  technologiesWall: [
    { name: "Python", category: "Scripting / Automation", type: "code" },
    { name: "Burp Suite", category: "Web Interception Proxy", type: "tool" },
    { name: "Nmap", category: "Network Mapper & Scanner", type: "tool" },
    { name: "Wireshark", category: "Packet & Protocol Analyzer", type: "tool" },
    { name: "Linux", category: "Primary Security OS", type: "os" },
    { name: "Git", category: "Version Control System", type: "dev" },
    { name: "GitHub", category: "Code Repository & Collab", type: "dev" },
    { name: "Java", category: "Application Logic", type: "code" },
    { name: "HTML", category: "Web Markup Structure", type: "web" },
    { name: "CSS", category: "Web Presentation Layer", type: "web" },
    { name: "JavaScript", category: "Client-side Scripting", type: "code" },
  ],

  metaDetails: {
    year: 2026,
    copyrightNotice: "Copyright © 2026 Md Arman Khan. All rights reserved.",
    tagline: "Built with passion for cybersecurity.",
    hostedPlatform: "GitHub Pages (Static, Fast & Secure)"
  }
};
