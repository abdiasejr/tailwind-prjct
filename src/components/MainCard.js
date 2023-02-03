export const MainCard = ({ item, i }) => (
  <div
    key={i}
    className={`flex h-[28rem] w-full flex-col gap-3 pl-5 text-white ${
      item.bg
    } rounded-2xl bg-cover  pt-11 ${i < 3 && "bg-center"}`}
  >
    <h3 className="text-2xl font-semibold">{item.title}</h3>
    <p className="w-[12.5rem] text-base">{item.subtitle}</p>
  </div>
);
