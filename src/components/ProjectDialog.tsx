import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectDialog({ project, open, setOpen }: any) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="!max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {project?.moreDetails?.images.map(
                (img: string, index: number) => (
                  <CarouselItem key={index}>
                    <img src={img} className="rounded-lg w-full object-cover" />
                  </CarouselItem>
                )
              )}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Description */}
          <div className="space-y-4 p-10">
            <DialogHeader>
              <DialogTitle>{project?.name}</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <p className="text-muted-foreground">{project?.description}</p>

            {/* stacks */}
            <div className="flex flex-wrap gap-2">
              {project?.stacks.map((stack: string, i: number) => (
                <Badge key={i} variant="secondary">
                  {stack}
                </Badge>
              ))}
            </div>

            {/* infos supplémentaires */}
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {project?.moreDetails?.infoSup.map((info: string, i: number) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
