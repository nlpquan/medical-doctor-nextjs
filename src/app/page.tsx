import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Service from "@/components/home/Service";
import Faq from "@/components/home/Faq";
import Brand from "@/components/home/Brand";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <html>
      <body>
        <Header />
        <Hero />
        <Stats />
        <Service />
        <Faq />
        <Brand />
        <Newsletter />
        <Footer />
        {/* temp div */}
        {/* <div className="h-[4000px]"></div> */}
      </body>
    </html>
  );
}
