import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { DM_Sans } from "next/font/google"; 

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Zidan Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-white text-black antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}