import React from "react"
import SubSection from "./subSection"

class Section extends React.Component {
  render() {
    let subSections = this.props.subSections
    let title = this.props.title
    return (
      <div className="section">
        <h1 className="sectionHeader">{title}</h1>
        {subSections.map((subSection) => {
          return (
            <SubSection data={subSection} />
          )
        })}
      </div>
    )
  }
}

export default Section