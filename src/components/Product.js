export default function Product(props) {
  const color = props.soldOut ? "red" : "green";
  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
    </article>
  );
}
