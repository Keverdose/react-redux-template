import * as React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import MainContainer from "../hocs/main-container"
import SampleActions from "../redux/sample.redux"
import Section from "../components/section"

interface IProps extends IMapDispatch {
  handleTest: () => void
}

interface IState {
  default: string
}

class MainScreen extends React.Component<IProps, IState> {
  public state: IState = {
    default: "MAIN SCREEN"
  }

  public handleTest = () => {
    const { sampleTest } = this.props
    sampleTest()
  }

  public render() {
    return (
      <Section>
        {this.state.default}
        <Section>
          <button onClick={this.handleTest}>Test</button>
        </Section>
      </Section>
    )
  }
}

interface IMapDispatch {
  sampleTest: () => void
}

const mapDispatchToProps = (dispatch: any) => ({
  sampleTest: () => dispatch(SampleActions.sampleTestRequest())
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  MainContainer
)(MainScreen)
