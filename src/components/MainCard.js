export const MainCard = ({ item, i }) => {
  let className =
    i === 1
      ? "md:col-span-2"
      : i === 2
      ? "md:col-span-3"
      : i === 3
      ? "md:col-span-3"
      : "";
  return (
    <div
      key={item.title + i}
      className={` flex h-[28rem] w-full flex-col gap-3 pl-5 text-white ${item.bg} rounded-2xl  bg-cover  pt-11 dark:items-end dark:pr-5 dark:pt-5
    md:bg-center first:md:col-span-5 md:last:col-span-2 ${className}`}
    >
      <h3 className="text-2xl font-semibold">{item.title}</h3>
      <p className="w-[12.5rem] text-base">{item.subtitle}</p>
    </div>
  );
};
