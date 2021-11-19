import { useState } from "react";
import ReactCardFlip from "react-card-flip";
export default function Product(props) {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const color = props.soldout ? "red" : "green";

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
    props.addToBasket({
      price: props.price,
      productdisplayname: props.productdisplayname,
      id: props.id,
    });
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <article
        style={{
          backgroundColor: color,
        }}
      >
        <h2 onClick={() => setFlipped(true)}>{props.productdisplayname}</h2>
        <p>${props.price}</p>
        <button onClick={minus} disabled={props.soldout || amount === 0}>
          {" "}
          -{" "}
        </button>
        {amount}
        <button onClick={plus} disabled={props.soldout}>
          {" "}
          +{" "}
        </button>
      </article>
      <article>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi
          at debitis totam officia, asperiores voluptatibus esse nulla nihil
          sunt quod quo eligendi id harum nobis veniam iste et tenetur.
        </p>
      </article>
    </ReactCardFlip>
  );
}
