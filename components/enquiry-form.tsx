"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconCheck, IconSend } from "@tabler/icons-react";

type EnquiryFormProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function EnquiryForm({
  title = "Send an enquiry",
  description = "Tell us how we can help. Our office will get back to you shortly.",
  className = "",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    // Front-end only for now — wire to email/API later
    window.setTimeout(() => {
      form.reset();
      setStatus("success");
    }, 700);
  }

  return (
    <div className={className} id="enquiry">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
          Enquiry
        </p>
        <h2 className="text-2xl font-semibold text-[var(--brand-navy)] md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--muted-foreground)]">
          {description}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--brand-gold)]/30 bg-white/80 p-8"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-navy)] text-white">
              <IconCheck className="h-6 w-6" stroke={2} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
                Enquiry received
              </h3>
              <p className="mt-2 text-[var(--muted-foreground)]">
                Thank you. Our team will review your message and respond soon.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm font-semibold text-[var(--brand-navy)] underline-offset-4 hover:underline"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" htmlFor="enquiry-name">
                <input
                  id="enquiry-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="field-input"
                />
              </Field>
              <Field label="Phone number" htmlFor="enquiry-phone">
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="field-input"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" htmlFor="enquiry-email">
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="field-input"
                />
              </Field>
              <Field label="Enquiry type" htmlFor="enquiry-type">
                <select
                  id="enquiry-type"
                  name="type"
                  required
                  defaultValue="admission"
                  className="field-input"
                >
                  <option value="admission">Admission</option>
                  <option value="general">General enquiry</option>
                  <option value="events">Events & programmes</option>
                  <option value="documents">Certificates & documents</option>
                  <option value="other">Other</option>
                </select>
              </Field>
            </div>

            <Field label="Student name (optional)" htmlFor="enquiry-student">
              <input
                id="enquiry-student"
                name="student"
                placeholder="If enquiring for a student"
                className="field-input"
              />
            </Field>

            <Field label="Message" htmlFor="enquiry-message">
              <textarea
                id="enquiry-message"
                name="message"
                required
                rows={5}
                placeholder="Share a few details about your enquiry…"
                className="field-input resize-y min-h-[120px]"
              />
            </Field>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-ink)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending…" : "Submit enquiry"}
              <IconSend className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block space-y-2">
      <span className="text-sm font-medium text-[var(--brand-navy)]">
        {label}
      </span>
      {children}
    </label>
  );
}
