import { trendingList } from "../mock/trendingList";
import { MainCard } from "./MainCard";

export const Popular = () => {
  return (
    <div id="popular" className="flex w-full flex-col gap-5 pb-12">
      <h2 className="mt-7 pl-5 text-2xl font-bold not-italic">
        Trending Stays
      </h2>
      <div className="flex w-full flex-col gap-5 px-7 md:grid md:grid-flow-row md:grid-cols-5 md:grid-rows-3 md:px-16">
        {trendingList.map((item, i) => (
          <MainCard key={i} item={item} i={i} />
        ))}
      </div>
    </div>
  );
};
