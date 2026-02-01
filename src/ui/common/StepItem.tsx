function StepItem({
  num,
  title,
  text,
  theme = "light",
}: {
  num: string;
  title: string;
  text: string;
  theme?: string;
}) {
  const circleStyles = theme === "light" ? "bg-neutral-0" : "bg-neutral-900";

  return (
    <li className="flex flex-col gap-6 items-center md:items-start text-center md:text-left max-w-[23.85rem]">
      <div className="relative w-full mb-20 hidden md:block">
        <div
          className={`[li:last-child_&]:hidden w-full h-0.5 bg-orange-200 absolute top-[50%] -transform-y-[50%]`}
        ></div>
        <div
          className={`relative rounded-full border-2 w-8 h-8 ${circleStyles}`}
        ></div>
      </div>
      <div className="md:pr-24 flex flex-col gap-6 sm:gap-10">
        <span className="text-preset-1 text-7xl text-orange-200">{num}</span>
        <h3 className={`text-preset-3 md:max-w-[10ch]`}>{title}</h3>
        <p className="text-preset-6">{text}</p>
      </div>
    </li>
  );
}

export default StepItem;
