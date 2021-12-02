import React from "react"

import SEO from "../components/seo"
import ContactDetails from "../components/contactDetails"
import Section from "../components/section"
import TitleAndBullets from "../components/titleAndBullets"
import "../components/template.css"

let contactDetailsData = {
  name: "Robin Malhotra",
  phoneNumber: "+91-9871269578",
  twitter: "@codeOfRobin",
  email: "me@rmalhotra.com",
}

let TwitterExperience = {
  heading: "Twitter",
  subtitle: "SWE II",
  location: "London, United Kingdom",
  dates: "Jan 2020 to present",
  bullets: [
    "Built features on the iOS app to surface relevant Spaces/Tweets/Topics based on user interest. Includes things like [topic sharing](https://i.imgur.com/n84NQ8x.png), Logging for the [COVID-19 prompt](https://i.imgur.com/Toy7If6.png), the Topic follow prompt [redesign](https://i.imgur.com/KR4l6m5.png), topic link rendering([much to the fanfare of some folks](https://twitter.com/jack/status/1345475499921870848?s=21)) and [Space Rings on Recent Searches](https://imgur.com/a/syohXIC)",
    "Created metrics for typeahead click rates on iOS, helping product teams prioritize fixes for typeahead and search on various parts of the app over the next 2 Quarters",
    "Built the data model for [Search on Spaces Tab](https://i.imgur.com/v5fadgX.jpeg), driving a significant amount of traffic towards Spaces via users searching for keywords.",
    "Added a [Did you find it?](https://imgur.com/a/lrLYKzn) prompt on iOS that lets users share feedback and gather metrics on how well search works.",
    "Currently the sole engineer a yet-to-be-released project on the iOS side of things, responsible for documentation, estimation, architecture, sharing progress with stakeholders while still maintaining code quality and testability.",
  ],
}

let GoJekExperience = {
  heading: "GO-JEK",
  subtitle: "Product Engineer",
  location: "Bangalore, India",
  dates: "Aug 2018 to Jan 2020",
  bullets: [
    "Refactored internal Auth SDK(the new version is _network layer independent_ and can be used with a range of HTTP layers like [`Alamofire`](https://github.com/Alamofire/Alamofire), [`Malibu`](https://www.github.com/hyperoslo/Malibu) and regular `URLSession`) and migrated to using a new backend service. Increased test coverage to **95%+** on the API Client as well as reduced number of LoCs from **11k+** to **~3k** by migrating away from VIPER to a simpler MVC pattern.",
    "Built an app from scratch in the [video streaming](https://apps.apple.com/id/app/goplay-watch-movies-series/id1445402611) space. Used [Rome](https://github.com/blender/Rome/) to point to remote instances of [minio](https://minio.io) to cache dependencies and reduce build times to ~7 minutes (a **90%** decrease).",
    "Set up continuous integration/continuous deployment pipelines  for the above app with Fastlane on Gitlab-CI to automatically test, build and deploy the app to Testflight.",
    'The app extensively uses the View Controller containment API to maintain testability and avoid Massive View Controllers. The "Home" screen is dynamically laid out based on server responses, based on ideas similar to [John Sundell\'s talk on Backend Driven UIs](https://www.youtube.com/watch?v=ypk-72mhYBk). In addition, I\'ve also built a "mock" target of the app that lets QA test layouts locally realtime by saving responses to a file and relaying those responses via a websocket server. [Demo video](https://gfycat.com/tepidseparatedachshund)',
    // "Explored new ways of creating dynamic scrolling UI in iOS, a topic that eventually morphed into my talk at iOSCon London, 2019.",
    // "Introduced ways to automate changes to self-hosted CI machines using Tmuxinator, instead of manually configuring CI machines individually.",
    'Architected a "Continue Watching" feature that worked across multiple devices and used a rudimentary sync algorithm alongside a local database.',
  ],
}

