import React, {Component} from 'react'

class Service extends Component {
  render() {
    const {children} = this.props
    let ServiceStyle = {
      width: '100%'
    }
    return (
      <img src="/img/service-page.png" style={ServiceStyle} />
    )
  }
}

export default Service
