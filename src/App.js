import { Header, Main, Footer } from "./containers";
import { Recommended, Popular, FAQ } from "./components";
import { faqsList } from "./helpers/faqsList";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="m-auto max-w-screen-xl font-Montserrat">
      <Header />
      <NavBar />
      <Main>
        <Recommended />
        <Popular />
        <FAQ>
          <div className="flex w-full flex-col gap-3 px-7">
            {faqsList.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-primary">
                  {item.question}
                </h3>
                <p className="mr-8 text-xs font-medium text-black">
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
