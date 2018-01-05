import React, { Component } from 'react';

import Header from './header';

class NewApp extends Component {
	constructor(){
		super();
		this.state = {
			className: ''
		}
	}

	render() {
		return(
			<Header />
			)
	}
}

export default NewApp;