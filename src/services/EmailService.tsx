import emailjs from "@emailjs/browser";

export const sendCV = async (userEmail: string) => {
  try {
    const response = await emailjs.send(
      "service_9gvwmnw",
      "template_zrlul1o",
      {
        user_email: userEmail,
      },
      "3B1mCpVd8FCuIMXEO"
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
      "service_4f0gfcv",
      "template_vdylnet",
      {
        user_email: userEmail,
      },
      "7gNWnZduDgizAV-IQ"
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