let KayakoExperience = {
  heading: "Kayako(pre-acquisition)",
  subtitle: "Mobile Engineer-iOS",
  location: "Delhi, India",
  dates: "Aug 2016 to June 2018",
  bullets: [
    "Sole engineer at [Kayako](http://web.archive.org/web/20180531182225/https://www.kayako.com/). Consistently had a **>99.5% crash-free rate** and thousands of satisfied enterprise customers",
    "Also built an [Open Source SDK](https://developer.kayako.com/messenger/ios/installation/) for developers to integrate customer support via chat in their apps.",
    // "Maintained a legacy **Objective-C** app , reducing crashes by **50% MoM**. Also, added iPhone X support and fixed a few [Core Data Bugs arising from bad indices](https://oleb.net/blog/2013/02/nsfetchedresultscontroller-documentation-bug/).",
    "[This twitter moment](https://twitter.com/i/moments/969158354252763136) highlights some of the work I did for Kayako that I’m most proud of. It shows various pieces of complex form-driven UI in the app, with lots of little UI touches added for that little bit of extra delight✨",
  ],
}

let experienceSubSections = [
  TwitterExperience,
  GoJekExperience,
  KayakoExperience,
]
let experienceSection = {
  title: "Experience",
  subSections: experienceSubSections,
}

let IITEducation = {
  heading: "Indian Institute of Technology",
  subtitle:
    "Bachelor of Technology (Textile Technology), Minor in Computer Science",
  location: "Delhi",
  dates: "2012-2016",
  bullets: ["GPA: 8.19/10.0"],
}

let educationSubsections = [IITEducation]
let educationSection = { title: "Education", subSections: educationSubsections }

let sections = [experienceSection, educationSection]

let publicAppearancesAndWriting = [
  '🎤 Spoke at [iOSCon 2019, London](https://twitter.com/skillsmatter/status/1110496380508884992) about "Cellular View Controllers".',
  "✍️ Wrote an [article](https://medium.com/flawless-app-stories/why-i-build-my-apps-using-texture-and-why-you-should-too-99587c73f278) about using Texture (formerly known as AsyncDisplayKit) in iOS apps that was moderately popular and also made it to [iOS dev weekly](https://iosdevweekly.com/issues/354).",
  '🎤 Spoke at [try! Swift India](https://www.tryswift.co/events/2017/bangalore/#codeofrobin) in Nov\' 2017 on "[Refactoring your app with Rx](https://www.youtube.com/watch?v=QB1btv-eI3Y)".',
  "👨🏽‍💻Conducted a workshop on [Advanced Unit Testing](https://mobile.twitter.com/swiftindiagroup/status/1154976781633490944) at [Swift India Conf, 2019](https://swiftindia.in/conference/2019/)",
  '👨🏽‍💻Wrote an article on [Safely securing secret variables](https://medium.com/flawless-app-stories/secret-variables-in-xcode-and-your-ci-for-fun-and-profit-d387a50475d7) on Travis CI and Xcode. Over 1,000 "claps" received and has appeared in [several iOS newsletters](https://gist.github.com/codeOfRobin/71b1b16b9fa4a812e2974bb199f53ae5).',
  // "[Regular](https://twitter.com/swiftindiagroup/status/959671228402454528) speaker [at the](https://twitter.com/_riteshhh/status/870897530719977472) Swift India [meetups](https://twitter.com/_riteshhh/status/837902266388500480).",
]

let publicStuffSection = {
  title: "Conference talks & articles",
  bullets: publicAppearancesAndWriting,
}

