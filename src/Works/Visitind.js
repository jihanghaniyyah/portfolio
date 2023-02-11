import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Navbar';
import visitind1 from '../assets/visitind/1.jpeg';
import visitind11 from '../assets/visitind/1-1.jpeg';
import visitind12 from '../assets/visitind/1-2.jpeg';
import visitind13 from '../assets/visitind/1-3.jpeg';
import visitind2 from '../assets/visitind/2.jpeg';
import visitind21 from '../assets/visitind/2-1.jpeg';
import visitind3 from '../assets/visitind/3.jpeg';
import visitind31 from '../assets/visitind/3-1.jpeg';
import Footer from '../Footer';

class Visitind extends Component {
	render() {
		const clientText = {
			fontSize: '14px',
			fontStyle: 'italic',
			textAlign: 'center',
		};
		const imageStyle = {
			borderColor: 'transparent',
		};
		const otherProjectText = {
			color: '#8095e2',
			fontSize: '14px',
			textDecoration: 'none',
		};
		return (
			<div className='works'>
				<NavigationBar />
				<Container>
					<h3 className='mt-5'>VisitInd</h3>
					<hr />
					<ul>
						<li>
							VisitInd stands for Visit Indonesia, is a start-up tourism company
							established in 2021
						</li>
						<li>
							With the team, we develop 3 websites; a domain website and 2 sub-domain
							websites using ReactJS and Bootstrap <br />
							We developed company profile, tourism article, and job hiring websites
						</li>
					</ul>
					<Row className='mb-5' style={imageStyle}>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind1}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind11}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind12}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind13}></Card.Img>
							</Card>
						</Col>
					</Row>
					<p style={clientText}>company profile</p>
					<Row className='mb-5' style={imageStyle}>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind2}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind21}></Card.Img>
							</Card>
						</Col>
					</Row>
					<p style={clientText}>tourism article</p>
					<Row className='mb-5' style={imageStyle}>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind3}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={visitind31}></Card.Img>
							</Card>
						</Col>
					</Row>
					<p className='mb-5' style={clientText}>
						job hiring
					</p>
					<a href='/works' style={otherProjectText}>
						See my other projects
					</a>
				</Container>
				<Container>
					<Footer />
				</Container>
			</div>
		);
	}
}

export default Visitind;
