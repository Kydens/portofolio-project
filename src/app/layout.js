import { Inter } from "next/font/google";
import "./globals.css";
import { ComponentNavbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio Eddy Nathansyah",
  keywords: ['Next.js', 'JavaScript', 'Portofolio'],
  authors: [
    { name: 'Eddy Nathansyah', url: 'https://github.com/Kydens' }
  ]
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
