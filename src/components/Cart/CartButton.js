import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const numberofiteams = useSelector((state) => state.toggle.cartIteams.length);

  const dispatch = useDispatch();
  const showCartHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberofiteams}</span>
    </button>
  );
};

export default CartButton;
