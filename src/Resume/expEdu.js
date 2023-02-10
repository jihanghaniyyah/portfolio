import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import otakkananLogo from '../assets/otakkanan.png';
import pensLogo from '../assets/pens.png';
import resume from '../assets/resume.pdf';
import smalaLogo from '../assets/smala.png';
import visitindLogo from '../assets/visitind/logo.png';

class ExpEdu extends Component {
	render() {
		const cardStyle = {
			backgroundColor: 'transparent',
			borderColor: 'transparent',
		};
		const colStyle = {
			alignItems: 'center',
			display: 'flex',
			justifyContent: 'center',
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
			display: 'block',
			height: '70px',
			margin: 'auto',
			objectFit: 'scale-down',
			width: '80px',
		};
		const seeLinkedin = {
			alignItems: 'center',
			display: 'flex',
			justifyContent: 'right',
		};
		const seeText = {
			color: '#8095e2',
			fontSize: '14px',
			textDecoration: 'none',
		};
		return (
			<Container>
				<Row>
					<Col className='experience' lg={6} xs={12}>
						<h3 className='mt-5'>Experience</h3>
						<hr />
						<Row>
							<Col style={colStyle} xl={3} xs={3}>
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
							<Col xl={9} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>VisitInd</p>
									<p style={colsubTitleStyle}>9 mos </p>
									<p style={colTextStyle}>Bandung, Indonesia</p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col xl={3} xs={3}></Col>
							<Col xl={9} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>Scrum Master</p>
									<p style={colsubTitleStyle}>Part-time</p>
									<p style={colTextStyle}>Oct 2021 - Mar 2022</p>
									<p>
										· Implemented Agile Development methodology using the Scrum
										framework <br />
										· Promoted to be Scrum Master Website Development Team,
										successfully managed 1 batch web development team interns
										that contains 6 people <br />· Successfully ensured the
										entire development process ran smoothly and went according
										to the plan & back log <br />
										· Assisted FE team during the development process <br />
										· Assisted BE team during the integration process <br />·
										Successfully deployed 4 websites using CPanel
									</p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col xl={3} xs={3}></Col>
							<Col xl={9} xs={9}>
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
							<Col xl={3} xs={3}>
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
							<Col xl={9} xs={9}>
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
					</Col>
					<Col className='education' lg={6} xs={12}>
						<h3 className='mt-5'>Education</h3>
						<hr />
						<Row>
							<Col style={colStyle} xl={3} xs={3}>
								<Card style={cardStyle}>
									<a
										href='https://www.linkedin.com/company/visitind/'
										rel='noopener noreferrer'
										style={hrefStyle}
										target='_blank'
									>
										<Card.Img src={pensLogo} style={imageStyle} />
									</a>
								</Card>
							</Col>
							<Col xl={9} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>
										Politeknik Elektronika Negeri Surabaya
									</p>
									<p style={colsubTitleStyle}>
										Bachelor's degree, Informatics Engineering{' '}
									</p>
									<p style={colTextStyle}>Oct 2023 - Oct 2024</p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col style={colStyle} xl={3} xs={3}>
								<Card style={cardStyle}>
									<a
										href='https://www.linkedin.com/company/visitind/'
										rel='noopener noreferrer'
										style={hrefStyle}
										target='_blank'
									>
										<Card.Img src={pensLogo} style={imageStyle} />
									</a>
								</Card>
							</Col>
							<Col xl={9} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>
										Politeknik Elektronika Negeri Surabaya
									</p>
									<p style={colsubTitleStyle}>
										Associate's degree, Informatics Engineering{' '}
									</p>{' '}
									<p style={colTextStyle}>2019 - 2022</p>
									<p style={colsubTitleStyle}>3.75/4.00 GPA </p>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col style={colStyle} xl={3} xs={3}>
								<Card style={cardStyle}>
									<a
										href='https://www.linkedin.com/company/visitind/'
										rel='noopener noreferrer'
										style={hrefStyle}
										target='_blank'
									>
										<Card.Img src={smalaLogo} style={imageStyle} />
									</a>
								</Card>
							</Col>
							<Col xl={9} xs={9}>
								<Card style={colTextBoxStyle}>
									<p style={colTitleStyle}>SMA Negeri 5 Surabaya</p>
									<p style={colsubTitleStyle}>Natural Sciences </p>
									<p style={colTextStyle}>2016 - 2019</p>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className='mt-5'>
					<Col>
						<a href={resume} download>
							<Button style={downloadButton}>Download My Resume</Button>
						</a>
					</Col>
					<Col style={seeLinkedin}>
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
		);
	}
}

export default ExpEdu;
