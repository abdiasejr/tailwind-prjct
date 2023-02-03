export const FAQ = ({ children }) => {
  return (
    <div id="faq" className="flex w-full flex-col gap-5">
      <h2 className="mt-7 pl-7 text-2xl font-bold not-italic text-primary">
        FAQs
      </h2>
      {children}
    </div>
  );
};
