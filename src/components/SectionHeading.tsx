type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-[#0a0118]/75 px-6 py-5 text-sm font-bold uppercase tracking-widest text-slate-200 backdrop-blur lg:sr-only">
      {children}
    </h2>
  );
}
