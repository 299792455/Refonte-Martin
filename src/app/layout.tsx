import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarouselTrack from "@/components/CarouselTrack";

export const metadata: Metadata = {
  title: "OnlineDreamsMakers",
  description: "Agencia creativa que potencia tu presencia digital: branding, social media y contenido audiovisual impactante.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <CarouselTrack />
        {children}
        <Footer />
      </body>
    </html>
  );
}
