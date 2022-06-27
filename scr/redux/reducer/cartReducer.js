import actions, {
  getAllProduct,
  addToCart,
  updateCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} from '../actions';

const initProduct = {
  numberCart: 0,
  Carts: [],
  cartPrice: 0,
};

export const getCartItem = (state = initProduct, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      if (state.numberCart == 0) {
        let item = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          url: action.payload.url,
          price: action.payload.price,
          brandname: action.payload.brandname,
          shippingcost: action.payload.shippingcost,
        };
        state.Carts.push(item);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity += 1;
            check = true;
          }
        });
        if (!check) {
          let item = {
            id: action.payload.id,
            name: action.payload.name,
            url: action.payload.url,
            quantity: 1,
            price: action.payload.price,
            brandname: action.payload.brandname,
            shippingcost: action.payload.shippingcost,
          };
          state.Carts.push(item);
        }
      }
      return {
        ...state,
        numberCart: (state.numberCart += 1),
      };
    case actions.INCREASE_QUANTITY:
      if (state.Carts[action.payload.key].quantity >= 1) {
        state.Carts[action.payload.key].quantity += 1;
        return {
          ...state,
          numberCart: (state.numberCart += 1),
        };
      }

      return {
        ...state,
      };
    case actions.DECREASE_QUANTITY:
      if (state.Carts[action.payload.key].quantity > 1) {
        state.Carts[action.payload.key].quantity -= 1;
        return {
          ...state,
          numberCart: (state.numberCart -= 1),
        };
      }
      if ((state.Carts[action.payload.key].quantity = 1)) {
        return {
          ...state,
          numberCart:
            state.numberCart - state.Carts[action.payload.key].quantity,

          Carts: state.Carts.filter(items => {
            return items.id != state.Carts[action.payload.key].id;
          }),
        };
      }

      return {
        ...state,
      };

    case actions.DELETE_CART:
      var item = state.Carts[action.payload.key];
      return {
        ...state,
        numberCart: state.numberCart - item.quantity,
        Carts: state.Carts.filter(items => {
          return items.id != item.id;
        }),
      };
    case actions.RESET_CART:
      return {numberCart: 0, Carts: [], cartPrice: 0};
    case actions.ADD_PRICE:
      return {
        ...state,
        cartPrice: action.payload.cartPrice,
      };
    default:
      return state;
  }
};

const userReducer = {getCartItem};
export default userReducer;
