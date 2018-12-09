import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"
import { reducer as ui } from "./ui.redux"

export default combineReducers({
  router: routerReducer,
  ui
})
