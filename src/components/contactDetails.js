import React from "react"

class ContactDetails extends React.Component {
  render() {
    let { name, phoneNumber, email } = this.props
    return (
      <div className="contactDetails">
        <h1>{name}</h1>
        <div className="centeredFlex">
          <div className="phone">
            <a href={"tel:" + phoneNumber}>{phoneNumber}</a>
          </div>
          <span>|</span>
          <div className="email">
            <a href={"mailto:" + email}>{email}</a>
          </div>
          <span>|</span>
          <div className="twitter">
            <a href="https://twitter.com/codeOfRobin/" target="_blank">
              Twitter
            </a>
          </div>
          <span>|</span>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/robin-malhotra/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <span>|</span>
          <div className="linkedin">
            <a href="https://github.com/codeOfRobin" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactDetails
