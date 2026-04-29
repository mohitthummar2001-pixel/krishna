

import Link from "next/link";
import Image from "next/image";
import { listPublicImages } from "@/lib/publicImages";
import {
  PHONE_DISPLAY,
  WHATSAPP_ADMISSION_URL,
  WHATSAPP_JOB_URL,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  YOUTUBE_LINK,
} from "@/lib/links";
import Script from "next/script";
import { MapEmbed } from "@/components/MapEmbed";
import { track } from "@vercel/analytics";
import { FaWhatsapp, FaInstagram, FaFacebook,FaYoutube } from "react-icons/fa";

/* ---------------- SECTION TITLE ---------------- */
function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-brandBrown/15 bg-brandCream/90 px-5 py-6 shadow-md">
      <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-brandGold to-brandBrown" />
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brandBrown">
        {title}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-brandBrown/80">
        {description}
      </p>
    </div>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery({
  images,
  preloadFirst = false,
}: {
  images: { src: string; alt: string }[];
  preloadFirst?: boolean;
}) {
  if (!images.length) return null;

  return (
    <div className="space-y-5">
      {images.map((img, idx) => (
        <div
          key={img.src}
          className="relative overflow-hidden rounded-2xl border border-brandBrown/10 bg-brandCream mx-2 sm:mx-4 shadow-sm"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            sizes="100vw"
            quality={70}
            preload={preloadFirst && idx === 0}
            loading={preloadFirst && idx === 0 ? "eager" : "lazy"}
            fetchPriority={preloadFirst && idx === 0 ? "high" : "auto"}
          />
        </div>
      ))}
    </div>
  );
}

