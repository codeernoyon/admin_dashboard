import type { Metadata } from "next";
import { Saira as Sara } from "next/font/google";
import "./globals.css";
const inter = Sara({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashzoon - E-commerce Dashboard",
  description: "Created by Md. Noyon Islam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
