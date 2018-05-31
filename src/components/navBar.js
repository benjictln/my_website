import React from 'react'
import './NavBar.css'

export function NavBar() {
  return (
    <div id="navBar">
      <ButtonNav name="element1" />
      <ButtonNav name="element2" />
    </div>
  )
}

class ButtonNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<button>{this.props.name}</button>)
  }
}
