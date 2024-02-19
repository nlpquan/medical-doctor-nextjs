import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="h-[100px]"></div>
      {children}
      <div className="h-[2000px]"></div>
      <Footer />
    </>
  );
}
