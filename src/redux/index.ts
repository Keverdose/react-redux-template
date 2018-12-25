import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import { reducer as ui } from "./ui.redux"
import { reducer as sample } from "./sample.redux"

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    ui,
    sample
  })
