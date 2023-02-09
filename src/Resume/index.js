import React, { Component } from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer';
import NavigationBar from '../Navbar';
import andstudLogo from '../assets/as.svg';
import bootstrapLogo from '../assets/bootstrap.png';
import figmalogo from '../assets/figma.svg';
import flutterlogo from '../assets/flutter.svg';
import javascriptLogo from '../assets/js.png';
import laravelLogo from '../assets/laravel.png';
import mysqlLogo from '../assets/mysql.png';
import otakkananLogo from '../assets/otakkanan.png';
import phpLogo from '../assets/php.png';
import reactLogo from '../assets/react.png';
import resume from '../assets/resume.pdf';
import visitindLogo from '../assets/visitind/logo.png';
import vscodeLogo from '../assets/vscode.png';

class Resume extends Component {
	render() {
		const cardStyle = {
			alignItems: 'center',
			backgroundColor: 'transparent',
			borderColor: 'transparent',
			verticalAlign: 'middle',
		};
		const carouselStyle = {
			marginTop: '30px',
		};
		const colsubTitleStyle = {
			margin: '0px',
		};
		const colTextStyle = {
			color: '#00000099',
			fontWeight: '400',
			margin: '0px',
		};
		const colTextBoxStyle = {
			borderColor: 'transparent',
		};
		const colTitleStyle = {
			fontSize: '18px',
			fontWeight: '500',
			margin: '10px 0px 0px 0px',
		};
		const downloadButton = {
			backgroundColor: '#8095e2',
			borderColor: '#8095e2',
		};
		const hrefStyle = {
			margin: 'none',
			textDecoration: 'none',
			verticalAlign: 'middle',
		};
		const imageStyle = {
			alignItems: 'center',
			height: '70px',
			objectFit: 'scale-down',
			width: '80px',
		};
		const paragraphStyle = {
			color: '#0000008C',
			fontSize: '16px',
			fontStyle: 'italic',
			fontWeight: '600',
			textAlign: 'center',
		};
		const rowStyle = {
			backgroundColor: '#F8F9FA',
			borderRadius: '20px',
		};
		const seeText = {
			color: '#8095e2',
			fontSize: '14px',
			textAlign: 'right',
			textDecoration: 'none',
		};
		const textStyle = {
			color: '#0000008C',
			fontWeight: '500',
			textAlign: 'center',
		};
		return (
			<div className='resume'>
				<NavigationBar />
				<Container>
					<h3 className='mt-5'>Tech I Use</h3>
					<hr />
					<Carousel clasName='mt-3'>
						<Carousel.Item>
							<Row className='d-flex justify-content-center' style={rowStyle}>
								<p style={paragraphStyle}>
									These are, not limited to, the tech I use for building
									client-side applications
								</p>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://flutter.dev/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={flutterlogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												Flutter
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://reactjs.org/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={reactLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												ReactJS
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://laravel.com/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={laravelLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												Laravel
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://getbootstrap.com/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={bootstrapLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												Bootstrap
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://www.javascript.com/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={javascriptLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												Javascript
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
					<Carousel style={carouselStyle}>
						<Carousel.Item>
							<Row className='d-flex justify-content-center' style={rowStyle}>
								<p style={paragraphStyle}>
									These are, not limited to, the tech I use for building fast and
									scalable backend applications
								</p>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://www.php.net/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={phpLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												PHP
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://www.mysql.com/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={mysqlLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												MySQL
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
					<Carousel style={carouselStyle}>
						<Carousel.Item>
							<Row className='d-flex justify-content-center' style={rowStyle}>
								<p style={paragraphStyle}>And many more...</p>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://www.figma.com/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={figmalogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												Figma
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://code.visualstudio.com/'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={vscodeLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												Visual Studio Code
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}>
										<a
											href='https://developer.android.com/studio'
											rel='noopener noreferrer'
											style={hrefStyle}
											target='_blank'
										>
											<Card.Img src={andstudLogo} style={imageStyle} />
											<Card.Text className='mt-2' style={textStyle}>
												Android Studio
											</Card.Text>
										</a>
									</Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
								<Col className='mb-4'>
									<Card style={cardStyle}></Card>
								</Col>
							</Row>
						</Carousel.Item>
					</Carousel>
				</Container>
				<Container>
					<h3 className='mt-5'>Experience</h3>
					<hr />
					<Container>
						<Row>
							<Col xl={1} xs={3}>
								<Card style={cardStyle}>
									<a
										href='https://www.linkedin.com/company/visitind/'
										rel='noopener noreferrer'
										style={hrefStyle}
										target='_blank'
									>
										<Card.Img src={visitindLogo} style={imageStyle} />
									</a>
								</Card>
							</Col>
							<Col xl={11} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>VisitInd</p>
									<p style={colsubTitleStyle}>9 mos </p>
									<p style={colTextStyle}>Bandung, Indonesia</p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col xl={1} xs={3}></Col>
							<Col xl={11} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>Scrum Master</p>
									<p style={colsubTitleStyle}>Part-time</p>
									<p style={colTextStyle}>Oct 2021 - Mar 2022</p>
									<p>
										· Implemented Agile Development methodology using the Scrum
										framework <br />
										· Promoted to be Scrum Master Website Development Team,
										successfully managed 1 batch web development team interns
										that contains 6 people <br />
										· Successfully ensured the entire development process ran
										smoothly and went according to the plan & back log <br />
										· Assisted FE team during the development process <br />
										· Assisted BE team during the integration process <br />·
										Successfully deployed 4 websites using CPanel
									</p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col xl={1} xs={3}></Col>
							<Col xl={11} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>Web Developer</p>
									<p style={colsubTitleStyle}>Internship</p>
									<p style={colTextStyle}>Jun 2021 - Sep 2021</p>
									<p>
										· Participated and successfully developed 3 websites built
										with ReactJS <br />
										· Become a Best Intern from Technology Squad <br />
									</p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col xl={1} xs={3}>
								<Card style={cardStyle}>
									<a
										href='https://www.linkedin.com/company/otakkanan/about/'
										rel='noopener noreferrer'
										style={hrefStyle}
										target='_blank'
									>
										<Card.Img src={otakkananLogo} style={imageStyle} />
									</a>
								</Card>
							</Col>
							<Col xl={11} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>Front End Web Developer</p>
									<p style={colsubTitleStyle}>PT Otak Kanan · Internship </p>
									<p style={colTextStyle}>Jun 2021 - Sep 2021 · 4 mos</p>
									<p style={colTextStyle}>Surabaya, Indonesia</p>
									<p>
										· Designed an UI news portal website <br />
										· With the team, developed the FE website built with Laravel
										framework <br />
									</p>
								</Card>
							</Col>
						</Row>
						<Row className='mt-5'>
							<Col>
								<a href={resume} download>
									<Button style={downloadButton}>Download My Resume</Button>
								</a>
							</Col>
							<Col style={{ textAlign: 'right' }}>
								<a
									href='https://www.linkedin.com/in/jihanghaniyyah/'
									rel='noopener noreferrer'
									style={seeText}
									target='_blank'
								>
									See more on LinkedIn
								</a>
							</Col>
						</Row>
					</Container>
					<Footer />
				</Container>
			</div>
		);
	}
}

export default Resume;
