import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

// export const metadata = {
//   title: "Grease Lock",
//   description:
//     "Grease Lock is a patented, disposable filter pad and metal frame with a built in baffle on back. Features unique fire resistant fiber, delivering exceptional grease filtration efficiency.",
// };

export const metadata = {
  openGraph: {
    title: "Grease Lock",
    description:
      "Grease Lock is a patented, disposable filter pad and metal frame with a built in baffle on back. Features unique fire resistant fiber, delivering exceptional grease filtration efficiency.",
    url: "https://www.greaselock.com/",
    siteName: "Grease Lock",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-N5JP83PZ" />

      <body className={`${openSans.variable} font-sans flex flex-col h-screen`}>
        <Header />
        {children}
        <Footer />
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
