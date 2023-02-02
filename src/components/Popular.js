import { trendingList } from "../helpers/trendingList";
import { MainCard } from "./MainCard";

export const Popular = () => {
  return (
    <div id="popular" className="flex w-full flex-col">
      <h2 className="mt-7 pl-5 text-2xl font-bold not-italic text-primary">
        Trending Stays
      </h2>
      <div className="flex w-full flex-col gap-5 px-7">
        {trendingList.map((item, i) => (
          <MainCard key={i} item={item} i={i} />
        ))}
      </div>
    </div>
  );
};
