import emailjs from "@emailjs/browser";

const templates = {
  sendCV: { service_id: "service_4f0gfcv", template_id: "template_i4qhf4h" },
  notification: {
    service_id: "service_y8orvxm",
    template_id: "template_vdylnet",
  },
};

export const sendCV = async (
  type: "sendCV" | "notification",
  email: string
) => {
  try {
    await emailjs.send(
      templates[type].service_id,
      templates[type].template_id,
      {
        user_email: type == "sendCV" ? email : "rantojeremie@gmail.com",
        cv_link: "https://portfolio-jeremie04s-projects.vercel.app/cv.pdf",
      },
      "7gNWnZduDgizAV-IQ" // public key from emailJS
    );

    alert("Le CV a été envoyé avec succès !");
  } catch (error) {
    alert("Erreur lors de l'envoi du CV.");
  }
};
