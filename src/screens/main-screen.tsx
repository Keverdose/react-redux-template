import * as React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import MainContainer from "../hocs/main-container"

interface IProps {
  getAuditLogs: any
}

interface IState {
  default: string
}

class MainScreen extends React.Component<IProps, IState> {
  public state: IState = {
    default: "MAIN SCREEN"
  }

  public render() {
    return <div>{this.state.default}</div>
  }
}

const mapDispatchToProps = (dispatch: any) => ({})

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  MainContainer
)(MainScreen)
