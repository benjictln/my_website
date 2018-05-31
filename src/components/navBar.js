import React from 'react'
import './NavBar.css'


export function NavBar() {
  return (
    <nav id="navBar">
      <ButtonNav name="element1" />
      <ButtonNav name="element2" />
    </nav>
  )
}

class ButtonNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href='https://www.google.fr' className='nav-link'>{this.props.name}</a>)
  }
}
