"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff, X, ZoomIn } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  alt: string;
}

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const safeImages = Array.isArray(images) ? images : [];
  const hasImages = safeImages.length > 0;

  function handlePrevious(e?: React.MouseEvent) {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  }

  function handleNext(e?: React.MouseEvent) {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_120px] lg:grid-cols-[1fr_140px] gap-4 w-full">
        {/* Main Image */}
        <div
          className="group relative w-full h-72 sm:h-96 md:h-112.5 lg:h-125 overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-sm min-w-0"
          onClick={() => hasImages && setIsLightboxOpen(true)}
        >
          {hasImages ? (
            <Image
              src={safeImages[selectedIndex]}
              alt={`${alt} - tampilan ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
              className="cursor-zoom-in object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
              <ImageOff size={48} />
              <p className="text-sm">Tidak ada gambar tersedia</p>
            </div>
          )}

          {hasImages && (
            <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
              {selectedIndex + 1} / {safeImages.length}
            </div>
          )}

          {safeImages.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-foreground opacity-0 shadow-lg transition-all hover:scale-110 hover:bg-background group-hover:opacity-100"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-foreground opacity-0 shadow-lg transition-all hover:scale-110 hover:bg-background group-hover:opacity-100"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {hasImages && (
            <div className="pointer-events-none absolute right-4 top-4 rounded-lg bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <ZoomIn size={18} />
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {safeImages.length > 1 && (
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto p-1 w-full min-w-0 md:max-h-112.5 lg:max-h-125 [&::-webkit-scrollbar]:hidden">
            {safeImages.map((image, index) => (
              <button
                key={`thumb-${index}`}
                onClick={() => setSelectedIndex(index)}
                className={`relative aspect-video w-28 md:w-full shrink-0 overflow-hidden rounded-md border-2 transition-all duration-300
                  ${
                    selectedIndex === index
                      ? "scale-105 border-primary shadow-md ring-2 ring-primary/30"
                      : "border-transparent opacity-70 hover:border-border hover:opacity-100"
                  }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 120px, 160px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && hasImages && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white/70 transition-all hover:bg-white/20 hover:text-white md:right-6 md:top-6"
          >
            <X size={28} />
          </button>

          <div
            className="relative flex h-full w-full max-w-6xl max-h-[90vh] items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={safeImages[selectedIndex]}
              alt={`${alt} - preview penuh`}
              fill
              sizes="100vw"
              className="object-contain shadow-2xl"
            />
          </div>

          {safeImages.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 md:left-8"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 md:right-8"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1 text-sm text-white/80">
            {selectedIndex + 1} dari {safeImages.length}
          </div>
        </div>
      )}
    </>
  );
}
