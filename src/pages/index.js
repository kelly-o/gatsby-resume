import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ContactDetails from "../components/contactDetails"
import Section from "../components/section"

let contactDetailsData = {
  phoneNumber: "+91-9871269578",
  email: "me@rmalhotra.com"
}

let KayakoExperience = {
  heading: "Kayako",
  subtitle: "Mobile Engineer-iOS",
  location: "Delhi",
  dates: "Aug 2016 to Mar 2018",
  bullets: [
    "Built an enterprise agent app for support agents to easily communicate with customers in a chat like fashion. Consistently had a **<2% crash rate** and hundreds of satisfied enterprise users. As the app scaled, refactored bits of the app in **RxSwift** and moved some UI bits to **Texture**",
    "Also built an [Open Source SDK](https://developer.kayako.com/messenger/ios/installation/) for developers to integrate chat functionality in their apps",
    "Maintained a legacy **Objective-C** app , reducing crashes by **50% MoM**, added iPhone X support and fixed nasty [Core Data Bugs](https://oleb.net/blog/2013/02/nsfetchedresultscontroller-documentation-bug/)",
    "Here's a [twitter moment](https://twitter.com/i/moments/969158354252763136) showing off some of the things I'm most proud of."
  ]
}

let experienceSubSections = [KayakoExperience]
let experienceSection = { title: "Exeperience", subSections: experienceSubSections }

let IITEducation = {
  heading: "Indian Institute of Technology",
  subtitle: "Bachelors in Technology (Textile), Minor in Computer Science",
  location: "Delhi",
  dates: "2016",
  bullets: [
    "GPA: 8.19 on a ten point scale"
  ]
}

let educationSubsections = [IITEducation]
let educationSection = { title: "Education", subSections: educationSubsections }

let sections = [experienceSection, educationSection]

// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// </div> 
const IndexPage = () => (
  <>
    <ContactDetails phoneNumber={contactDetailsData.phoneNumber} email={contactDetailsData.email} />
    <SEO title="Robin Malhotra's résumé" keywords={[`Robin Malhotra`, `iOS Developer`, `resume`, `résumé`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {sections.map((section) => {
      return (
        <Section title={section.title} subSections={section.subSections} />
      )
    })}
  </>
)

export default IndexPage
