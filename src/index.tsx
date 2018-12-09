import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { default as configureStore, history } from "./store"

import "./index.css"

export const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
