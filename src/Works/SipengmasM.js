import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer';
import NavigationBar from '../Navbar';
import sipengmas2 from '../assets/sipengmas/2.png';
import sipengmas21 from '../assets/sipengmas/2-1.png';
import sipengmas22 from '../assets/sipengmas/2-2.png';
import sipengmas23 from '../assets/sipengmas/2-3.png';

class SipengmasMobile extends Component {
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
					<h3 className='mt-5'>SIPENGMAS MOBILE</h3>
					<hr />
					<ul style={projectText}>
						<li>
							SIPENGMAS stands for Sistem Informasi Pengabdian Masyarakat. This
							website was developed for Politeknik Elektronika Negeri Surabaya (PENS)
							Campus to help internal to monitoring community service data
						</li>
						<li>SIPENGMAS was built in 2022 to fulfilling my Final Project</li>
						<li>
							I develop this project using Flutter for front-end and PHP Native for
							back-end
						</li>
					</ul>
					<Row className='mb-5' style={imageStyle}>
						<Col className='mt-4' xs={6} lg={3}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas2}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' xs={6} lg={3}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas21}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' xs={6} lg={3}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas22}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' xs={6} lg={3}>
							<Card style={imageStyle}>
								<Card.Img src={sipengmas23}></Card.Img>
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
								href='https://github.com/jihanghaniyyah/mobile-sipengmas.git'
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

export default SipengmasMobile;
