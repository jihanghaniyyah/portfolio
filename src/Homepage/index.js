import React, { Component } from 'react';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import NavigationBar from '../Navbar';
import ProfilePhoto from '../assets/eunchae.png';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import Footer from '../Footer';

class Homepage extends Component {
	render() {
		const emailText = {
			color: '#000',
			textDecoration: 'none',
		};
		const logoLinkedinGithub = {
			color: '#000',
		};
		const profilePhoto = {
			verticalAlign: 'middle',
			margin: 'auto',
		};
		const seeMyWorkscontactMeButton = {
			backgroundColor: '#8095e2',
			borderColor: '#8095e2',
		};
		const myResumeButton = {
			backgroundColor: 'transparent',
			borderColor: '#8095e2',
			color: '#8095e2',
		};
		return (
			<div className='Homepage'>
				<NavigationBar />
				<Container>
					<Row>
						<Col sm={12} xl={6} className='introduction'>
							<h1 className='mt-5'>Hi!</h1>
							<h1 className='mt-5'>
								I'm <b style={{ color: '#8095E2' }}>Jihan Ghaniyyah</b>
							</h1>
							<h1>
								<b style={{ color: '#8095E2' }}>Putri Arrochim</b>
							</h1>
							<h5 className='mt-5'>Fresh Graduate Informatics Engineering Student</h5>
							<p>
								I have various experiences in Website Development for 2 years and
								had familiarity with ReactJS and Laravel. I enjoy learning about
								UI/UX design in free time. I love collaborating and making
								connections.
							</p>
							<Row>
								<Col xs={6} lg={3} className='d-flex justify-content-left'>
									<Button
										className='mt-3 mb-5'
										style={seeMyWorkscontactMeButton}
										href='https://api.whatsapp.com/send/?phone=6281230210480&text&type=phone_number&app_absent=0'
										rel='noopener noreferrer'
										target='_blank'
									>
										Contact Me
									</Button>
								</Col>
								<Col xs={6} lg={3} className='d-flex justify-content-left'>
									<Button
										className='mt-3 mb-5'
										style={myResumeButton}
										href='/resume'
									>
										My Resume
									</Button>
								</Col>
							</Row>
						</Col>
						<Col className='d-flex justify-content-center' style={profilePhoto}>
							<Image src={ProfilePhoto} />
						</Col>
					</Row>
				</Container>
				<Container className='mt-5'>
					<div className='col-lg-6 service-offers'>
						<h1>What Can I Do</h1>
						<h5 className='mb-4'>Service Offers</h5>
						<p>
							<b>FRONTEND APPS</b>
						</p>
						<p>
							Build client-side applications with modern features like SPA and
							maintain semantic coding style among other best practices for SEO
							optimisation. Use modern tech such as React.js, Laravel, and HTML CSS.
						</p>
						<p>
							<b>NATIVE APPS</b>
						</p>
						<p>
							Use Flutter for building simple native mobile applications. Flutter is
							modern, fast, cross-platform, and popular.
						</p>
						<Button
							className='mt-3 mb-5'
							style={seeMyWorkscontactMeButton}
							href='/works'
						>
							See My Projects
						</Button>
					</div>
				</Container>
				<Container>
					<div className='my-5' style={{ textAlign: 'center' }}>
						<h5>Stay Connected</h5>
						<a
							style={emailText}
							href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jghaniyyah@gmail.com'
							rel='noopener noreferrer'
							target='_blank'
						>
							jghaniyyah@gmail.com
						</a>
						<p className='mt-4'>Surabaya, Indonesia</p>
						<h2 className='d-flex justify-content-center' style={logoLinkedinGithub}>
							<a
								href='https://www.linkedin.com/in/jihanghaniyyah/'
								rel='noopener noreferrer'
								target='_blank'
							>
								<IoLogoLinkedin style={{ color: '#000' }} />
							</a>
							<a
								href='https://github.com/jihanghaniyyah'
								rel='noopener noreferrer'
								target='_blank'
							>
								<AiFillGithub style={{ color: '#000' }} />
							</a>
						</h2>
					</div>
				</Container>
				<Container>
					<Footer />
				</Container>
			</div>
		);
	}
}

export default Homepage;
