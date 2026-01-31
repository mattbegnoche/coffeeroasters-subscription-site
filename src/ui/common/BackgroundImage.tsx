const smBreakpoint = getComputedStyle(document.documentElement)
  .getPropertyValue("--breakpoint-sm")
  .trim();
const mdBreakpoint = getComputedStyle(document.documentElement)
  .getPropertyValue("--breakpoint-md")
  .trim();

// type ImagePath = `${string}.${"jpg" | "jpeg" | "png" | "webp"}`;

function BackgroundImage({
  desktopImage,
  tabletImage,
  mobileImage,
}: {
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
}) {
  return (
    <picture className="absolute left-0 top-0 h-full w-full">
      <source
        media={`(min-width: ${mdBreakpoint || "44rem"})`}
        srcSet={desktopImage}
      />
      <source
        media={`(min-width: ${smBreakpoint || "21.4rem"})`}
        srcSet={tabletImage}
      />
      <img
        className="h-full w-full object-cover"
        src={mobileImage}
        alt="Coffee Press"
      />
    </picture>
  );
}

export default BackgroundImage;
