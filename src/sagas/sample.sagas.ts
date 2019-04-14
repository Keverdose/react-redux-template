import { path } from "ramda"
import { call, put } from "redux-saga/effects"
import SampleActions from "../redux/sample.redux"

export function* testApiEndpoint(api: any) {
  try {
    const response = yield call(api.sampleTest)
    if (!response.ok) {
      const errorMessage: string =
        path(["data", "error", "errorMessage"], response) || "UNKNOWN_ERROR"
      yield put(SampleActions.sampleTestFailure())
      throw new Error(errorMessage)
    }
    const data = path(["data", "url"], response)
    yield put(SampleActions.sampleTestSuccess(data))
  } catch (e) {
    console.error(e)
  }
}
