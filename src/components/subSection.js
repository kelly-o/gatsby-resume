import React from "react"
import MarkdowneyBullet from "./markdowneyBullet"

class SubSection extends React.Component {
  render() {
    let { bullets, heading, location, subtitle, dates } = this.props.data
    return (
      <>
        <h3>
          {heading}
        </h3>
        <div>
          {subtitle}
        </div>
        <div>
          {location}
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

export default SubSection