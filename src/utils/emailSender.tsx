import emailjs from "@emailjs/browser";
export const sendEmail = async (form: {
  name: string;
  email: string;
  message: string;
}) => {
  return emailjs.send(
    "service_dg7uab8",
    "template_54aq9kb",
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
    "s_1ounUH92kIaR3Gt",
  );
};
