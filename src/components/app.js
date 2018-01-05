import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import $ from 'jquery';

import '../index.css';
import NavBar from './nav';

class App extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-light bg-faded navbar-fixed-top custom-nav"> 
  					<h1 className="navbar-brand mb-0">Personal Site</h1>
  					<div className="container">
  					   
      						
      						  <Link className="nav-item" activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Portfolio</Link>
      						
      						  <Link className="nav-item" activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>About</Link>
      						
      						  <Link className="nav-item" activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Contact</Link>
      						
   					</div>
				</nav>
				 
                
                
               
                <Element name="test1" className="element" >
        		  Portfolio
        		</Element>
		
        		<Element name="test2" className="element">
        		  About
        		</Element>
		
        		<Element name="test3" className="element">
        		  Contact
        		</Element>

			</div>
			)
	}
}

export default App;