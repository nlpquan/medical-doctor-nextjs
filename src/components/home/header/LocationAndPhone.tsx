import { MapPin, Phone } from "lucide-react";

const LocationAndPhone: React.FC = () => {
  return (
    <section>
      {/* location */}
      <div className="flex items-center justify-center gap-x-2 lg:justify-normal">
        <MapPin className="text-2xl text-accent" />
        <div>123 Arling, Miola, NY</div>
      </div>

      {/* phone */}
      <div className="flex items-center justify-center gap-x-2 lg:justify-normal">
        <Phone className="text-2xl text-accent" />
        <div>(+123) 456 789</div>
      </div>
    </section>
  );
};

export default LocationAndPhone;
