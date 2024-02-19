import FooterContact from "@/components/home/footer/FooterContact";
import FooterSocialLinks from "./footer/FooterSocialLinks";
import FooterQuickLinks from "./footer/FooterQuickLinks";
import FooterOpeningHours from "./footer/FooterOpeningHours";
import FooterCopyright from "./footer/FooterCopyright";

interface FooterProps {
  // Define any props here if needed
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="footer pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col gap-x-5 gap-y-10 xl:flex-row">
          {/* footer contact section */}
          <div className="footer__item flex-1">
            <FooterContact />
            <FooterSocialLinks />
          </div>

          {/* footer quick links section */}
          <div className="footer__item flex-1">
            <FooterQuickLinks />
          </div>

          {/* footer opening hours section */}
          <div className="footer__item flex-1">
            <FooterOpeningHours />
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
