import { FaScrewdriverWrench, FaBolt, FaPaintRoller, FaSnowflake, FaHammer, FaKitchenSet, FaHouseChimney, FaWrench } from "react-icons/fa6";

const items = [
  { icon: FaScrewdriverWrench, label: "سباكة" },
  { icon: FaBolt, label: "كهرباء" },
  { icon: FaPaintRoller, label: "دهانات" },
  { icon: FaSnowflake, label: "تكييف" },
  { icon: FaHammer, label: "نجارة" },
  { icon: FaKitchenSet, label: "مطابخ" },
  { icon: FaHouseChimney, label: "تشطيبات" },
  { icon: FaWrench, label: "محارة" },
];

const MarqueeStrip = () => {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-fixly-beige-dark py-4">
      <div className="animate-marquee flex gap-8 w-max">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-card text-foreground text-sm font-semibold whitespace-nowrap"
          >
            <item.icon className="text-primary" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
