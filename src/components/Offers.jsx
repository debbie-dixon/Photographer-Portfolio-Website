import DynamicIcons from "./DynamicIcons";
export default function Offers() {
  const offerings = [
    { label: "Professional Quality", icon: "camera" },
    { label: "Personalised Experience", icon: "sparkles" },
    { label: "Trusted by Hundreds", icon: "users" },
  ];

  return (
    <section className="w-full bg-brandPrimary py-8 border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8">
          {offerings.map((item) => (
            <div
              key={item.label}
              className="flex w-full items-center justify-center gap-3 rounded-sm px-2 py-1 sm:px-0"
            >
              <div className="shrink-0">
                <DynamicIcons iconName={item.icon} />
              </div>

              <span className="font-sans text-sm text-white md:text-base leading-relaxed wrap-break-word text-center sm:text-left">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
