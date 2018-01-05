import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
			<Navbar>
    			<Navbar.Header>
    			  <Navbar.Brand>
    			    <a href="#">Isabel Cusick</a>
    			  </Navbar.Brand>
    			</Navbar.Header>
    			<Nav>
    				<NavItem>Something</NavItem>
    				<NavItem>Something Else</NavItem>
    			</Nav>
  			</Navbar>
			)
	}
}

export default NavBar;