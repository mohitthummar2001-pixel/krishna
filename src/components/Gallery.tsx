import Image from "next/image";
import { listPublicImages, type GalleryFolder } from "@/lib/publicImages";

type Props = {
  folder: GalleryFolder;
  className?: string;
  priorityCount?: number;
};

export async function Gallery({
  folder,
  className,
  priorityCount = 0,
}: Props) {
  const images = await listPublicImages(folder);

  if (images.length === 0) {
    return (
      <div
        className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`.trim()}
        aria-label={`${folder} gallery placeholders`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border border-brandBrown/10 bg-gradient-to-br from-brandCream to-brandGold/20"
          >
            <div className="aspect-[4/3] w-full" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,163,115,0.30),transparent_55%)]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`w-full space-y-3 px-2 sm:space-y-4 sm:px-4 ${className ?? ""}`.trim()}>
      {images.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={1920}
          height={1080}
          className="block h-auto w-full"
          sizes="100vw"
          priority={idx < priorityCount}
        />
      ))}
    </div>
  );
}

