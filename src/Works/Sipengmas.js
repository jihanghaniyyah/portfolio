import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Navbar';
import sipengmas1 from '../assets/sipengmas/1-3.png';
import sipengmas11 from '../assets/sipengmas/1.png';
import sipengmas12 from '../assets/sipengmas/1-1.png';
import sipengmas13 from '../assets/sipengmas/1-2.png';
import Footer from '../Footer';

class Sipengmas extends Component {
	render() {
		const imageStyle = {
			borderColor: 'transparent',
		};
		const seeText = {
			color: '#8095e2',
			fontSize: '14px',
			textDecoration: 'none',
		};
		const projectText = {
			textAlign: 'justify',
			fontSize: '18px',
		};
		const githubText = {
			textAlign: 'right',
		};
		return (
			<div className='works'>
				<NavigationBar />
				<Container>
					<h3 className='mt-5'>SIPENGMAS</h3>
					<hr />
					<ul style={projectText}>
						<li>
							SIPENGMAS stands for Sistem Informasi Pengabdian Masyarakat. This
							website was developed for Politeknik Elektronika Negeri Surabaya (PENS)
							Campus to help internal to monitoring community service data
						</li>
						<li>SIPENGMAS was built in 2022 to fulfilling my Final Project</li>
						<li>
							I develop this project using ReactJS for front-end and PHP Native for
							back-end
						</li>
					</ul>
					<Row className='mb-5' style={imageStyle}>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas1}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas11}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas12}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas13}></Card.Img>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<a href='/works' style={seeText}>
								See my other projects
							</a>
						</Col>
						<Col style={githubText}>
							<a
								href='https://github.com/jihanghaniyyah/website-sipengmas.git'
								rel='noopener noreferrer'
								style={seeText}
								target='_blank'
							>
								See on GitHub
							</a>
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

export default Sipengmas;
