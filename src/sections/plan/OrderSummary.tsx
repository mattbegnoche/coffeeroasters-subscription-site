function OrderSummary() {
  return (
    <div className="flex flex-col gap-2 bg-neutral-900 rounded-[0.625rem] text-neutral-0 py-12 px-6 sm:px-12 md:px-16">
      <h2 className="text-preset-7">Order Summary</h2>
      <p className="text-preset-4">
        “I drink my coffee using _____, with a _____ type of bean. _____ , sent
        to me _____.”
      </p>
    </div>
  );
}

export default OrderSummary;
