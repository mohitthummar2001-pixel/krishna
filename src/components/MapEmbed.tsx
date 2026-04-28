const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Krishna+School,+Royal+Pushpa+Park,+80+Feet+Rd,+Khodiyar+Colony,+Jamnagar,+Gujarat+361002,+India&output=embed";

export function MapEmbed() {
  return (
    <iframe
      src={MAP_EMBED_URL}
      className="w-full h-44 rounded-xl border"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Krishna School location map"
    />
  );
}
