import { readdir } from "node:fs/promises";
import path from "node:path";

export type GalleryFolder =
  | "home"
  | "academics"
  | "sports"
  | "art"
  | "real-education"
  | "reviews"
  | "results"
  | "boardResult2026";

export type PublicImage = {
  src: string;
  alt: string;
};

const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function filenameToAlt(name: string) {
  const base = name.replace(/\.[^.]+$/, "");
  return base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

export async function listPublicImages(folder: GalleryFolder): Promise<PublicImage[]> {
  const dir = path.join(process.cwd(), "public", "images", folder);
  let names: string[] = [];
  try {
    names = await readdir(dir);
  } catch {
    return [];
  }

  return names
    .filter((n) => allowedExt.has(path.extname(n).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((file) => ({
      src: `/images/${folder}/${file}`,
      alt: filenameToAlt(file),
    }));
}

