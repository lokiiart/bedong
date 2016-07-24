import React, {Component} from 'react'

class About extends Component {
  render() {
    const {children} = this.props
    let AboutStyle = {
      width: '100%'
    }
    return (
      <img src="/img/about-page.png" style={AboutStyle} />
    )
  }
}

export default About
