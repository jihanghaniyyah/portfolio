import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Navbar';
import pilkahimapsi1 from '../assets/pilkahimapsi/1.png';
import pilkahimapsi11 from '../assets/pilkahimapsi/1-1.png';
import Footer from '../Footer';

class Pilkahimapsi extends Component {
	render() {
		const imageStyle = {
			borderColor: 'transparent',
		};
		const otherProjectText = {
			color: '#8095e2',
			fontSize: '14px',
			textDecoration: 'none',
		};
		const projectText = {
			textAlign: 'justify',
			fontSize: '18px',
		};
		return (
			<div className='works'>
				<NavigationBar />
				<Container>
					<h3 className='mt-5'>Pilkahimapsi 2021</h3>
					<hr />
					<ul style={projectText}>
						<li>
							Pilkahimapsi stands for Pemilihan Ketua Himpunan Mahasiswa Psikologi.
							This event was held by Himpunan Mahasiswa Psikologi, Brawijaya
							University
						</li>
						<li>I developed the front-end client side of the website</li>
						<li>To develop this website, I used Laravel and Bootstrap</li>
					</ul>

					<Row className='mb-5' style={imageStyle}>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={pilkahimapsi1}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={pilkahimapsi11}></Card.Img>
							</Card>
						</Col>
					</Row>
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

export default Pilkahimapsi;
