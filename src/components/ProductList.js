import Product from "./Product";
export default function ProductList(props) {
  return (
    <section>
      <h1>Product List</h1>
      <section className="ProductList">
        <Product {...props.product} />
      </section>
    </section>
  );
}
