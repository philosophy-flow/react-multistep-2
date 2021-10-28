import productReducer from "./productReducer";
import { setProducts } from "../actions/productActions";

test("should return the initial state", () => {
  expect(productReducer(undefined, {})).toEqual([]);
});

test("should handle setting the products", () => {
  const previousState = [];
  const newData = ["Product #1", "Product #2"];
  expect(productReducer(previousState, setProducts(newData))).toEqual(newData);
});
