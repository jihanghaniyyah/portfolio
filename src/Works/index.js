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
			textAlign: 'center',
			borderColor: 'transparent',
		};
		const buttonDetail = {
			backgroundColor: 'transparent',
			borderColor: '#8095e2',
			color: '#8095e2',
		};
		return (
			<div className='works'>
				<NavigationBar />
				<Container>
					<h3 className='mt-5'>Website Applications</h3>
					<hr />
					<Row>
						<Col className='mt-4' lg={6}>
							<Card style={cardStyle}>
								<Card.Img variant='top' src={sipengmas} />
								<Card.Body>
									<Card.Title>SIPENGMAS</Card.Title>
									<Card.Text>ReactJS ● Bootstrap ● PHP Native ● Oracle</Card.Text>
									<Button style={buttonDetail} href='/works/sipengmas'>
										See Detail
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col className='mt-4' lg={6}>
							<Card style={cardStyle}>
								<Card.Img variant='top' src={siukm} />
								<Card.Body>
									<Card.Title>SI-UKM</Card.Title>
									<Card.Text>ReactJS ● Laravel ● Bootstrap ● MySQL</Card.Text>
									<Button style={buttonDetail} href='/works/siukm'>
										See Detail
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col className='mt-4' lg={6}>
							<Card style={cardStyle}>
								<Card.Img variant='top' src={pilkahimapsi} />
								<Card.Body>
									<Card.Title>Pilkahimapsi 2021</Card.Title>
									<Card.Text>Laravel ● Bootstrap ● MySQL</Card.Text>
									<Button style={buttonDetail} href='/works/pilkahimapsi'>
										See Detail
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col className='mt-4' lg={6}>
							<Card style={cardStyle}>
								<Card.Img variant='top' src={visitind} />
								<Card.Body>
									<Card.Title>VisitInd</Card.Title>
									<Card.Text>ReactJS ● Bootstrap</Card.Text>
									<Button style={buttonDetail} href='/works/visitind'>
										See Detail
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<Container>
					<h3 className='mt-5'>Mobile Applications</h3>
					<hr />
					<Row>
						<Col className='mt-4' xs={6} lg={2}>
							<Card style={cardStyle}>
								<Card.Img variant='top' src={sipengmasmobile} />
								<Card.Body>
									<Card.Title>SIPENGMAS</Card.Title>
									<Card.Text>Flutter ● PHP Native ● Oracle</Card.Text>
									<Button style={buttonDetail} href='/works/sipengmasmobile'>
										See Detail
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<Container>
					<Footer />
				</Container>
			</div>
		);
	}
}

export default Works;
