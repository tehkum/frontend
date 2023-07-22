import { useNavigate } from "react-router-dom";
import "./Productcard.css";
import { useContext } from "react";
import { useCart } from "../Context/CartProvider";

export default function Productcard(props) {
  // eslint-disable-next-line react/prop-types
  const { _id, name, image1, category, price } = props;
  const { clicked } = useContext(useCart);
  const navigate = useNavigate();

  const setCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const items = cart?.find((item) => item._id === _id);
    if (items) {
      // items.qty =
      //   (cart?.find((item) => item._id === _id)?.qty ?? 1) + 1;
      items.qty += 1;
      localStorage.setItem("cart", JSON.stringify([...cart]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...props, qty: 1 }])
      );
    }
  };

  const redirectTo = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className="q7Card">
      <img src={image1} alt="..." onClick={redirectTo} />

      {/* <Link
        to={`/product/${_id}`}
        style={{ color: "black", textDecoration: "none" }}
      > */}
      <div className="q7Cont" onClick={redirectTo}>
        <div>
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
        <p>₹ {price}</p>
      </div>
      {/* </Link> */}
      <button className="q7-view-btn">View Product</button>
      <button
        className="q7-btn"
        onClick={() => {
          setCart();
          clicked();
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
