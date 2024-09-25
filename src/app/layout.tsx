import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Next Gears",
  description: "Next Level Ride Shearing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
