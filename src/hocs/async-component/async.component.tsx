import * as React from "react"
import MainContainer from "../main-container"

const EmptyContainer = MainContainer()

export default (importedComponent: any) => {
  class AsyncComponent extends React.Component {
    public state = {
      component: null
    }

    public async componentDidMount() {
      const { default: component } = await importedComponent()

      this.setState({
        component
      })
    }

    public render() {
      const Component: any = this.state.component
      return Component ? <Component {...this.props} /> : <EmptyContainer />
    }
  }

  return AsyncComponent
}
