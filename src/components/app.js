import React, { Component } from 'react';

import About from './about';
import Header from './header';


class App extends Component {
	constructor(){
		super();
		this.state = {
			className: 'hidden',
			classNameImg: 'hidden'
		}
		// this._handleScroll = this._handleScroll.bind(this);
	}

	_handleScroll() { 
    	if (document.documentElement.scrollY > 230) {
       		this.setState({className: 'show', classNameImg: 'bison-show'})
       		// console.log(document.documentElement.scrollTop)
     	} 
    }

	componentDidMount() {
		window.onscroll = () => this._handleScroll()		
	}

	render() {
		return(
			<div>
				<Header />
				<div className="row">
					<About className={this.state.className}/>
					<img className={this.state.classNameImg} src='../bison.png'></img>
				</div>
			</div>
			)
	}
}

export default App;

