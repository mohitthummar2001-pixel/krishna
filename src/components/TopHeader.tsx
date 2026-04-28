import Link from "next/link";
import { PHONE_DISPLAY, WHATSAPP_ADMISSION_URL } from "@/lib/links";
import { WhatsAppIcon } from "@/components/icons";

export function TopHeader() {
  return (
    <div className="w-full bg-brandBrown text-brandCream">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 px-3 sm:px-6 py-2 text-xs sm:text-sm">
        <div className="tracking-wide font-medium">
          Std. 1 to 12 | English &amp; Gujarati Medium
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_DISPLAY}`}
            className="hidden sm:inline-flex hover:text-brandGold transition-colors"
          >
            Phone: {PHONE_DISPLAY}
          </a>
          <Link
            href={WHATSAPP_ADMISSION_URL}
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center justify-center rounded-full bg-brandCream/10 p-2 hover:bg-brandCream/15 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4 text-brandGold" />
          </Link>
        </div>
      </div>
    </div>
  );
}

