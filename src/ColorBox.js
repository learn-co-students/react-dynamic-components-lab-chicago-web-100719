import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>   
      {/* //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string */}
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null}
      </div>
    )
  }

}

