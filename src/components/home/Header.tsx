import Image from "next/image";
import Link from "next/link";
import LocationAndPhone from "./header/LocationAndPhone";
import ContactButton from "./header/ContactButton";
import MobileNav from "./header/MobileNav";
import DesktopNav from "./header/DesktopNav";

interface HeaderProps {
  // Define any props here if needed
}

const Header = (props: HeaderProps) => {
  return (
    <header className="py-8 lg:pb-14 lg:pt-6">
      <div className="container mx-auto flex flex-col gap-y-4 lg:relative lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <div className="flex justify-center lg:justify-normal">
          <Link href="/">
            <Image
              src="/img/header/logo.svg"
              alt="Logo"
              width={200}
              height={50}
            />
          </Link>
        </div>

        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <LocationAndPhone />
          <ContactButton />
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
