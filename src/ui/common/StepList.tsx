function StepList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex flex-col md:flex-row gap-10 md:gap-0 items-center md:items-stretch">
      {children}
    </ul>
  );
}

export default StepList;
