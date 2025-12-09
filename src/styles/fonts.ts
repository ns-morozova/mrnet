import localFont from "next/font/local";

export const gratoGrotesk = localFont({
  variable: "--font-grato-grotesk",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/GratoGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GratoGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GratoGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});
