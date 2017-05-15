import React, {Component, PropTypes} from 'react';

import { Link } from 'react-router-dom';

class NavItem extends Component {
  render () {
    const { router } = this.context
    const { to } = this.props
    console.log( this.props )
    const isActive = this.props.location.indexOf( to ) != -1 ? true:false;

    return (
      <li className={isActive ? 'active' : ''}>
        <Link {...this.props} >Login</Link>
      </li>
    )
  }
}

export default NavItem