import React from "react"
import MarkdowneyBullet from "./markdowneyBullet"

class TitleAndBullets extends React.Component {
  render() {
    let bullets = this.props.bullets
    let title = this.props.title
    return (
      <div className="titleAndBullets">
        <h1 className="sectionHeader">{title}</h1>
        <ul>
          {bullets.map((bullet) => {
            return (
              <li><MarkdowneyBullet text={bullet} /></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TitleAndBullets