import localFont from "next/font/local";

export const didot = localFont({
  src: [
    {
      path: "../../public/font/DidotElder-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/DidotElder-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/DidotElder-Roman.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/DidotElder-RomanItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/DidotElder-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/DidotElder-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/DidotElder-Display.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});
