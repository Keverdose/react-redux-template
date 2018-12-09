import * as React from "react"
import "./App.css"
import { Route, Switch } from "react-router"
import AsyncComponent from "./hocs/async-component"

const MainScreen = AsyncComponent(() => import("./screens/main-screen"))

class App extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={MainScreen} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </div>
    )
  }
}

export default App
