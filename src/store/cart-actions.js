import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cart-items-3a93a-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Some thing wrong ! coudnt fetch last cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          item: cartData.item || [],
          itemQuantity: cartData.itemQuantity,
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "sending cart data .... !",
      })
    );

    const sendResponse = async () => {
      const response = await fetch(
        "https://cart-items-3a93a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };
    try {
      sendResponse();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Successs...",
          message: "sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    }
  };
};

export default sendCartData;
