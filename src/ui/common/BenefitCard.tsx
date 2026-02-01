function BenefitCard({
  icon,
  benefit,
  description,
}: {
  icon: React.ReactNode;
  benefit: string;
  description: string;
}) {
  return (
    <li className="bg-teal-600 text-neutral-50 rounded-lg py-6 px-1.5 sm:py-10 sm:px-12 md:px-8 flex flex-col gap-6 items-center text-center sm:flex-row sm:text-left sm:gap-12 md:flex-col md:text-center">
      <div className="text-orange-200 max-w-15 md:max-w-18">{icon}</div>
      <div>
        <h3 className="text-preset-4 mb-3 md:mb-6">{benefit}</h3>
        <p className="text-preset-6">{description}</p>
      </div>
    </li>
  );
}

export default BenefitCard;
