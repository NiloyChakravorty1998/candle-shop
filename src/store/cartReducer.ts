// import { ProductCart } from "../components/Products/Types";
// import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes } from "./cartActions";

// interface CartState {
//   cart: ProductCart[],
// }

// const initialState: CartState = {
//   cart: [],
// };

// export const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return { ...state, cart: [...state.cart, action.payload] };

//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((product) => product.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// };
