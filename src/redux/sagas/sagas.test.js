import { call, put, takeEvery } from "redux-saga/effects";
import { setProducts } from "../actions/productActions";
import { LOAD_PRODUCTS } from "../constants";
import { fetchProducts, handleLoadProducts, loadProductsSaga } from "./sagas";

test("successfully calls API", async () => {
  // mock fetch API
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ id: 1, title: "Product #1" }),
    })
  );

  const data = await fetchProducts();
  expect(data).toEqual({ id: 1, title: "Product #1" });
  expect(fetch).toHaveBeenCalledTimes(1);
});

test("loadProductsSaga calls correct worker saga", () => {
  const generator = loadProductsSaga();
  expect(generator.next().value).toEqual(
    takeEvery(LOAD_PRODUCTS, handleLoadProducts)
  );
});

test("handleLoadProducts fetches data from API and dispatches a success action", () => {
  const generator = handleLoadProducts();

  expect(generator.next().value).toEqual(call(fetchProducts));
  expect(generator.next().value).toEqual(put(setProducts()));
  expect(generator.next()).toEqual({ done: true, value: undefined });
});
