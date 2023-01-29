export const Card = ({ item, flag }) => {
  return (
    <div className={`h-64 w-48 rounded-lg bg-secondary`}>
      <div className={`h-3/5 rounded-t-lg bg-norway bg-cover`}></div>
      <h2 className="pl-3 pt-2 text-lg font-bold not-italic tracking-wide text-white">
        {item.title}
      </h2>
      <h3 className="pl-3 pt-0.5 text-sm font-medium not-italic text-white">
        {item.subtitle}
      </h3>
    </div>
  );
};
