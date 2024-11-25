import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Asif Ekbal",
  description: "Portfolio | Asif Ekbal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="dark:bg-gray-800 min-h-screen">
          <div className="max-w-6xl mx-auto pt-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
