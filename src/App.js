import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: 0,
  };
  const basket = [1, 2, 3];
  return (
    <div className="App">
      <Nav />
      <ProductList product={product} />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
