import { Open_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata = {
  title: "Grease Lock Filter System",
  description:
    "A patented, disposable filter pad and metal frame with a built in baffle on back. Grease Lock® features unique fire resistant fiber that creates exceptional grease filtration efficiency.",
  openGraph: {
    title: "Grease Lock Filter System",
    description:
      "A patented, disposable filter pad and metal frame with a built in baffle on back. Grease Lock® features unique fire resistant fiber that creates exceptional grease filtration efficiency.",
    url: "https://www.greaselock.com/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dqbzyikvg/image/upload/v1742232913/og-image_fb7oju.jpg",
        width: 1200,
        height: 630,
        alt: "Grease Lock Filter System Home Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grease Lock Filter System",
    description:
      "A patented, disposable filter pad and metal frame with a built in baffle on back. Grease Lock® features unique fire resistant fiber that creates exceptional grease filtration efficiency.",
    images:
      "https://res.cloudinary.com/dqbzyikvg/image/upload/v1742232913/og-image_fb7oju.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-N5JP83PZ" />
      <body className={`${openSans.variable} font-sans flex flex-col h-screen`}>
        {children}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/22615991.js?businessUnitId=2432495"
        ></script>
      </body>
    </html>
  );
}