let ossProjectBullets = [
  "This very résumé is built in a résumé building app I'm working on that's both WYSIWYG and mobile responsive. [Sneak peek](https://twitter.com/codeOfRobin/status/969140950491713536).",
  'Built a ["Websocket cache"](https://github.com/codeOfRobin/Napolleon) using [Phoenix](https://phoenixframework.org), partly to explore [Elixir](https://elixir-lang.org) and functional programming on the server side. It\'s still early days, but quite enjoyable.',
  // "Added [CLI support](https://github.com/JohnSundell/SwiftPlate/pulls?q=is%3Apr+is%3Aclosed+author%3AcodeOfRobin) + [Homebrew support](https://github.com/Homebrew/homebrew-core/pull/8914) to Swiftplate by John Sundell.",
  // "Built a [NodeJS app](https://github.com/codeOfRobin/mathembed) that allows users to embed TeX equations in Medium articles.",
  // "Planning on building an [iOS UI magazine](https://twitter.com/codeOfRobin/status/1097066993046278145), that showcases popular iOS UI examples and how to build them. I've previously written an article on building [stretchy headers](https://medium.com/ios-os-x-development/recreating-spotify-s-tweetbot-s-artist-album-uitableview-8488979fc3e1#.b9ynyfn50), similar to Spotify and Tweetbot",
  // 'I felt most implementations of libraries that tried to "intelligently" diff tableViews such as [IGListKit](https://github.com/instagram/IGListKit), [RxDataSources](https://github.com/RxSwiftCommunity/RxDataSources/) or [ReactiveLists](https://github.com/plangrid/ReactiveLists/) were too heavy- handed / tightly coupled to UIKit so I wrote my own [40 line implelmentation](https://gist.github.com/codeOfRobin/99a91403d7f6545ec76bcd600de9c6be). As a-not-so-unexpected side effect, this also works with AsyncDisplayKit/Texture.',
  // "Built an [interaction layer](https://github.com/codeOfRobin/swiftopencv) between swift and OpenCV using an Objective-C++ bridging header. Also wrote a well received [article](https://medium.com/ios-os-x-development/the-fd4fcb249358) on it.",
  // "[Refactored](https://github.com/3lvis/Networking/pull/182/) bits and bobs in a popular networking library.",
]

let ossSection = {
  title: "Personal & Open Source Projects",
  bullets: ossProjectBullets,
}

let bulletSections = [publicStuffSection, , ossSection]

let housingExperience = {
  heading: "HOUSING.COM LABS, NEW DELHI",
  subtitle: "iOS Intern",
  location: "Delhi, India",
  dates: "Aug 2015 to Nov 2015",
  bullets: [
    "Helped develop Pipal (an app to aid communication in apartment complexes) in Swift 2.2.",
    "[Here](https://gfycat.com/reflectingflashydromaeosaur) are a [couple](https://gfycat.com/kindopendegu) of sneak peeks of the onboarding UI that I was responsible for.",
  ],
}

let abgExperience = {
  heading: "ADITYA BIRLA GROUP",
  subtitle: "Intern",
  location: "Bangalore, India",
  dates: "May 2015 to July 2015",
  bullets: [
    "Built a Production Optimisation System to generate manufacturing schedules from factory orders and automatically send them to concerned stakeholders.",
    "Built in Python3 using Flask, Numpy and Pandas.",
  ],
}

let paytmExperience = {
  heading: "PAYTM, ONE 97 INC",
  subtitle: "iOS Intern",
  location: "Delhi, India",
  dates: "Dec 2014 to Jan 2015",
  bullets: [
    "Worked on the Paytm Wallet iOS app - deals module and API integration. Built in **Objective-C** on the iOS 8 SDK.",
    'Featured all new design and interactions to enable new user experiences, including a "flat" Snapchat-like navigation.',
  ],
}

let internshipSubSections = [housingExperience, abgExperience, paytmExperience]
let internshipSection = {
  title: "Internships",
  subSections: internshipSubSections,
}

// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// </div>
const IndexPage = () => (
  <div
    className="resumeContainer"
    style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
  >
    <div className="resume">
      <ContactDetails
        name={contactDetailsData.name}
        phoneNumber={contactDetailsData.phoneNumber}
        email={contactDetailsData.email}
      />
      <SEO
        title="Robin Malhotra's résumé"
        keywords={[`Robin Malhotra`, `iOS Developer`, `resume`, `résumé`]}
      />
      {sections.map(section => {
        return (
          <Section title={section.title} subSections={section.subSections} />
        )
      })}

      {bulletSections.map(bulletSection => {
        return (
          <TitleAndBullets
            title={bulletSection.title}
            bullets={bulletSection.bullets}
          />
        )
      })}

      {/* <Section
        title={internshipSection.title}
        subSections={internshipSection.subSections}
      /> */}
    </div>

    <p className="Footer">
      Made with 💛 and Gatsby.js. Need a PDF?{" "}
      <a
        className="DownloadButton"
        href="https://www.dropbox.com/s/t0h9nhii0b42qt8/Robin%20Malhotra.pdf?dl=0"
      >
        Grab one here
      </a>
    </p>
  </div>
)

export default IndexPage
