import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section className="py-24 px-10">
      <h2 className="text-3xl font-bold text-center mb-16">Mes projets</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Application de gestion</CardTitle>
          </CardHeader>
          <CardContent>
            Application full stack avec React et Spring Boot.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chatbot IA</CardTitle>
          </CardHeader>
          <CardContent>Chatbot avec mémoire, rôles et contexte.</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application mobile Kotlin</CardTitle>
          </CardHeader>
          <CardContent>
            Application Android offline avec base de données locale.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
