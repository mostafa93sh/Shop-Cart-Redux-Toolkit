import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuatity = useSelector((state) => state.cart.itemQuantity);

  const toggleHandlerCart = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandlerCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuatity}</span>
    </button>
  );
};

export default CartButton;
