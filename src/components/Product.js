export default function Product(props) {
  return (
    <article
      style={{
        backgroundColor: props.soldOut ? "red" : "green",
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
    </article>
  );
}
