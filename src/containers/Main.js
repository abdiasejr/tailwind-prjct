import { Card } from "../components/Card";
import { recomendedList } from "../helpers/recomendedList";
import { trendingList } from "../helpers/trendingList";

export const Main = () => {
  return (
    <main className="flex w-full flex-col items-center gap-5">
      <div id="recommended" className="flex w-full flex-col gap-5 pl-5">
        <h2 className=" mt-7 text-2xl font-semibold not-italic  text-primary">
          Our Recomendations
        </h2>
        <div className=" flex h-80 w-auto flex-row items-center gap-5 overflow-x-auto overscroll-contain pr-5 ">
          {recomendedList.map((item, i) => (
            <Card key={i} item={item} flag={true} i={i} />
          ))}
        </div>
      </div>
      <div id="popular" className="flex w-full flex-col gap-5">
        <h2 className="mt-7 pl-5 text-2xl font-semibold not-italic text-primary">
          Trending Stays
        </h2>
        <div className="flex w-full flex-col gap-5 px-7">
          {trendingList.map((item, i) => (
            <div
              key={i}
              className={`flex h-[28rem] w-full flex-col gap-3 pl-5 text-white ${
                item.bg
              } rounded-2xl bg-cover  pt-11 ${i < 3 && "bg-center"}`}
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="w-[12.5rem] text-base">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
