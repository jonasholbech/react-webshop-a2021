import { useState } from "react";
export default function Product(props) {
  const [amount, setAmount] = useState(0);
  const color = props.soldOut ? "red" : "green";

  function minus() {
    setAmount((oldAmount) => {
      if (oldAmount > 0) {
        return oldAmount - 1;
      }
      return 0;
    });
  }
  function plus() {
    setAmount((oldAmount) => oldAmount + 1);
  }

  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
      <button onClick={minus}> - </button>
      {amount}
      <button onClick={plus}> + </button>
    </article>
  );
}
