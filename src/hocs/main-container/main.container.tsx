import { path } from "ramda"
import * as React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import Section from "../../components/section"
import Actions from "../../redux/ui.redux"

export default (Component?: any) => {
  interface IProps extends IMapState {
    setWindowInnerWidth: (innerWidth: number) => void
  }

  class MainWrapper extends React.PureComponent<IProps> {
    public handleSetInnerWidth = () => {
      this.props.setWindowInnerWidth(window.innerWidth)
    }

    public componentDidMount() {
      this.handleSetInnerWidth()
      window.addEventListener("resize", this.handleSetInnerWidth)
    }

    public componentWillUnmount() {
      window.removeEventListener("resize", this.handleSetInnerWidth)
    }

    public render() {
      return (
        <Section
          style={{
            padding: "50px 60px",
            width: "inherit",
            backgroundColor: "#F7F7F7"
          }}
        >
          {Component && <Component {...this.props} />}
        </Section>
      )
    }
  }

  interface IMapState {
    innerWidth: number
    asideIsOpen: boolean
    hivePermissions: object[]
    currentUser: string
  }

  const mapStateToProps = (state: any) => ({
    innerWidth: path(["innerWidth"], state.ui),
    asideIsOpen: path(["asideIsOpen"], state.ui)
  })

  const mapDispatchToProps = (dispatch: any) => ({
    setWindowInnerWidth: (innerWidth: number) =>
      dispatch(Actions.setWindowInnerWidth(innerWidth))
  })
  return compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(MainWrapper)
}
