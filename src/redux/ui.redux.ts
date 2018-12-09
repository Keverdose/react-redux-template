import { createActions, createReducer } from "reduxsauce"

const { Types, Creators } = createActions({
  setWindowInnerWidth: ["innerWidth"]
})

export const UITypes = Types
export default Creators

const INITIAL_STATE = {
  innerWidth: null
}

const setWindowInnerWidth = (
  state: typeof INITIAL_STATE,
  { innerWidth }: any
) => ({
  ...state,
  innerWidth
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WINDOW_INNER_WIDTH]: setWindowInnerWidth
})
