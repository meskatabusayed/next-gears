import type { Metadata } from "next";



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
    <>
        {children}
    </>
       
      
  );
}
