import emailjs from "@emailjs/browser";

export const sendCV = async (userEmail: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/send-cv`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res.json();
};

export const sendNotif = async (userEmail: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/send-notif`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail }),
  });
  return res.json();
};

export const sendContactMessage = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      "service_4f0gfcv",
      "template_tvv0xb8",
      {
        user_name: data.name,
        user_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      "7gNWnZduDgizAV-IQ"
    );

    return response;
  } catch (error) {
    console.error("Erreur EmailJS :", error);
    throw error;
  }
};
