import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
      </nav>
      <section>
        <h1>Product List</h1>
        <section className="ProductList">
          <article>
            <h2>Product 1</h2>
            <p>lorem</p>
          </article>
          <article>
            <h2>Product 1</h2>
            <p>lorem</p>
          </article>
          <article>
            <h2>Product 1</h2>
            <p>lorem</p>
          </article>
          <article>
            <h2>Product 1</h2>
            <p>lorem</p>
          </article>
        </section>
      </section>
      <aside>
        <div>
          <h2>Your Basket</h2>
          <p>3 items</p>
          <p>$420</p>
        </div>
        <h3>Checkout</h3>
        <form></form>
      </aside>
    </div>
  );
}

export default App;
