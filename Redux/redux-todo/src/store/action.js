import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementcounter = () => ({ type: INCREMENT });

export const decrementcounter = () => ({
  type: DECREMENT,
});
