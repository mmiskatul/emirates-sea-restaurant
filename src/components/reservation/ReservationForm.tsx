"use client";

import { useMemo, useState } from "react";
import { Check, Mail, Phone } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/**
 * There is no reservation backend, so this form never claims a table is booked.
 * It composes the request and hands it to a channel a human actually reads:
 * WhatsApp if `site.whatsapp` is set, otherwise email — with the phone number
 * always offered as the instant route.
 *
 * To wire a real backend later, replace `handoff()` with a fetch to your API
 * route and swap the confirmation copy. Nothing else needs to change.
 */

const seatingOptions = [
  "No preference",
  "Family / private seating",
  "Main dining room",
  "Large group table",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12+"];

type Fields = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  seating: string;
  notes: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "20:00",
  guests: "4",
  seating: seatingOptions[0],
  notes: "",
};

export function ReservationForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const set = (key: keyof Fields) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Enter the name for the table.";
    if (!/^[\d\s+()-]{7,}$/.test(fields.phone.trim()))
      next.phone = "Enter a phone number the restaurant can call back on.";
    if (fields.email.trim() && !/^\S+@\S+\.\S+$/.test(fields.email.trim()))
      next.email = "Check the email address.";
    if (!fields.date) next.date = "Choose a date.";
    if (!fields.time) next.time = "Choose a time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const message = [
    `Reservation request — ${site.name}`,
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    fields.email ? `Email: ${fields.email}` : null,
    `Date: ${fields.date}`,
    `Time: ${fields.time}`,
    `Guests: ${fields.guests}`,
    `Seating: ${fields.seating}`,
    fields.notes ? `Request: ${fields.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const handoff = () => {
    if (site.whatsapp) {
      window.open(
        `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener"
      );
      return;
    }
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Reservation request — ${fields.name}, ${fields.date}`
    )}&body=${encodeURIComponent(message)}`;
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    handoff();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-rule bg-ivory p-8 lg:p-12">
        <span className="flex size-11 items-center justify-center rounded-full bg-ocean text-white">
          <Check className="size-5" aria-hidden="true" />
        </span>

        <h2 className="mt-6 font-display text-[clamp(1.75rem,3.4vw,2.25rem)] leading-tight">
          Your request is ready to send
        </h2>

        <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.8] text-muted">
          {site.whatsapp
            ? "WhatsApp has opened with your details filled in — send the message to reach the restaurant."
            : "Your email app has opened with the details filled in. Send it, and the restaurant will call you back to confirm."}{" "}
          <strong className="font-semibold text-navy">
            This is a request, not a confirmed booking.
          </strong>{" "}
          Your table is held once the restaurant confirms it.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`tel:${site.phone.tel}`} className={buttonClass("primary", "lg")}>
            <Phone className="size-4" aria-hidden="true" />
            Call to confirm now
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className={buttonClass("outline", "lg")}
          >
            Edit the request
          </button>
        </div>

        <dl className="mt-10 grid gap-x-8 gap-y-4 border-t border-rule pt-6 text-[0.9375rem] sm:grid-cols-2">
          <Summary label="Name" value={fields.name} />
          <Summary label="Phone" value={fields.phone} />
          <Summary label="Date" value={fields.date} />
          <Summary label="Time" value={fields.time} />
          <Summary label="Guests" value={fields.guests} />
          <Summary label="Seating" value={fields.seating} />
        </dl>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-rule p-6 sm:p-8 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
          value={fields.name}
          onChange={set("name")}
          autoComplete="name"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          required
          error={errors.phone}
          value={fields.phone}
          onChange={set("phone")}
          autoComplete="tel"
          placeholder="+971 50 000 0000"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          hint="Optional"
          error={errors.email}
          value={fields.email}
          onChange={set("email")}
          autoComplete="email"
          className="sm:col-span-2"
        />
        <Field
          id="date"
          label="Date"
          type="date"
          required
          min={today}
          error={errors.date}
          value={fields.date}
          onChange={set("date")}
        />
        <Field
          id="time"
          label="Time"
          type="time"
          required
          error={errors.time}
          value={fields.time}
          onChange={set("time")}
          hint={`Kitchen open ${site.hours.displayTime.toLowerCase()}`}
        />

        <SelectField
          id="guests"
          label="Number of guests"
          value={fields.guests}
          onChange={set("guests")}
          options={guestOptions}
        />
        <SelectField
          id="seating"
          label="Seating preference"
          value={fields.seating}
          onChange={set("seating")}
          options={seatingOptions}
        />

        <div className="sm:col-span-2">
          <Label htmlFor="notes">Special request</Label>
          <textarea
            id="notes"
            rows={4}
            value={fields.notes}
            onChange={(event) => set("notes")(event.target.value)}
            placeholder="Birthday, high chair needed, a quiet corner, a whole fish held back…"
            className="mt-2 w-full rounded-[3px] border border-rule bg-paper px-3.5 py-3 text-[0.9375rem] text-charcoal placeholder:text-muted focus:border-ocean focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-8 border-t border-rule pt-6">
        <p className="text-[0.875rem] leading-[1.7] text-muted">
          Requests reach the restaurant by{" "}
          {site.whatsapp ? "WhatsApp" : "email"}, and are confirmed by a call
          back. For tonight, or for a group of eight or more, please call{" "}
          <a
            href={`tel:${site.phone.tel}`}
            className="link-underline font-semibold text-navy"
          >
            {site.phone.display}
          </a>
          .
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className={buttonClass("primary", "lg")}>
            {site.whatsapp ? (
              <Phone className="size-4" aria-hidden="true" />
            ) : (
              <Mail className="size-4" aria-hidden="true" />
            )}
            Request Reservation
          </button>
          <a href={`tel:${site.phone.tel}`} className={buttonClass("outline", "lg")}>
            <Phone className="size-4" aria-hidden="true" />
            Call instead
          </a>
        </div>
      </div>
    </form>
  );
}

function Label({
  htmlFor,
  children,
  hint,
}: {
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-baseline justify-between gap-3 text-[0.6875rem] font-semibold tracking-[0.16em] text-navy uppercase"
    >
      {children}
      {hint ? (
        <span className="font-medium tracking-normal text-muted normal-case">
          {hint}
        </span>
      ) : null}
    </label>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  hint,
  error,
  value,
  onChange,
  className,
  ...rest
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "id">) {
  return (
    <div className={className}>
      <Label htmlFor={id} hint={hint}>
        {label}
        {required ? (
          <span className="ml-1 text-gold-ink" aria-hidden="true">
            *
          </span>
        ) : null}
      </Label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "mt-2 h-12 w-full rounded-[3px] border bg-paper px-3.5 text-[0.9375rem] text-charcoal placeholder:text-muted focus:outline-none",
          error ? "border-[#B4432F]" : "border-rule focus:border-ocean"
        )}
        {...rest}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[0.8125rem] text-[#B4432F]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-[3px] border border-rule bg-paper px-3 text-[0.9375rem] text-charcoal focus:border-ocean focus:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-charcoal">{value || "—"}</dd>
    </div>
  );
}
