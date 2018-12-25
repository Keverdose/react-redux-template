import { createActions, createReducer } from "reduxsauce"

const { Types, Creators } = createActions(
  {
    sampleTestRequest: null,
    sampleTestSuccess: ["payload"],
    sampleTestFailure: ["error"]
  },
  {
    prefix: "SAMPLE_"
  }
)

export const SampleTypes = Types
export default Creators

const INITIAL_STATE = {
  data: [],
  error: null
}

const sampleTestRequest = (state: object) => ({
  ...state,
  fetching: true
})

const sampleTestSuccess = (state: object, { payload }: any) => ({
  ...state,
  fetching: false,
  data: payload
})

const sampleTestFailure = (state: object, { error }: any) => ({
  ...state,
  fetching: false,
  error
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAMPLE_TEST_REQUEST]: sampleTestRequest,
  [Types.SAMPLE_TEST_SUCCESS]: sampleTestSuccess,
  [Types.SAMPLE_TEST_FAILURE]: sampleTestFailure
})