/* ---------------- PAGE ---------------- */
export default async function Home() {
  const homeImages = await listPublicImages("home");
  const academics = await listPublicImages("academics");
  const sports = await listPublicImages("sports");
  const art = await listPublicImages("art");
  const real = await listPublicImages("real-education");
  const reviews = await listPublicImages("reviews");
  const results = await listPublicImages("results");

  return (
    <main className="flex-1">
  {/* ✅ SEO STRUCTURED DATA */}
  <Script
        id="school-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: "Krishna School",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Royal Pushpa Park, 80 Feet Rd, Khodiyar Colony",
              addressLocality: "Jamnagar",
              addressRegion: "Gujarat",
              postalCode: "361002",
              addressCountry: "IN",
            },
            telephone: "+91 9714511165",
          }),
        }}
      />
       {/* ✅ H1 FOR SEO */}
       <h1 className="sr-only">
        Best School in Jamnagar – Krishna School (Std 1 to 12 Science & Commerce)
      </h1>

      
      {/* HOME */}
      <section id="home" className="scroll-mt-24 pt-3">
        <Gallery images={homeImages} preloadFirst />

        <div className="max-w-6xl mx-auto px-4 mt-4">
          <p className="text-sm sm:text-base text-brandBrown/80">
            Krishna School, Jamnagar provides quality education from Std. 1 to
            12 with strong academic results and holistic development.
          </p>
        </div>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="scroll-mt-24 pt-4">
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <SectionTitle
            title="Academics"
            description="Strong fundamentals and disciplined learning environment."
          />
        </div>
        <Gallery images={academics} />
      </section>

      {/* SPORTS */}
      <section id="sports" className="scroll-mt-24 pt-4">
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <SectionTitle
            title="Sports & Fitness"
            description="Confidence, discipline and teamwork through activities."
          />
        </div>
        <Gallery images={sports} /> 
      </section>

      {/* ART */}
      <section id="artCulture" className="scroll-mt-24 pt-4">
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <SectionTitle
            title="Art & Culture"
            description="Creative arts and cultural development."
          />
        </div>
        <Gallery images={art} />
      </section>

      {/* REAL EDUCATION */}
      <section id="realEducation" className="scroll-mt-24 pt-4">
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <SectionTitle
            title="Real Education"
            description="Practical learning beyond textbooks."
          />
        </div>
        <Gallery images={real} />
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-24 pt-4">
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <SectionTitle
            title="Student Reviews"
            description="What students say."
          />
        </div>
        <Gallery images={reviews} />
      </section>

      {/* RESULTS */}
      <section id="results" className="scroll-mt-24 pt-4">
        <div className="max-w-6xl mx-auto px-4 pb-6">
          <SectionTitle
            title="Board Results"
            description="Excellent performance in exams."
          />
        </div>
        <Gallery images={results} />
      </section>


      <section id="contact" className="mt-16">
  <div className="max-w-6xl mx-auto px-4">

    <div className="rounded-2xl border border-brandBrown/15 
                    bg-brandCream/90 p-6 sm:p-8 
                    shadow-md hover:shadow-xl transition-all duration-300
                    flex flex-col gap-6 
                    sm:flex-row sm:items-center sm:justify-between">

      {/* TEXT */}
      <div className="max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brandBrown">
          Ready to connect with Krishna School?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-brandBrown/80">
          Get admission details or apply for job opportunities on WhatsApp.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

        {/* PRIMARY - ADMISSION */}
        <Link
          href={WHATSAPP_ADMISSION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 
                     rounded-full bg-[#25D366] px-6 py-3 
                     text-sm font-semibold text-white 
                     shadow-md hover:bg-[#1ebe5d] 
                     transition-all duration-300 
                     hover:scale-105 active:scale-95"
        >
          <FaWhatsapp className="h-5 w-5" />
          Apply for Admission
        </Link>

        {/* SECONDARY - JOB */}
        <Link
          href={WHATSAPP_JOB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 
                     rounded-full border border-[#25D366]/40 
                     bg-white px-6 py-3 
                     text-sm font-semibold text-[#25D366] 
                     hover:bg-[#25D366]/10 
                     transition-all duration-300"
        >
          <FaWhatsapp className="h-5 w-5" />
          Job Enquiry
        </Link>

      </div>
    </div>

  </div>
</section>
      

      {/* FOOTER */}
      <footer className="mt-16 border-t border-brandBrown/10 bg-brandCream/95">
        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="text-lg font-semibold text-brandBrown">
              Krishna School
            </h3>
            <p className="text-sm text-brandBrown/80 mt-2">
            Royal Pushpa Park, 80 Feet Rd, Khodiyar Colony, Jamnagar, Gujarat 361002, India            </p>
            <p className="text-sm mt-2">📞 {PHONE_DISPLAY}</p>
            <p className="text-sm mt-2">🕒 Mon - Sat: 8 AM - 7 PM</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brandBrown">
              Quick Links
            </h3>
            <div className="mt-3 space-y-2 text-sm text-brandBrown/80">
              <Link href="/#academics">Academics</Link><br />
              <Link href="/#sports">Sports</Link><br />
              <Link href="/#artCulture">Art & Culture</Link><br />
              <Link href="/#realEducation">Real Education</Link><br />
              <Link href="/#reviews">Reviews</Link><br />
              <Link href="/#results">Results</Link><br />
              <Link href="/#contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brandBrown mb-2">
              Location
            </h3>
            <MapEmbed />
          </div>
        </div>

        <div className="border-t py-4 text-center">
          {/* <div className="flex justify-center gap-4 mb-2">
            <FaWhatsapp className="text-green-600" />
            <FaInstagram className="text-pink-500" />
            <FaFacebook className="text-blue-600" />
          </div> */}
{/* <div className="border-t py-4 text-center"> */}
  <div className="flex justify-center gap-4 mb-2">

    {/* WhatsApp */}
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition"
    >
      <FaWhatsapp className="text-green-600 text-lg" />
    </a>

    {/* Instagram */}
    <a
      href={INSTAGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Instagram"
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition"
    >
      <FaInstagram className="text-pink-500 text-lg" />
    </a>

    {/* Facebook */}
    <a
      href={FACEBOOK_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Facebook"
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition"
    >
      <FaFacebook className="text-blue-600 text-lg" />
    </a>

    {/* YouTube */}
    <a
      href={YOUTUBE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="YouTube"
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition"
    >
      <FaYoutube className="text-red-600 text-lg" />
    </a>

  </div>
{/* </div> */}

          <p className="text-xs text-brandBrown/70">
            © {new Date().getFullYear()} Krishna School
          </p>
        </div>
      </footer>

    </main>
  );
}