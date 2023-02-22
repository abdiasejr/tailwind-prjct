import { Header, Main, Footer, Nav } from "./containers";
import { Recommended, Popular, FAQ, NavBar } from "./components";
import { faqsList } from "./mock/faqsList";

function App() {
  return (
    <div className="w-full font-Montserrat text-primary selection:bg-black selection:text-white dark:bg-gray-900 dark:text-white">
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
                <h3 className="text-base font-semibold md:text-xl">
                  {item.question}
                </h3>
                <p className="mr-8 text-xs font-medium text-black dark:text-white md:text-base">
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
