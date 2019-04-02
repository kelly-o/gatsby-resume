import React from "react"

import SEO from "../components/seo"
import ContactDetails from "../components/contactDetails"
import Section from "../components/section"
import TitleAndBullets from "../components/titleAndBullets"
import "../components/template.css"

let contactDetailsData = {
  name: "Robin Malhotra",
  phoneNumber: "+91-9871269578",
  email: "me@rmalhotra.com"
}

let GoJekExperience = {
  heading: "GO-JEK",
  subtitle: "Product Engineer",
  location: "Bangalore, India",
  dates: "Aug 2018 to present",
  bullets: [
    "Built an app from scratch in the video streaming space. Currently in internal alpha. Uses [Rome](https://github.com/blender/Rome/) to point to remote instances of [minio](minio.io) to cache dependencies and reduce build times to ~15 minutes(a 75% decrease). Setup Continuous Integration/Continuous Deployment pipeline with fastlane on gitlab-ci to automatically test, build and deploy the app to Testflight. Extensively uses the View Controller containement API to maintain testability and avoid Massive View Controllers.",
    "Refactored internal Auth SDK and migrated to using a new backend service. Increased test coverage to **95%+** on the networking stack as well as reduced number of LoCs from 11k+ to ~3k by migrating away from VIPER to a simpler MVC pattern.",
    "Introduced ways to automate changes to self-hosted CI machines using Tmuxinator, instead of manually configuring CI machines."
  ]
}

let KayakoExperience = {
  heading: "Kayako",
  subtitle: "Mobile Engineer-iOS",
  location: "Delhi, India",
  dates: "Aug 2016 to June 2018",
  bullets: [
    "Built an enterprise agent app from scratch for support agents to easily communicate with customers in a chat like fashion. Consistently had a **<0.5% crash rate** and hundreds of satisfied enterprise users. As the app scaled, refactored various parts to use more idiomatic reactive patterns in **RxSwift** to increase testability and moved some parts of the UI to **Texture** to maximize performance.",
    "Also built an [Open Source SDK](https://developer.kayako.com/messenger/ios/installation/) for developers to integrate chat functionality in their apps",
    "Maintained a legacy **Objective-C** app , reducing crashes by **50% MoM**, added iPhone X support and fixed a few [Core Data Bugs arising from bad indices](https://oleb.net/blog/2013/02/nsfetchedresultscontroller-documentation-bug/).",
    "Here's a [twitter moment](https://twitter.com/i/moments/969158354252763136) showing off some of the things I'm most proud of."
  ]
}

let experienceSubSections = [GoJekExperience, KayakoExperience]
let experienceSection = { title: "Experience", subSections: experienceSubSections }

let IITEducation = {
  heading: "Indian Institute of Technology",
  subtitle: "Bachelor of Technology (Textile Technology), Minor in Computer Science",
  location: "Delhi",
  dates: "2012-2016",
  bullets: [
    "GPA: 8.19/10.0"
  ]
}

let educationSubsections = [IITEducation]
let educationSection = { title: "Education", subSections: educationSubsections }

let sections = [experienceSection, educationSection]

let publicAppearancesAndWriting = [
  "🎤 I spoke at [iOSCon 2019, London](https://twitter.com/skillsmatter/status/1110496380508884992) about \"Cellular View Controllers\".",
  "✍️ Wrote an article about using Texture(formerly known as AsyncDisplayKit) in iOS apps that was moderately popular and also made it to [iOS dev weekly](https://iosdevweekly.com/issues/354).",
  "🎤 I spoke at [try! Swift India](https://www.tryswift.co/events/2017/bangalore/#codeofrobin) in November 2017 on \"[Refactoring your app using Rx](https://www.youtube.com/watch?v=QB1btv-eI3Y)\".",
  "👨🏽‍💻Wrote an article on [Safely securing secret variables](https://medium.com/flawless-app-stories/secret-variables-in-xcode-and-your-ci-for-fun-and-profit-d387a50475d7) on Travis CI and Xcode. Over 1,000 \"claps\" received and has appeared in [several iOS newsletters](https://gist.github.com/codeOfRobin/71b1b16b9fa4a812e2974bb199f53ae5).",
  "I've been a [regular](https://twitter.com/swiftindiagroup/status/959671228402454528) speaker [at the](https://twitter.com/_riteshhh/status/870897530719977472) Swift India [meetups](https://twitter.com/_riteshhh/status/837902266388500480)."
]

let publicStuffSection = { title: "Public talks and articles I've written", bullets: publicAppearancesAndWriting }

let ossProjectBullets = [
  "I'm currently working on a \"Websocket cache\" using [Phoenix](https://phoenixframework.org), partly to explore [Elixir](https://elixir-lang.org) and Functional Programming on the server side. It's still early days, but quite enjoyable.",
  "This very résumé is built in a résumé building app I'm working on that's both WYSIWYG and mobile responsive. It's not quite shippable yet but [here's](https://twitter.com/codeOfRobin/status/969140950491713536) a sneak peek.",
  "I'm planning on building an [iOS UI magazine](https://twitter.com/codeOfRobin/status/1097066993046278145), that showcases popular iOS UI examples and how to build them.",
  "Added [CLI support](https://github.com/JohnSundell/SwiftPlate/pulls?q=is%3Apr+is%3Aclosed+author%3AcodeOfRobin) + [Homebrew support](https://github.com/Homebrew/homebrew-core/pull/8914) to Swiftplate by John Sundell.",
  "[Refactored](https://github.com/3lvis/Networking/pull/182/) bits and bobs in a popular networking library.",
  "Built a [NodeJS app](https://github.com/codeOfRobin/mathembed) that allows users to embed TeX equations in Medium articles.Approved by embed.ly.",
  "I felt most implementations of libraries that tried to \"intelligently\" diff tableViews such as [IGListKit](https://github.com/instagram/IGListKit), [RxDataSources](https://github.com/RxSwiftCommunity/RxDataSources/) or [ReactiveLists](https://github.com/plangrid/ReactiveLists/) were too heavy- handed / tightly coupled to UIKit so I wrote my own [40 line implelmentation](https://gist.github.com/codeOfRobin/99a91403d7f6545ec76bcd600de9c6be). As a-not-so-unexpected side effect, this also works with AsyncDisplayKit/Texture.",
  "Built an interaction layer between swift and OpenCV using an Objective-C++ bridging header."
]

let ossSection = { title: "Personal & Open Source Projects", bullets: ossProjectBullets }

let bulletSections = [publicStuffSection, ossSection]

// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// </div> 
const IndexPage = () => (
  <div className="resumeContainer" style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>
    <div className="resume">
      <ContactDetails name={contactDetailsData.name} phoneNumber={contactDetailsData.phoneNumber} email={contactDetailsData.email} />
      <SEO title="Robin Malhotra's résumé" keywords={[`Robin Malhotra`, `iOS Developer`, `resume`, `résumé`]} />
      {sections.map((section) => {
        return (
          <Section title={section.title} subSections={section.subSections} />
        )
      })}

      {bulletSections.map((bulletSection) => {
        return (
          <TitleAndBullets title={bulletSection.title} bullets={bulletSection.bullets} />
        )
      })}
    </div>

    <p className="Footer">Made with 💛 and GatsbyJS. Need a PDF? <a className="DownloadButton" href="https://www.dropbox.com/s/1o24vryimghp6w2/Robin%20Malhotra%27s%20r%C3%A9sum%C3%A9.pdf?dl=0">Grab one here</a></p>
  </div>
)

export default IndexPage
