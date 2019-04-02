import React from "react"
import MarkdowneyBullet from "./markdowneyBullet"

class SubSection extends React.Component {
  render() {
    let { bullets, heading, location, subtitle, dates } = this.props.data
    return (
      <>
        <div className="separated">
          <h3 className="sectionHeading">
            {heading}
          </h3>
          <div className="location">
            {location}
          </div>
        </div>
        <div className="separated">
          <div className="subtitle">
            {subtitle}
          </div>
          <div className="dates">
            {dates}
          </div>
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

export default SubSection