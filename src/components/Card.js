import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  // let foodItem = props.foodItems;
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handelAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  // let finalPrice = qty * parseInt(options[size]);
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHight: "360px" }}
        >
          <img
            src={props.foodItem.img}
            className="card-img-top"
            style={{ height: "200px", objectFit: "fill" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text fst-italic">{props.foodItem.description}</p>
            <div className="container w-100">
              <select
                className="m-2 h-100  bg-warning rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select
                className="m-2 h-100  bg-warning rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100  ">Rs{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button
              className={`btn bg-warning text-dark ms-2`}
              onClick={handelAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
