export default function Product(props) {
  const color = props.soldOut ? "red" : "green";
  function handleClick() {
    console.log(props.id);
  }
  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
      <button onClick={handleClick}>Click me</button>
    </article>
  );
}
