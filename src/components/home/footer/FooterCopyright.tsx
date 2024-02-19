import React from "react";

const FooterCopyright: React.FC = () => {
  return (
    <section>
      {/* copyright */}
      <div className="border-t py-[30px]">
        <div className="container mx-auto text-center">
          <div className="text-base font-light">
            &copy; 2023 Insove - All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCopyright;
