import React from "react"

class ContactDetails extends React.Component {
  render() {
    let { name, phoneNumber, email } = this.props
    return (
      <div className="contactDetails">
        <h1>
          {name}
        </h1>
        <div className="centeredFlex">
          <div className="phone">
            <a href={"tel:" + phoneNumber}>{phoneNumber}</a>
          </div>
          <span>|</span>
          <div className="email">
            <a href={"mailto:" + email}>{email}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactDetails