import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-[1440px] h-[1000px] bg-[#061C21] opacity-90 flex items-center justify-center">
      <Component {...pageProps} />
    </div>
  );
}
