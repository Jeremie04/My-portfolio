import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Github } from "lucide-react";

export function ProjectItem({ item, setSelectedProject, setOpen }: any) {
  return (
    <Card className="relative w-full max-w-sm mx-auto overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group">
      {/* Image + overlay */}
      <div className="relative">
        <img
          src={item.imageUrl ? item.imageUrl : "/project-default.png"}
          alt={item.name}
          loading="lazy"
          className="w-full aspect-video object-cover transition-all duration-300 group-hover:brightness-60"
        />

        {/* Overlay boutons GitHub + MoreDetails */}
        <div
          className="
            absolute inset-0 flex justify-end items-start p-4 gap-2
            opacity-100 md:opacity-0
            transition-opacity duration-300
            md:group-hover:opacity-100
          "
        >
          {item.gitUrl && (
            <a href={item.gitUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="
                  rounded-full p-2
                  bg-black/70 text-white border-white/20
                  hover:bg-black/80
                  md:bg-white/20 md:hover:bg-white/40
                  backdrop-blur-sm
                "
              >
                <Github className="w-5 h-5 text-white" />
              </Button>
            </a>
          )}
          {item.moreDetails && (
            <Button
              variant="outline"
              onClick={() => {
                setSelectedProject(item);
                setOpen(true);
              }}
              className="
                rounded-full p-2
                bg-black/70 text-white border-white/20
                hover:bg-black/80
                md:bg-white/20 md:hover:bg-white/40
                backdrop-blur-sm
              "
            >
              <Eye className="w-5 h-5 text-white" />
            </Button>
          )}
        </div>
      </div>

      {/* Header */}
      <CardHeader className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between mb-3">
          <CardTitle>{item.name}</CardTitle>

          <CardAction>
            <Badge variant="secondary">{item.type}</Badge>
          </CardAction>
        </div>

        <CardDescription className="text-justify">
          {item.description}
        </CardDescription>
      </CardHeader>

      {/* Footer Badges */}
      <CardFooter className="flex flex-wrap gap-2 mt-auto md:p-4">
        {item.stacks.map((tech: string, i: number) => (
          <Badge key={i} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
