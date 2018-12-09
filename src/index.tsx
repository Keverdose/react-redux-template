import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { default as configureStore, history } from "./store"

import "./index.css"
import { PersistGate } from "redux-persist/integration/react"

export const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
