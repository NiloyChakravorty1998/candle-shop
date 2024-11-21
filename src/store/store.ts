// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { cartReducer } from './cartReducer';
// import { thunk } from 'redux-thunk';
import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

 
// const rootReducer = combineReducers({
//   cart: cartReducer,
// });
 
// export type RootState = ReturnType<typeof rootReducer>;
 
 
// export const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);
// export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
      cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;