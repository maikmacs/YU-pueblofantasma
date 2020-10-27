import "./MailChimp.css";

import React, { useState } from "react";
import { useMailChimpForm } from "use-mailchimp-form";

export default function MailChimp() {
  const url = "https://youngultra.us14.list-manage.com/subscribe/post?u=ceb3237f77c700d077f1c0b39&amp;id=438ebe29c2";
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(url);
  const [email, setEmail] = useState<string>("");

  const displayMessage = () => {
    if (loading) {
      return "Enviando...";
    }

    if (error) {
      return message;
    }

    if (success) {
      return message;
    }

    return "";
  };

  return (
    <div className="newsletter-form">
      <label>Ultra Radar Newsletter</label>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit({ EMAIL: email });
        }}
      >
        <div className="form-container">
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <button type="submit" className="primary-button" aria-disabled="false" disabled={!email}>
            Subscribe
          </button>
        </div>
        <div
          className={`newsletter-msg ${error ? "newsletter-msg-error" : ""}`}
          dangerouslySetInnerHTML={{ __html: displayMessage() }}
        ></div>
      </form>
    </div>
  );
}
