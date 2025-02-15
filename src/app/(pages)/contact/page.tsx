"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "support",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "support",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="page-content contact-page">
      <h1>Contactez-nous</h1>
      <div className="content-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="subject">Sujet</label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            >
              <option value="support">Support technique</option>
              <option value="feedback">Retour d'expérience</option>
              <option value="business">Proposition commerciale</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Votre message..."
            />
          </div>

          <div className="submit-container">
            <button
              type="submit"
              className="submit-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>

          {status === "success" && (
            <div className="alert success">Message envoyé avec succès !</div>
          )}

          {status === "error" && (
            <div className="alert error">
              Une erreur est survenue. Veuillez réessayer.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
