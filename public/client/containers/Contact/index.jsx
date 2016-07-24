import React, {Component} from 'react'

class Contact extends Component {
  render() {
    const {children} = this.props
    let contactStyle = {
      width: '100%'
    }
    return (
      <img src="/img/contact-page.png" style={contactStyle} />
    )
  }
}

export default Contact
