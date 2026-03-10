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
  const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Erreur lors de l'envoi");
  }

  return res.json();
};
