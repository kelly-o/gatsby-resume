import React from "react"

class ContactDetails extends React.Component {
  render() {
    let { phoneNumber, email } = this.props
    return (
      <>
        <div>
          {phoneNumber}
        </div>
        <div>
          {email}
        </div>
      </>
    )
  }
}

export default ContactDetails