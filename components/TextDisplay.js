import React, { Component } from 'react'

class TextDisplay extends Component {

  render() {
    return (
      <div>
        <div>Im displaying text from my parent: {this.props.text}</div>
      </div>
    )
  }
}
export default TextDisplay