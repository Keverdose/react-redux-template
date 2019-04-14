import * as React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import MainContainer from "../hocs/main-container"
import SampleActions from "../redux/sample.redux"
import Section from "../components/section"
import path from "ramda/es/path"

interface IProps extends IMapDispatch, IMapState {
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
    const { imageUrl } = this.props
    const renderImg: boolean = imageUrl ? true : false
    return (
      <Section flexDirection="column">
        {this.state.default}
        <Section>
          <button onClick={this.handleTest}>Test</button>
        </Section>
        {renderImg ? <img src={imageUrl} /> : <Section />}
      </Section>
    )
  }
}

interface IMapState {
  imageUrl: string | undefined
}

const mapStateToProps = (state: any) => ({
  imageUrl: path(["sample", "data"], state)
})

interface IMapDispatch {
  sampleTest: () => void
}

const mapDispatchToProps = (dispatch: any) => ({
  sampleTest: () => dispatch(SampleActions.sampleTestRequest())
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  MainContainer
)(MainScreen)
