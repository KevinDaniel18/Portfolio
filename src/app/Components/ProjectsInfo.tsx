"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import * as Dialog from "@radix-ui/react-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

type ImageType = { src: string; alt: string; description: string } | null;

const ProjectsInfo = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images = [
    {
      src: "/Imagenes/image1.jpeg",
      alt: "Dashboard",
      description: "Where you can see the projects created and the status",
    },
    {
      src: "/Imagenes/image2.jpeg",
      alt: "Projects",
      description: "Where you can create and delete your projects",
    },
    {
      src: "/Imagenes/image3.jpeg",
      alt: "Create Projects",
      description:
        "Where you can create your projects and set a start and end date",
    },
    {
      src: "/Imagenes/image4.jpeg",
      alt: "Tasks",
      description: "Where you can add tasks and delete them",
    },
  ];

  const openModal = (image: ImageType) => {
    setSelectedImage(image);
  };

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h1 className="font-bold mb-3 text-2xl md:text-3xl text-center">
        - Projects -
      </h1>
      <p className="text-gray-700 text-justify mb-6">
        I am currently developing a mobile application that will help small and
        medium enterprises (SME) to manage their projects, the app is called
        AgilCurn.
      </p>
      <div className="mb-6">
        <h2 className="font-bold text-primary mb-2 text-xl">
          Its most common objectives are:
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-justify">
          <li>
            Analyze the specific needs and requirements of SMEs regarding
            project management
          </li>
          <li>
            Develop specific functionalities that facilitate the application of
            Scrum principles and practices, such as the creation and assignment
            of tasks.
          </li>
          <li>
            Implement Scrum as a framework for planning and monitoring projects
            in the application.
          </li>
        </ul>
      </div>
      <h2 className="font-bold text-primary mb-4 text-center text-2xl">
        Progress
      </h2>
      <Carousel
        setApi={setApi}
        className="w-full max-w-3xl mx-auto"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={480}
                    height={854}
                    className="rounded-lg object-cover shadow-md"
                    onClick={() => openModal(image)}
                  />
                  <h3 className="font-bold mt-4 mb-2 text-xl">{image.alt}</h3>
                  <p className="text-gray-700 text-center">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollPrev()}
          disabled={current === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <span className="text-sm font-medium">
          {current} / {count}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollNext()}
          disabled={current === count}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      <Dialog.Root
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4 z-50">
          {selectedImage && (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {/* Botón de cierre posicionado en la esquina superior derecha */}
              <Dialog.Close asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-white border border-gray-300 rounded-full shadow"
                  aria-label="Close"
                >
                  ✕
                </Button>
              </Dialog.Close>

              {/* Imagen con tamaño máximo controlado */}
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={1200}
                className="rounded-lg object-contain max-h-[80vh] w-full"
              />
              <h3 className="font-bold mt-4 text-xl text-center">
                {selectedImage.alt}
              </h3>
              <p className="text-gray-700 text-center">
                {selectedImage.description}
              </p>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default ProjectsInfo;
