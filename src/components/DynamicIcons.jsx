import { DynamicIcon } from "lucide-react/dynamic";

export default function DynamicIcons({
  iconName,
  link,
  text,
  color = "white",
}) {
  return (
    <a href={link} className="flex gap-1 items-center">
      <DynamicIcon name={iconName} size={24} color={color} />
      {text}
    </a>
  );
}
