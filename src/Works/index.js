import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer';
import NavigationBar from '../Navbar';
import pilkahimapsi from '../assets/pilkahimapsi/1.png';
import sipengmas from '../assets/sipengmas/1.png';
import sipengmasmobile from '../assets/sipengmas/2.png';
import siukm from '../assets/siukm/1.png';
import visitind from '../assets/visitind/1.jpeg';
class Works extends Component {
	render() {
		const cardStyle = {
			borderColor: 'transparent',
			textAlign: 'center',
		};
		const buttonDetail = {
			backgroundColor: 'transparent',
			borderColor: '#8095e2',
			color: '#8095e2',
		};
		const backHomepage = {
			color: '#8095e2',
			fontSize: '14px',
			textDecoration: 'none',
		};
		const imageStyle = {
			height: '300px',
			objectFit: 'cover',
			width: '100%',
		};
		const textStyle = {
			color: '#000',
			textDecoration: 'none',
		};
		return (
			<div className='works'>
				<NavigationBar />
				<Container>
					<h3 className='mt-5'>Website Applications</h3>
					<hr />
					<Row>
						<Col className='mt-4' lg={6}>
							<a href='/works/sipengmas' style={textStyle}>
								<Card style={cardStyle}>
									<Card.Img style={imageStyle} src={sipengmas} variant='top' />
									<Card.Body>
										<Card.Title>SIPENGMAS</Card.Title>
										<Card.Text style={textStyle}>
											ReactJS · Bootstrap · PHP Native · Oracle
										</Card.Text>
										<Button style={buttonDetail}>See Detail</Button>
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col className='mt-4' lg={6}>
							<a href='/works/siukm' style={textStyle}>
								<Card style={cardStyle}>
									<Card.Img style={imageStyle} src={siukm} variant='top' />
									<Card.Body>
										<Card.Title>SI-UKM</Card.Title>
										<Card.Text>ReactJS · Laravel · Bootstrap · MySQL</Card.Text>
										<Button style={buttonDetail}>See Detail</Button>
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col className='mt-4' lg={6}>
							<a href='/works/pilkahimapsi' style={textStyle}>
								<Card style={cardStyle}>
									<Card.Img style={imageStyle} src={pilkahimapsi} variant='top' />
									<Card.Body>
										<Card.Title>Pilkahimapsi 2021</Card.Title>
										<Card.Text>Laravel · Bootstrap · MySQL</Card.Text>
										<Button style={buttonDetail} href='/works/pilkahimapsi'>
											See Detail
										</Button>
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col className='mt-4' lg={6}>
							<a href='/works/visitind' style={textStyle}>
								<Card style={cardStyle}>
									<Card.Img style={imageStyle} src={visitind} variant='top' />
									<Card.Body>
										<Card.Title>VisitInd</Card.Title>
										<Card.Text>ReactJS · Bootstrap</Card.Text>
										<Button style={buttonDetail} href='/works/visitind'>
											See Detail
										</Button>
									</Card.Body>
								</Card>
							</a>
						</Col>
					</Row>
				</Container>
				<Container>
					<h3 className='mt-5'>Mobile Applications</h3>
					<hr />
					<Row>
						<Col className='mt-4 mb-5' xs={6} lg={2}>
							<a href='/works/sipengmasmobile' style={textStyle}>
								<Card style={cardStyle}>
									<Card.Img variant='top' src={sipengmasmobile} />
									<Card.Body>
										<Card.Title>SIPENGMAS</Card.Title>
										<Card.Text>Flutter · PHP Native · Oracle</Card.Text>
										<Button style={buttonDetail} href='/works/sipengmasmobile'>
											See Detail
										</Button>
									</Card.Body>
								</Card>
							</a>
						</Col>
					</Row>
					<a href='/' style={backHomepage}>
						Back to homepage
					</a>
				</Container>
				<Container>
					<Footer />
				</Container>
			</div>
		);
	}
}

export default Works;
