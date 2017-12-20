import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('appState') @observer
export default class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.isRequired,
  }
  componentDidMount() {
    // do something
  }
  render() {
    return (
      <div>{this.props.appState.msg}</div>
    )
  }
}
