import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-red-100 flex flex-col min-h-screen max-w-screen-md mx-auto">
      <Header />
      <section className="bg-green-100 grow px-2">
        <CardList />
      </section>
      <Footer />
    </div>
  );
};

export default App;
