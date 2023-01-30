import { cardList } from "../helpers/cardList";

export const Main = () => {
  return (
    <main className="flex w-full flex-col items-center gap-5">
      <div id="recommended" className="flex w-full flex-col gap-5 pl-5">
        <h2 className=" mt-7 text-2xl font-semibold not-italic  text-primary">
          Our Recomendations
        </h2>
        <div className=" flex h-72 w-auto flex-row items-center gap-5 overflow-x-auto overscroll-contain pr-5 ">
          {cardList.map((item, i) => (
            <div
              key={i}
              className={`h-64 w-48 flex-none rounded-lg ${
                i % 2 === 0
                  ? "bg-secondary text-white"
                  : "bg-white text-terciary"
              }`}
            >
              <div
                className={`h-3/5 w-full rounded-t-lg ${item.bg} bg-cover`}
              ></div>
              <h2 className="pl-3 pt-2 text-lg font-bold not-italic tracking-wide ">
                {item.title}
              </h2>
              <h3 className="pl-3 pt-0.5 text-sm font-medium not-italic">
                {item.subtitle}
              </h3>
            </div>
          ))}
          ;
        </div>
      </div>
      <div id="popular" className="flex w-full flex-col gap-5">
        <h2 className="mt-7 pl-5 text-2xl font-semibold not-italic text-primary">
          Trending Stays
        </h2>
        <div>
          {/* <CardList>
                <Card />
            </CardList>} */}
        </div>
      </div>
    </main>
  );
};
