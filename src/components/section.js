import React from "react"
import SubSection from "./subSection"

class Section extends React.Component {
  render() {
    let subSections = this.props.subSections
    let title = this.props.title
    console.log(subSections)
    return (
      <>
        <h1>{title}</h1>
        {subSections.map((subSection) => {
          return (
            <SubSection data={subSection} />
          )
        })}
      </>
    )
  }
}

export default Section