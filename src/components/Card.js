export const Card = ({ item, flag, i }) => {
  return (
    <div
      className={`h-64 w-48 flex-none rounded-lg ${
        i % 2 === 0 ? "bg-secondary text-white" : "bg-white text-terciary"
      } transform transition-all hover:-translate-y-4 hover:shadow-xl`}
    >
      <div className={`h-3/5 w-full rounded-t-lg ${item.bg} bg-cover`}></div>
      <h2 className="pl-3 pt-2 text-lg font-bold not-italic tracking-wide ">
        {item.title}
      </h2>
      <h3 className="pl-3 pt-0.5 text-sm font-medium not-italic">
        {item.subtitle}
      </h3>
    </div>
  );
};
