"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, inputBase } from "./form-fields";
import { CONTACT_EMAIL } from "@/content/site";
import { cn } from "@/lib/utils";

const ENQUIRY_TYPES = [
  "Student Support",
  "Account or Billing",
  "Institutional Partnership",
  "Student-Body Partnership",
  "General Enquiry",
] as const;

export type EnquiryVariant = "contact" | "institution" | "student-body";

interface FormValues {
  name: string;
  email: string;
  enquiryType: string;
  organisation: string;
  role: string;
  studentPopulation: string;
  areasOfInterest: string;
  message: string;
  website: string; // honeypot
}

const initialValues: FormValues = {
  name: "",
  email: "",
  enquiryType: "",
  organisation: "",
  role: "",
  studentPopulation: "",
  areasOfInterest: "",
  message: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(variant: EnquiryVariant, values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (variant === "contact" && !values.enquiryType)
    errors.enquiryType = "Please choose an enquiry type.";
  if (variant === "institution") {
    if (values.organisation.trim().length < 2)
      errors.organisation = "Please enter your institution's name.";
    if (values.role.trim().length < 2) errors.role = "Please enter your role.";
  }
  if (variant === "student-body" && values.organisation.trim().length < 2)
    errors.organisation = "Please enter your organisation's name.";
  if (values.message.trim().length < 10)
    errors.message = "Please enter a message of at least 10 characters.";
  if (values.message.length > 2000)
    errors.message = "Please keep your message under 2,000 characters.";
  return errors;
}

const VARIANT_LABEL: Record<EnquiryVariant, string> = {
  contact: "General",
  institution: "Institution",
  "student-body": "Student Body",
};

/**
 * Static-site enquiry flow: the validated details are handed to the visitor's
 * own email app, pre-addressed to the team inbox, so submissions work with no
 * backend. When a backend is re-integrated, replace openMailDraft with a POST
 * to the enquiry API endpoint again.
 */
function openMailDraft(variant: EnquiryVariant, values: FormValues) {
  const detailLines = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    variant === "contact" ? `Enquiry type: ${values.enquiryType}` : "",
    values.organisation.trim() ? `Organisation: ${values.organisation.trim()}` : "",
    values.role.trim() ? `Role: ${values.role.trim()}` : "",
    values.studentPopulation.trim()
      ? `Student population / membership: ${values.studentPopulation.trim()}`
      : "",
    values.areasOfInterest.trim()
      ? `Areas of interest: ${values.areasOfInterest.trim()}`
      : "",
  ].filter(Boolean);

  const body = [...detailLines, "", values.message.trim()].join("\n");
  const subject = `[OneCampus ${VARIANT_LABEL[variant]}] Enquiry from ${values.name.trim()}`;
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

/**
 * Shared enquiry form for the contact, institutional, and student-body pages.
 * Validation runs in the browser; on success the visitor's email app opens
 * with the enquiry pre-filled for the team inbox.
 */
export function EnquiryForm({ variant }: { variant: EnquiryVariant }) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (key: keyof FormValues) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(variant, values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setStatus("submitting");
    // Honeypot filled: pretend success without opening a mail draft.
    if (values.website.trim() !== "") {
      setStatus("success");
      return;
    }
    // Give the submitting state one frame so the button feedback is visible.
    window.setTimeout(() => {
      openMailDraft(variant, values);
      setStatus("success");
    }, 400);
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-border bg-card p-8 text-center"
        role="status"
      >
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-success-soft">
          <CheckCircle2 className="size-7 text-success" aria-hidden="true" />
        </span>
        <h2 className="title-card mt-5">Your enquiry is ready to send.</h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Your email app should have opened with your message prepared for{" "}
          <strong>{CONTACT_EMAIL}</strong> — just press send. If nothing opened,
          email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-primary hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialValues);
            setStatus("idle");
          }}
          className="btn-secondary mt-6"
        >
          Write Another Message
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-[0_6px_28px_rgba(16,35,79,0.05)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="enq-name" error={errors.name} className="sm:col-span-1">
          <input
            id="enq-name"
            type="text"
            value={values.name}
            onChange={set("name")}
            autoComplete="name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "enq-name-error" : undefined}
            className={inputBase}
          />
        </Field>

        <Field label="Email address" htmlFor="enq-email" error={errors.email}>
          <input
            id="enq-email"
            type="email"
            value={values.email}
            onChange={set("email")}
            autoComplete="email"
            maxLength={255}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "enq-email-error" : undefined}
            className={inputBase}
          />
        </Field>

        {variant === "contact" && (
          <Field
            label="Enquiry type"
            htmlFor="enq-type"
            error={errors.enquiryType}
            className="sm:col-span-2"
          >
            <select
              id="enq-type"
              value={values.enquiryType}
              onChange={set("enquiryType")}
              aria-invalid={Boolean(errors.enquiryType)}
              aria-describedby={errors.enquiryType ? "enq-type-error" : undefined}
              className={cn(inputBase, "appearance-none pr-10")}
            >
              <option value="" disabled>
                Select an enquiry type…
              </option>
              {ENQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        )}

        {variant !== "contact" && (
          <Field
            label={variant === "institution" ? "Institution" : "Organisation name"}
            htmlFor="enq-org"
            error={errors.organisation}
          >
            <input
              id="enq-org"
              type="text"
              value={values.organisation}
              onChange={set("organisation")}
              autoComplete="organization"
              maxLength={160}
              aria-invalid={Boolean(errors.organisation)}
              aria-describedby={errors.organisation ? "enq-org-error" : undefined}
              className={inputBase}
            />
          </Field>
        )}

        {variant !== "contact" && (
          <Field label={variant === "institution" ? "Your role" : "Position or role"} htmlFor="enq-role" error={errors.role}>
            <input
              id="enq-role"
              type="text"
              value={values.role}
              onChange={set("role")}
              autoComplete="organization-title"
              maxLength={120}
              aria-invalid={Boolean(errors.role)}
              aria-describedby={errors.role ? "enq-role-error" : undefined}
              className={inputBase}
            />
          </Field>
        )}

        {variant !== "contact" && (
          <Field
            label={variant === "institution" ? "Approximate student population (optional)" : "Estimated membership (optional)"}
            htmlFor="enq-pop"
            hint="For example: 1,000–5,000"
            className="sm:col-span-2"
          >
            <input
              id="enq-pop"
              type="text"
              value={values.studentPopulation}
              onChange={set("studentPopulation")}
              maxLength={80}
              className={inputBase}
            />
          </Field>
        )}

        {variant !== "contact" && (
          <Field
            label="Areas of interest (optional)"
            htmlFor="enq-areas"
            hint="For example: collaboration, study planning, engagement."
            className="sm:col-span-2"
          >
            <input
              id="enq-areas"
              type="text"
              value={values.areasOfInterest}
              onChange={set("areasOfInterest")}
              maxLength={300}
              className={inputBase}
            />
          </Field>
        )}

        <Field
          label="Message"
          htmlFor="enq-message"
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id="enq-message"
            value={values.message}
            onChange={set("message")}
            rows={6}
            minLength={10}
            maxLength={2000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "enq-message-error" : undefined}
            className={cn(inputBase, "min-h-[140px] py-3")}
          />
        </Field>
      </div>

      {/* Honeypot: hidden from humans, catches naive bots. */}
      <div className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={set("website")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {submitting
          ? "Preparing Your Message…"
          : variant === "contact"
            ? "Send Message"
            : variant === "institution"
              ? "Request a Demo"
              : "Send Partnership Enquiry"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Sending opens your own email app with the details pre-filled — nothing is
        stored on this website. By sending this message you agree that Edvantae
        Digital Hub Limited may process the details you provide in order to
        respond to your enquiry.
      </p>
    </form>
  );
}
