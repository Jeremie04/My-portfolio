import { MailIcon, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useState } from "react";
import { sendCV, sendNotif } from "@/services/EmailService";
import { Loader2 } from "lucide-react";

export default function EmailDialog({ open, setOpen }: any) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (email: string) => {
    try {
      setLoading(true);
      await sendCV(email);
      toast.success("Le CV a été envoyé à votre adresse email.");
    } catch (error) {
      console.log(error);
      toast.error("Une erreur est survenue lors de l'envoi.");
    } finally {
      setLoading(false);
      setOpen(false);
      await sendNotif(email);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="mb-2 flex flex-col items-center gap-2">
            <div
              aria-hidden="true"
              className="flex fontsize-20 items-center justify-center"
            >
              <Send />
            </div>
            <DialogHeader>
              <DialogTitle className="sm:text-center">
                Recevoir le CV par email
              </DialogTitle>
              <DialogDescription className="sm:text-center">
                Le CV sera envoyé directement dans votre boîte de réception.
              </DialogDescription>
            </DialogHeader>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(email);
            }}
          >
            <div className="*:not-first:mt-2">
              <div className="relative">
                <Input
                  required
                  aria-label="Email"
                  className="peer ps-9"
                  id="dialog-subscribe"
                  placeholder="Votre Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <MailIcon aria-hidden="true" size={16} />
                </div>
              </div>
            </div>
            <Button
              className="w-full flex items-center gap-2"
              type="submit"
              disabled={loading}
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Envoi..." : "Envoyer"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Toaster />
    </>
  );
}
