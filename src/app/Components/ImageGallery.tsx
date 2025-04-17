import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      src: "/Imagenes/image1.jpg",
      alt: "Dashboard",
      description: "Where you can see the projects created",
    },
    {
      src: "/Imagenes/image2.jpg",
      alt: "Projects",
      description: "Where you can manage your projects",
    },
    {
      src: "/Imagenes/image3.jpg",
      alt: "Reports",
      description: "Here you can see the status of the projects",
    },
    {
      src: "/Imagenes/image4.jpg",
      alt: "Board",
      description: "Where you can change the status of tasks",
    },
    {
      src: "/Imagenes/image5.jpg",
      alt: "Sprint",
      description: "Where you can assign sprints to projects",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Carousel */}
      <div className="relative h-[500px] w-full rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image (clickable) */}
        <div
          className="h-full w-full relative cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1200}
            height={800}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
          <h3 className="text-white text-2xl font-bold mb-2">
            {images[currentIndex].alt}
          </h3>
          <p className="text-white/90">{images[currentIndex].description}</p>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_: any, index: any) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal (Expanded Image) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
