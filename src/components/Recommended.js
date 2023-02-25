import { recommendedList } from "../mock/recommendedList";
import { Card } from "./Card";

export const Recommended = () => {
  return (
    <div id="recommended" className="flex w-full flex-col gap-5 pl-5">
      <h2 className=" mt-7 text-2xl font-bold not-italic">
        Our Recomendations
      </h2>
      <div className=" flex h-80 w-auto flex-row items-center gap-5 overflow-x-auto overscroll-contain pr-5 lg:h-96 lg:overflow-y-hidden ">
        {recommendedList.map((item, i) => (
          <Card key={i} item={item} i={i} />
        ))}
      </div>
    </div>
  );
};
