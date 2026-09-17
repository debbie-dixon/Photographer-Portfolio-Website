import DynamicIcons from "./DynamicIcons";
export default function Offers() {
  const offerings = [
    { label: "Professional Quality", icon: "camera" },
    { label: "Personalised Experience", icon: "sparkles" },
    { label: "Trusted by Hundreds", icon: "users" },
  ];

  return (
    <section className="w-full bg-brandPrimary py-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Responsive Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 justify-items-center">
          {offerings.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 w-full max-w-50"
            >
              <DynamicIcons iconName={item.icon} />

              <span className="font-sans font-sm text-white text-sm md:text-base whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
