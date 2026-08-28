import Link from "next/link";
import { Mail } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "My Work" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://github.com/Faizululum", icon: FaGithub, label: "GitHub" },
  {
    href: "https://id.linkedin.com/in/muhammad-faizul-ulum-3475a3305/in",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/faizululum_",
    icon: FaInstagram,
    label: "Instagram",
  },
  { href: "mailto:faizululum25@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-5 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Brand */}
          <div>
            <Link
              href="/#home"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Image src="/img/logo-tr.png" alt="Logo" width={32} height={32} />
              <div>
                Faiz<span className="text-primary">Dev</span>
              </div>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Fullstack Web Developer & UI/UX enthusiast.
            </p>
          </div>

          {/* Quick links */}
          {/* <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Social */}
          <div className="flex flex-col md:items-end justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Let&apos;s Connect
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary
                             text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_1rem_var(--primary)]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-border pt-4 sm:flex-row">
          <p className="text-xs text-muted">
            Copyright &copy; {new Date().getFullYear()} by Faizul. All Rights
            Reserved.
          </p>

          {/* <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground
                       transition-transform hover:scale-110"
          >
            <ArrowUp size={18} />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
