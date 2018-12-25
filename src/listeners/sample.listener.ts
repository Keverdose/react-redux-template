import { takeLatest } from "redux-saga/effects"
import api from "../services/api"

import { SampleTypes as Types } from "../redux/sample.redux"
import * as Sagas from "../sagas/sample.sagas"

export default [
  takeLatest(Types.SAMPLE_TEST_REQUEST, Sagas.testApiEndpoint, api)
]
