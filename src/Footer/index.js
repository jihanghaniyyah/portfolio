import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Footer extends Component {
	render() {
		const footer = {
			position: 'sticky',
			height: '30px',
			width: '100%',
			color: 'white',
			textAlign: 'center',
		};
		const footerText = {
			color: '#0000008c',
			fontSize: '10px',
			fontWeight: '600',
			textAlign: 'right',
		};
		return (
			<Row className='mt-5' style={footer}>
				<Col lg={6}></Col>
				<Col lg={6}>
					<p style={footerText}>© 2023 JIHAN. ALL RIGHTS RESERVED</p>
				</Col>
			</Row>
		);
	}
}

export default Footer;
