import { Header, Main, Footer, Nav } from "./containers";
import { Recommended, Popular, FAQ, NavBar } from "./components";
import { faqsList } from "./helpers/faqsList";

function App() {
  return (
    <div className="w-full font-Montserrat selection:bg-black selection:text-white">
      <Nav />
      <Header />
      <NavBar />
      <Main>
        <Recommended />
        <Popular />
        <FAQ>
          <div className="flex w-full flex-col gap-3 px-7">
            {faqsList.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-primary md:text-xl">
                  {item.question}
                </h3>
                <p className="mr-8 text-xs font-medium text-black md:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </FAQ>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
