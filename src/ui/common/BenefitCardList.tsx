function BenefitCardList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-col gap-6 md:flex-row md:gap-8 px-6 md:mx-auto max-w-280">
      {children}
    </ul>
  );
}

export default BenefitCardList;
