function IconHamburger({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default IconHamburger;
