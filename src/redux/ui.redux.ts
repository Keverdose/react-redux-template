import { createActions, createReducer } from "reduxsauce"

const { Types, Creators } = createActions({
  setWindowInnerWidth: ["innerWidth"],
  setAsideState: ["bool"]
})

export const UITypes = Types
export default Creators

const INITIAL_STATE = {
  innerWidth: null,
  asideIsOpen: true
}

const setWindowInnerWidth = (
  state: typeof INITIAL_STATE,
  { innerWidth }: any
) => ({
  ...state,
  innerWidth
})

const setAsideState = (
  state: typeof INITIAL_STATE,
  { bool }: { bool: boolean }
) => ({
  ...state,
  asideIsOpen: bool
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WINDOW_INNER_WIDTH]: setWindowInnerWidth,
  [Types.SET_ASIDE_STATE]: setAsideState
})
