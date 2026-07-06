import emailjs from "@emailjs/browser";
const env = import.meta.env;

export const sendCV = async (userEmail: string) => {
  try {
    const response = await emailjs.send(
      env.VITE_EMAIL_SERVICE_KEY1,
      env.VITE_SEND_CV_TEMPLATE_KEY,
      {
        user_email: userEmail,
      },
      env.VITE_EMAILJS_KEY1
    );

    return response;
  } catch (error) {
    console.error("Erreur EmailJS :", error);
    throw error;
  }
};

export const sendNotif = async (userEmail: string) => {
  try {
    const response = await emailjs.send(
      env.VITE_EMAIL_SERVICE_KEY2,
      env.VITE_SEND_NOTIF_TEMPLATE_KEY,
      {
        user_email: userEmail,
      },
      env.VITE_EMAILJS_KEY2
    );

    return response;
  } catch (error) {
    console.error("Erreur EmailJS :", error);
    throw error;
  }
};

export const sendContactMessage = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      env.VITE_EMAIL_SERVICE_KEY2,
      env.VITE_SEND_MESSAGE_TEMPLATE_KEY,
      {
        user_name: data.name,
        user_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      env.VITE_EMAILJS_KEY2
    );

    return response;
  } catch (error) {
    console.error("Erreur EmailJS :", error);
    throw error;
  }
};
