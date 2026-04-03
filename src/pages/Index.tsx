import { Shield, Code, Monitor, Mail, ExternalLink, ChevronDown, Terminal, Lock, Globe, Users, FileText, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Services", "Contact"];

const SKILLS = [
  { category: "Cybersecurity", items: ["Network Security", "Vulnerability Assessment", "Security Auditing", "Threat Analysis", "Ethical Hacking Fundamentals"] },
  { category: "Web Development", items: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Accessibility"] },
  { category: "IT & Office", items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook", "Computer Troubleshooting"] },
  { category: "Soft Skills", items: ["Customer Service", "Communication", "Problem Solving", "Team Collaboration", "Technical Support"] },
];

const SERVICES = [
  { icon: Shield, title: "Security Consulting", desc: "Basic security assessments and recommendations to protect your digital assets." },
  { icon: Code, title: "Web Development", desc: "Clean, responsive websites built with HTML, CSS, and JavaScript." },
  { icon: Users, title: "Customer Support", desc: "Professional customer service and technical support solutions." },
  { icon: FileText, title: "IT Training", desc: "Microsoft Office training and basic computer skills education." },
];

const TerminalText = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className="font-mono text-primary">
      {displayed}
      <span className="animate-terminal-blink">▊</span>
    </span>
  );
};

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <span className="font-mono text-lg font-bold text-primary">&gt;_portfolio</span>
          <div className="hidden gap-6 md:flex">
            {NAV_LINKS.map((l) => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {l}
              </button>
            ))}
          </div>
          <Button size="sm" onClick={() => scrollTo("contact")}>
            Hire Me
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 border-primary/30 font-mono text-primary">
              <Lock className="mr-1 h-3 w-3" /> Cybersecurity Student
            </Badge>
            <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Securing the
              <br />
              <span className="text-primary">Digital World</span>
            </h1>
            <div className="mb-8 rounded-lg border border-border bg-card p-4 font-mono text-sm">
              <span className="text-muted-foreground">$ whoami</span>
              <br />
              <TerminalText text="Cybersecurity student | Web developer | IT specialist" />
            </div>
            <p className="mb-8 max-w-xl text-lg text-muted-foreground">
              Passionate about cybersecurity with hands-on web development skills and a strong foundation in IT. Combining technical expertise with excellent customer service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo("contact")}>
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("about")}>
                Learn More <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 font-mono text-primary">About</Badge>
              <h2 className="mb-6 text-4xl font-bold">
                Building Secure &<br />
                <span className="text-primary">Beautiful</span> Solutions
              </h2>
              <p className="mb-4 text-muted-foreground">
                As a cybersecurity student, I'm dedicated to understanding and combating digital threats. My journey into tech started with web development — building websites with HTML, CSS, and JavaScript — which gave me a solid understanding of how the web works and where vulnerabilities can arise.
              </p>
              <p className="text-muted-foreground">
                With extensive experience in customer service and IT fundamentals including Microsoft Office, I bridge the gap between technical expertise and clear communication. I believe security should be accessible to everyone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Cybersecurity", value: "Student" },
                { icon: Globe, label: "Web Dev", value: "HTML/CSS/JS" },
                { icon: Monitor, label: "IT Skills", value: "MS Office" },
                { icon: Users, label: "Customer", value: "Representative" },
              ].map((stat) => (
                <Card key={stat.label} className="border-border bg-card">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <stat.icon className="mb-3 h-8 w-8 text-primary" />
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="mt-1 font-mono text-sm font-semibold">{stat.value}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border bg-card/50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 font-mono text-primary">Skills</Badge>
            <h2 className="text-4xl font-bold">Technical Arsenal</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((group) => (
              <Card key={group.category} className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-mono text-sm font-semibold text-primary">{`// ${group.category}`}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Terminal className="h-3 w-3 text-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 font-mono text-primary">Services</Badge>
            <h2 className="text-4xl font-bold">What I Offer</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <Card key={service.title} className="group border-border bg-card transition-colors hover:border-primary/40">
                <CardContent className="flex gap-5 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-card/50 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 font-mono text-primary">Contact</Badge>
            <h2 className="mb-4 text-4xl font-bold">Let's Work Together</h2>
            <p className="mb-8 text-muted-foreground">
              Interested in collaborating or have a project in mind? I'd love to hear from you.
            </p>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-6 rounded-lg bg-background p-4 font-mono text-left text-sm text-muted-foreground">
                <span className="text-primary">const</span> contact = {"{"}<br />
                &nbsp;&nbsp;name: <span className="text-primary">"Shuaib Abubakar Sani"</span>,<br />
                &nbsp;&nbsp;email: <span className="text-primary">"asaameey@gmail.com"</span>,<br />
                &nbsp;&nbsp;github: <span className="text-primary">"github.com/asaameey"</span>,<br />
                &nbsp;&nbsp;availability: <span className="text-primary">"Open to opportunities"</span><br />
                {"}"};
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:asaameey@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/asaameey" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/shuaib-abubakar-sani-652508336/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span className="font-mono text-sm text-muted-foreground">&gt;_ Built with passion & purpose</span>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
