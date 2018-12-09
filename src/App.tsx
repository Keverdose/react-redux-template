import * as React from "react"
import "./App.css"
import { Route, Switch } from "react-router"

class App extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" render={() => <div>Match</div>} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </div>
    )
  }
}

export default App
