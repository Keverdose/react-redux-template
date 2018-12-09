import createHistory from "history/createBrowserHistory"
import { routerMiddleware } from "connected-react-router"
import { applyMiddleware, compose, createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import createSagaMiddleware from "redux-saga"

import sagas from "./listeners"
import rootReducer from "./redux"

export const history = createHistory()

export default () => {
  const initialState = {}
  const enhancers: any[] = []
  const sagaMiddleware = createSagaMiddleware()

  const persistConfig = {
    key: "root",
    version: 1,
    storage
  }

  const middleware = [sagaMiddleware, routerMiddleware(history)]

  if (process.env.NODE_ENV === "development") {
    const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const persistedReducer = persistReducer(persistConfig, rootReducer(history))
  const store = createStore(persistedReducer, initialState, composedEnhancers)

  const persistor = persistStore(store)

  sagaMiddleware.run(sagas)

  return { store, persistor }
}
