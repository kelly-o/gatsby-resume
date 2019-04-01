import React from "react"
import remark from 'remark'
import remark2react from 'remark-react'

class MarkdowneyBullet extends React.Component {
  render() {
    return (
      remark()
        .use(remark2react)
        .processSync(this.props.text).contents
    )
  }
}

export default MarkdowneyBullet