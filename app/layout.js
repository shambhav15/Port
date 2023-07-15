import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";


const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "ui",
  description: "shambhav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-zinc-950 ${inter.className}`}>
          <Nav />
        {children}
      </body>
    </html>
  );
}
