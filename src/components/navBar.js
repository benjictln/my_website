import React from 'react'
import './NavBar.css'

export function NavBar() {
  return (
    <div>NavBar
      <ButtonNav name="element1" />
    </div>
  )
}

class ButtonNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<button>props.name</button>)
  }
}
