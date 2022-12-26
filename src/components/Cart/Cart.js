import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartStatus = useSelector((state) => state.toggle.toggleCart);

  const cartIteams = useSelector((state) => state.toggle.cartIteams);
  console.log(cartIteams);

  return (
    cartStatus && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartIteams.map((iteam) => (
            <CartItem
              key={iteam.id}
              item={{
                id: iteam.id,
                title: iteam.title,
                quantity: iteam.quantity,
                total: iteam.total,
                price: iteam.price,
              }}
            />
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;
