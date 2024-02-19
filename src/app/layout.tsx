import "@/styles/globals.css";
import { inter } from "@/components/ui/fonts";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
