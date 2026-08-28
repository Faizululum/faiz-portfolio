"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const COOLDOWN_MS = 60_000;
const COOLDOWN_STORAGE_KEY = "contact_last_submit";

type Status = "idle" | "loading" | "success" | "error" | "cooldown";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot (spam)
    const honeypot = formData.get("company_website");
    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    // Cooldown client-side
    const lastSubmit = Number(localStorage.getItem(COOLDOWN_STORAGE_KEY) ?? 0);
    const now = Date.now();
    if (now - lastSubmit < COOLDOWN_MS) {
      setStatus("cooldown");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        { publicKey: PUBLIC_KEY }
      );

      localStorage.setItem(COOLDOWN_STORAGE_KEY, String(now));
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="mb-12 text-center flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Get In Touch
        </p>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Contact <span className="text-primary">Information</span>
          </h2>
        </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
        
        {/* Info Contact */}
        <div className="flex flex-col">
          <p className="text-muted text-base leading-relaxed mb-10 max-w-md">
            Feel free to send a message via the form or contact me directly through email and social media.
          </p>

          <div className="flex flex-col gap-8 mb-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-muted">
                <Mail size={20} className="text-muted" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-muted uppercase mb-1">Email</p>
                <p className="text-sm sm:text-base font-medium">faizululum25@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-muted">
                <MapPin size={20} className="text-muted" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-muted uppercase mb-1">Location</p>
                <p className="text-sm sm:text-base font-medium">Gresik, Indonesia</p>
              </div>
            </div>
          </div>

          <hr className="border-border mb-8 max-w-md" />

          <div>
            <p className="text-xs font-semibold tracking-wider text-muted uppercase mb-4">Follow Me</p>
            <div className="flex gap-4">
              <Link href="https://github.com/Faizululum" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:border-primary hover:text-primary">
                <FaGithub size={18} />
              </Link>
              <Link href="https://id.linkedin.com/in/muhammad-faizul-ulum-3475a3305/in" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:border-primary hover:text-primary">
                <FaLinkedinIn size={18} />
              </Link>
              <Link href="https://instagram.com/faizululum_" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:border-primary hover:text-primary">
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Form Contact */}
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Honeypot */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm
                           text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm
                           text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm
                           text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="glow-primary mt-2 flex w-full sm:w-auto items-center justify-center gap-2 rounded-full
                         bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground cursor-pointer
                         transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>

            {/* Feedback */}
            {status === "success" && <p className="text-sm font-medium text-emerald-500">Pesan berhasil dikirim!</p>}
            {status === "error" && <p className="text-sm font-medium text-red-500">Gagal mengirim pesan. Silakan coba lagi.</p>}
            {status === "cooldown" && <p className="text-sm font-medium text-amber-500">Tunggu sebentar sebelum mengirim pesan lagi.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}