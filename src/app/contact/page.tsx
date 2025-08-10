"use client";

import React, { useState } from "react";
import "./style.css";
import ContactFormFields from "../../components/ContactFormFields";
import { formFields } from "../../utils/formConfig";
import { sendEmail } from "../../utils/emailSender";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string>("");
  const [pending, setPending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all the fields.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setPending(true);
    try {
      await sendEmail(form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email send failed:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className={"contact-page"}>
      <div className={"contact-card"}>
        <header className={"header"}>
          <h1 className="hero-title">
            <section className={"gradient-text"}>Contact</section>
          </h1>

          <a href="mailto:asalpoudel9@gmail.com" className={"email-link"}>
            asalpoudel9@gmail.com
          </a>
          <p className={"subtext"}>
            Feel free to contact me with any inquiries or questions!
          </p>
          {error && <p className={"error"}>{error}</p>}
        </header>

        <form className={"contact-form"} onSubmit={handleSubmit} noValidate>
          {/* If ContactFormFields internally uses random IDs/keys, update it to use React.useId per field.
             Otherwise, you can replace this with inline fields below. */}
          <ContactFormFields
            form={form}
            formFields={formFields}
            handleChange={handleChange}
          />

          {/* Inline fallback (uncomment to avoid relying on ContactFormFields):
          <div className={styles["input-row"]}>
            <div className={styles["input-group"]}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div className={styles["input-group"]}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
          </div>
          <div className={`${styles["input-group"]} ${styles["full"]}`}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="How can I help?" />
          </div>
          */}

          <button type="submit" className={"submit-btn"} disabled={pending}>
            {pending ? "Sending..." : "Submit"}
          </button>
        </form>

        <div className={"social-icons"} aria-label="Social links">
          {/* Add your icons/links here */}
        </div>
      </div>
    </main>
  );
}
