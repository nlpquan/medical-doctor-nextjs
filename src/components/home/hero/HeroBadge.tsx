import { HeartPulse } from "lucide-react";

const HeroBadge: React.FC = () => {
  return (
    <div className="mx-auto mb-[26px] flex w-max items-center gap-x-2 rounded-full bg-white px-[20px] py-[10px] xl:mx-0">
      <HeartPulse className="text-2xl text-accent" />
      <div className="text-base font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
        Live your life
      </div>
    </div>
  );
};

export default HeroBadge;
