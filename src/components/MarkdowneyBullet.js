import React from "react"
import remark from 'remark'
import remark2react from 'remark-react'

class MarkdowneyBullet extends React.Component {
  render() {
    return (<div>
      {
        remark()
          .use(remark2react)
          .processSync(this.props.text).contents
      }
    </div>)
  }
}

export default MarkdowneyBullet