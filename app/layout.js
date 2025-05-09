import { Inter, Kaushan_Script, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400", // Adjust weight if needed
  variable: "--font-kaushan", // Optional: Define a CSS variable
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Adjust weight if needed
  variable: "--font-bebas-neue", // Optional: Define a CSS variable
});

export const metadata = {
  title: "DekReza's Page",
  description:
    "Hi I am Reza, I do coding custom YT CHAT CSS for Vtuber/Streamer, open for collaboration projects, take a look at my portfolio here ✨",
  openGraph: {
    title: "DekReza's Portfolio Page",
    description:
      "Hi I am Reza, I do coding custom YT CHAT CSS for Vtuber/Streamer, open for collaboration projects, take a look at my portfolio here ✨",
    url: "https://dekreza.site/",
    images: [
      {
        url: "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700500680/Group_35_2_wiftx7.png",
        width: 1200,
        height: 630,
        alt: "DekReza's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DekReza's Portfolio Page",
    description:
      "Hi I am Reza, I do coding custom YT CHAT CSS for Vtuber/Streamer, open for collaboration projects, take a look at my portfolio here ✨",
    images: [
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700500680/Group_35_2_wiftx7.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative  ${inter.className}`}>
        <Menu />
        <div className="pt-16 max-w-[1366px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
