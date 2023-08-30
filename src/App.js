import "./App.css";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Products />
      <Categories />
    </div>
  );
}

export default App;
