import { SET_PRODUCTS } from "../constants";

export function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    data,
  };
}
