"use client";

import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";

type Props = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  onSuccess: () => void;
  onError: (error: any) => void;
};

const EmailSender: React.FC<Props> = ({ formData, onSuccess, onError }) => {
  const handleSend = async () => {
    try {
      await emailjs.send(
        "service_dg7uab8",
        "template_54aq9kb",
        formData,
        "s_1ounUH92kIaR3Gt",
      );
      onSuccess();
    } catch (error) {
      console.error("Email sending failed:", error);
      onError(error);
    }
  };

  useEffect(() => {
    handleSend();
  }, []);

  return null;
};

export default EmailSender;
