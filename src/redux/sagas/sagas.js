import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_PRODUCTS } from "../constants";
import { setProducts } from "../actions/productActions";

export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=7");
  const data = await res.json();
  return data;
}

// worker
export function* handleLoadProducts() {
  const data = yield call(fetchProducts);
  yield put(setProducts(data));
}

// watcher
export function* loadProductsSaga() {
  yield takeEvery(LOAD_PRODUCTS, handleLoadProducts);
}
