import { Inter } from "next/font/google";
import "./globals.css";
import { ComponentNavbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio Eddy Nathansyah",
  author: "Eddy Nathansyah",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ComponentNavbar />
        {children}  
      </body>
    </html>
  );
}
