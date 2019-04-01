import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ContactDetails from "../components/contactDetails"
import MarkdowneyBullet from "../components/MarkdowneyBullet"

let contactDetailsData = {
  phoneNumber: "+91-9871269578",
  email: "me@rmalhotra.com"
}
const IndexPage = () => (
  <>
    <ContactDetails phoneNumber={contactDetailsData.phoneNumber} email={contactDetailsData.email} />
    <SEO title="Robin Malhotra's résumé" keywords={[`Robin Malhotra`, `iOS Developer`, `resume`, `résumé`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ul>
        <li><MarkdowneyBullet text={"Hi *hello* _what's up_ [something](https://www.google.com)"}></MarkdowneyBullet></li>
      </ul>
    </div>
  </>
)

export default IndexPage
