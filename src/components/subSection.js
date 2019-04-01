import React from "react"
import MarkdowneyBullet from "./markdowneyBullet"

class SubSection extends React.Component {
  render() {
    let { bullets, heading, location, subtitle, dates } = this.props.data
    return (
      <>
        <div className="separated">
          <h3 className="subtitle">
            {heading}
          </h3>
          <div>
            {location}
          </div>
        </div>
        <div className="separated">
          <div>
            {subtitle}
          </div>
          <div>
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