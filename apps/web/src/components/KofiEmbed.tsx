import { Coffee } from "lucide-react";

export function KofiEmbed() {
  return (
    <a
      href="https://ko-fi.com/kurzagin"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#be1e2d] px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#a01926]"
    >
      <Coffee size={18} aria-hidden="true" />
      Support on Ko-fi
    </a>
  );
}
