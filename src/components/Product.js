export default function Product(props) {
  console.log(props);
  return (
    <article>
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
    </article>
  );
}
