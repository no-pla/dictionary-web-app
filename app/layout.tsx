import type { Metadata } from "next";
import { Inter, Lora, Inconsolata } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/Provider";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dictionary web app",
  description: "dictionary app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body
        className={`${lora.className} ${inconsolata.className} ${inter.className}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
