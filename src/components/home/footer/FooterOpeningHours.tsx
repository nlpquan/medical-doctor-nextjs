import React from "react";

const FooterOpeningHours: React.FC = () => {
  return (
    <section>
      <h4 className="h4 mb-5">Opening Hours</h4>
      {/* list */}
      <div className="flex flex-col gap-5">
        {/* item */}
        <div className="flex-1">
          <div className="flex items-center justify-between border-b pb-[10px]">
            <div>Monday - Thursday</div>
            <div className="font-medium text-accent">8:00 AM - 6:00 PM</div>
          </div>
        </div>
        {/* item */}
        <div className="flex-1">
          <div className="flex items-center justify-between border-b pb-[10px]">
            <div>Monday - Thursday</div>
            <div className="font-medium text-accent">8:00 AM - 6:00 PM</div>
          </div>
        </div>
        {/* item */}
        <div className="flex-1">
          <div className="flex items-center justify-between border-b pb-[10px]">
            <div>Monday - Thursday</div>
            <div className="font-medium text-accent">Emergency Only</div>
          </div>
        </div>
        {/* item */}
        <div className="flex-1">
          <div className="flex items-center justify-between border-b pb-[10px]">
            <div>Monday - Thursday</div>
            <div className="font-medium text-accent">8:00 AM - 6:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterOpeningHours;
