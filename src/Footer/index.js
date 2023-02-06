import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './index.css';

export default function Footer() {
	return (
		<Row className='footer'>
			<Col lg={6}></Col>
			<Col lg={6}>
				<p className='footer-text'>© 2023 JIHAN ALL RIGHTS RESERVED</p>
			</Col>
		</Row>
	);
}
