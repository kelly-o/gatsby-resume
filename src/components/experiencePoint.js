import React from "react"
import MarkdowneyBullet from "./markdowneyBullet"

class ExperiencePoint extends React.Component {
  render() {
    let { bullets, companyName, designation, dates } = this.props.data
    return (
      <>
        <h3>
          {companyName}
        </h3>
        <div>
          {designation}
        </div>
        <div>
          {dates}
        </div>

        <ul>
          {bullets.map((bullet) => {
            return (<li> <MarkdowneyBullet text={bullet} /> </li>)
          })}
        </ul>
      </>
    )
  }
}

export default ExperiencePoint