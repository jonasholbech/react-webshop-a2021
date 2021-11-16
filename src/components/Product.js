import { useState } from "react";
export default function Product(props) {
  const [message, setMessage] = useState("hi mom");

  const color = props.soldOut ? "red" : "green";
  function handleClick() {
    setMessage((prevState) => prevState + " and dad");
  }

  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>${props.price}</p>
      <button onClick={handleClick}>Click me </button>
      <div>{message}</div>
    </article>
  );
}
