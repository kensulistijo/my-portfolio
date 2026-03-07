import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState(""); 
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const messageText = formData.get("message");

    if (!name || !email || !messageText) {
      setStatus("error");
      setMessage("All fields are required.");
      return;
    }

    if (!email.endsWith(".com")) {
      setStatus("error");
      setMessage("Invalid email address.");
      return;
    }

    emailjs
      .sendForm('service_h1g4ene', 'template_66glq2m', form.current, {
        publicKey: '4BbHauRF4D0HfWODM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus("success");
          setMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setStatus("error");
          console.log('FAILED...', error.text);
          setMessage("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <div>
        <form  ref={form} onSubmit={sendEmail} className="flex flex-col">
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-left mb-2 text-lg">
                YOUR NAME
                </legend>
                <input
                type="text"
                name="user_name"
                className="pl-2 w-full input input-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Oikura Ken"
                />
            </fieldset>
            <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend text-left mb-2 text-lg">
                YOUR EMAIL
                </legend>
                <input
                type="email"
                name="user_email"
                className="pl-2 w-full input input-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="tes@gmail.com"
                />
            </fieldset>
            <fieldset className="fieldset mt-3">
                <legend className="fieldset-legend text-left text-lg">
                MESSAGE
                </legend>
                <textarea
                name="message"
                className="pl-2 pt-2 w-full input-lg textarea h-24 mt-2 border border-gray-400 focus:outline-none focus:ring-2  focus:ring-green-500 focus:border-green-500"
                placeholder="Have a nice day!"
                />
            </fieldset>
            <button
                type="submit"
                className="btn bg-[#2CB00F] hover:bg-green-600 text-white border-none w-full mt-4"
            >
                Submit
            </button>
        </form>
        {message && (
        <p
          className={`mt-2 text-left ${
            status === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};