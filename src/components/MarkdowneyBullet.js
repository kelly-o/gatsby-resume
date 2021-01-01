import React from "react"
import remark from 'remark'
import remark2react from 'remark-react'
import externalLinks from 'remark-external-links'

class MarkdowneyBullet extends React.Component {
  render() {
    return (
      remark()
        .use(externalLinks, { target: "_blank" })
        .use(remark2react)
        .processSync(this.props.text).result
    )
  }
}

export default MarkdowneyBullet