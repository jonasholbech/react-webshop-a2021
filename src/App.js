import "./App.css";

function Nav() {
  return (
    <nav>
      <a href="/">Home</a>
    </nav>
  );
}
function Product() {
  return (
    <article>
      <h2>Product 1</h2>
      <p>lorem</p>
    </article>
  );
}
function ProductList() {
  return (
    <section>
      <h1>Product List</h1>
      <section className="ProductList">
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </section>
  );
}
function Basket() {
  return (
    <aside>
      <div>
        <h2>Your Basket</h2>
        <p>3 items</p>
        <p>$420</p>
      </div>
      <h3>Checkout</h3>
      <form></form>
    </aside>
  );
}
function App() {
  return (
    <div className="App">
      <Nav />
      <ProductList />
      <Basket />
    </div>
  );
}

export default App;
