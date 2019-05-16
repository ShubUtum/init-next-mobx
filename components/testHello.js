import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import testHello from "../components/testHello"

@inject("BaseStore")
@observer
class TestHello extends Component {
    componentDidMount() {
        this.props.BaseStore.start()
    }
    componentWillMount() {
        this.props.BaseStore.stop()
    }

    render() {
        return <div style={homeStyle}>{this.props.BaseStore.helloMsg}</div>
    }
}
