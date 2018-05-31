import React from 'react'
import './NavBar.css'


export function NavBar() {
  return (
    <nav id="navBar">
      <ButtonNav name="element1" link='#' />
      <ButtonNav name="Robbie" link='https://camcamcamcamcamcam.github.io/R0B0t_MAKING/'/>
      <ButtonNav name="My GitHub" link='https://github.com/benjictln'/>
    </nav>
  )
}

class ButtonNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href={this.props.link} className='nav-link'>{this.props.name}</a>)
  }
}
