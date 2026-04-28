export type GalleryFolder =
  | "home"
  | "academics"
  | "sports"
  | "art"
  | "real-education"
  | "reviews"
  | "results";

export type GalleryImage = {
  file: string;
  alt: string;
};

type GalleryMap = Record<GalleryFolder, GalleryImage[]>;

// Add your real filenames here once you place images into:
// `public/images/<folder>/...`
// Example:
// home: [{ file: "01.jpg", alt: "Students in classroom" }]
export const galleries: GalleryMap = {
  home: [],
  academics: [],
  sports: [],
  art: [],
  "real-education": [],
  reviews: [],
  results: [],
};

export function getGallery(folder: GalleryFolder) {
  const images = galleries[folder] ?? [];
  return images.map((img) => ({
    src: `/images/${folder}/${img.file}`,
    alt: img.alt,
  }));
}

