import "./App.css";

function Nav() {
  return (
    <nav>
      <a href="/">Home</a>
    </nav>
  );
}
function Product(props) {
  console.log(props);
  return (
    <article>
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
    </article>
  );
}

function ProductList(props) {
  return (
    <section>
      <h1>Product List</h1>
      <section className="ProductList">
        <Product {...props.product} />
      </section>
    </section>
  );
}
function Basket(props) {
  return (
    <aside>
      <MyBasket basket={props.basket} />
      <CheckoutForm />
    </aside>
  );
}
function CheckoutForm() {
  return (
    <>
      <h3>Checkout</h3>
      <form></form>
    </>
  );
}

function MyBasket(props) {
  return (
    <div>
      <h2>Your Basket</h2>
      <p>{props.basket.length} items</p>
      <p>$420</p>
    </div>
  );
}
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
