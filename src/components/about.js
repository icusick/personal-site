import React, { Component } from 'react';
import '../index.css';

class About extends Component {
	render() {
		return (
			<div className="about-container">
				<div className="about-text">
					<div className={this.props.className}>
						<h3>About</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque felis non ligula malesuada placerat. Cras molestie nisi sed ligula blandit, a lobortis ligula blandit. Quisque porta leo ut lacus volutpat, vel sollicitudin dolor placerat. Sed gravida venenatis dui, at pharetra lorem tincidunt finibus</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;