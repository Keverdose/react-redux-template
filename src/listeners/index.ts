import { all } from "redux-saga/effects"

import SampleListeners from "./sample.listener"

export default function* root() {
  yield all([...SampleListeners])
}
