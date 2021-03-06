import { fork,all } from 'redux-saga/effects';

import category from './category';
import user from './user';
import productlist from './productlist';
import manufacturers from './manufacturers';
import combinations from './combinations';
import currencies from './currencies';
import languages from './languages';
import product from './product';
import cms from './cms';
import cart from './cart';
import stores from './stores';
import homeslider from './homeslider';

export default function* rootSagas() {
  yield all([
      fork(category.saga),
      fork(user.saga),
      fork(productlist.saga),
      fork(combinations.saga),
      fork(manufacturers.saga),
      fork(currencies.saga),
      fork(product.saga),
      fork(languages.saga),
      fork(cms.saga),
      fork(cart.saga),
      fork(stores.saga),
      fork(homeslider.saga),
  ]);
}