import React, { Component } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import ExpEdu from './expEdu.js';
import Footer from '../Footer';
import NavigationBar from '../Navbar';
import andstudLogo from '../assets/as.svg';
import bootstrapLogo from '../assets/bootstrap.png';
import figmalogo from '../assets/figma.svg';
import flutterlogo from '../assets/flutter.svg';
import javascriptLogo from '../assets/js.png';
import laravelLogo from '../assets/laravel.png';
import mysqlLogo from '../assets/mysql.png';
import phpLogo from '../assets/php.png';
import reactLogo from '../assets/react.png';
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
					<ExpEdu />
					<Footer />
				</Container>
			</div>
		);
	}
}

export default Resume;
