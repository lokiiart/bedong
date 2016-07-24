import React, {Component} from 'react'

class GirlService extends Component {
  render() {
    const {children} = this.props
    let GirlServiceStyle = {
      width: '100%'
    }
    return (
      <img src="/img/girl-service-page.png" style={GirlServiceStyle} />
    )
  }
}

export default GirlService
