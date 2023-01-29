import { Card } from "../components/Card";

export const Main = () => {
  return (
    <main className="flex w-full flex-col items-center gap-5">
      <div id="recommended" className="flex w-full flex-col gap-5 pl-5">
        <h2 className=" mt-7 text-2xl font-semibold not-italic  text-primary">
          Our Recomendations
        </h2>
        <Card
          item={{
            bg: "norway",
            title: "Norway",
            subtitle: "Beautiful landscapes",
          }}
          flag={true}
        />
        {/* <CardList>
            <Card />g
          </CardList> */}
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
