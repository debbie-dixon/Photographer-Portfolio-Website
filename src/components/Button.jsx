export default function Button({
  border,
  bgColor,
  text,
  borderColor,
  hoverTp,
  hover,
  size,
  rounded,
  font,
  textColor,
  link,
  lg,
  visibility,
  mt,
}) {
  return (
    <>
      <a href={link}>
        <button
          className={`px-6 py-2 ${textColor}  transition-all ${font} duration-300 shadow-sm ${border} ${bgColor} ${borderColor} ${hover} ${hoverTp} ${size} ${rounded} ${lg} ${visibility} ${mt}`}
        >
          {text}
        </button>
      </a>
    </>
  );
}
