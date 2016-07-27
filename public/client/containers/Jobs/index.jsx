import React, {Component} from 'react'

class Jobs extends Component {
  render() {
    const {children} = this.props
    let JobsStyle = {
      width: '100%'
    }
    return (
      <img src="/img/jobs-page.png" style={JobsStyle} />
    )
  }
}

export default Jobs
