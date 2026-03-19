import { Button } from "@/components/ui/button";
import {
  Facebook,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { sendContactMessage } from "@/services/EmailService";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-24 max-w-250 m-auto px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">{t("contact.title")}</h2>
          <p className="text-muted-foreground mt-4">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 p-6">
            <h3 className="text-xl font-semibold">
              {t("contact.contact_details")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">+261 33 32 033 73</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">
                  rantojeremie@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">
                  Antananarivo, Madagascar
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-3">
                {t("contact.social_media")}
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Jeremie04"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jeremie-ravoninahitra-4787362b2/"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://www.facebook.com/ravran.jeremie/"
                  className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.form.title")}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <MessageForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MessageForm() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!name.trim()) newErrors.name = t("contact.message.error.name");

    if (!email.trim()) newErrors.email = t("contact.message.error.email");
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = t("contact.message.error.invalid_email");

    if (!subject.trim()) newErrors.subject = t("contact.message.error.object");

    if (!message.trim()) newErrors.message = t("contact.message.error.message");

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!validate()) return;
      await sendContactMessage({
        name,
        email,
        subject,
        message,
      });

      toast.success(t("contact.message.toast.success"));
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-1">
        <Input
          id="name"
          placeholder={t("contact.form.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          className="peer"
        />
        {errors.name && (
          <p
            role="alert"
            aria-live="polite"
            className="text-xs text-destructive"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Input
          type="email"
          placeholder={t("contact.form.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          className="peer"
        />
        {errors.email && (
          <p
            role="alert"
            aria-live="polite"
            className="text-xs text-destructive"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Input
          placeholder={t("contact.form.object")}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-invalid={!!errors.subject}
          className="peer"
        />
        {errors.subject && (
          <p
            role="alert"
            aria-live="polite"
            className="text-xs text-destructive"
          >
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Textarea
          placeholder={t("contact.form.message")}
          className="h-40 peer"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p
            role="alert"
            aria-live="polite"
            className="text-xs text-destructive"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button className="w-full" onClick={handleSubmit} disabled={loading}>
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? t("contact.form.button_loading") : t("contact.form.button")}
      </Button>
    </>
  );
}
