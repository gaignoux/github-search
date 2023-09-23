import "@public/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Github Search Interface",
  description: "Generated to frontend testing on Featury",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
