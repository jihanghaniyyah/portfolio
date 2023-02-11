import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Navbar';
import SIUKM1 from '../assets/siukm/1.png';
import SIUKM11 from '../assets/siukm/1-1.png';
import SIUKM12 from '../assets/siukm/1-2.png';
import SIUKM13 from '../assets/siukm/1-3.png';
import SIUKM14 from '../assets/siukm/1-4.png';
import SIUKM2 from '../assets/siukm/2.png';
import SIUKM21 from '../assets/siukm/2-1.png';
import SIUKM22 from '../assets/siukm/2-2.png';
import SIUKM3 from '../assets/siukm/3.png';
import SIUKM31 from '../assets/siukm/3-1.png';
import Footer from '../Footer';

class Siukm extends Component {
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
					<h3 className='mt-5'>SI-UKM</h3>
					<hr />
					<ul>
						<li>
							SI-UKM stands for Sistem Informasi Unit Kegiatan Mahasiswa (UKM). This
							website contains all the data and information of UKM in PENS
						</li>
						<li>
							This was a team project to fulfilling Software Engineering subject in
							2021
						</li>
						<li>
							With the team, I developed the front-end website using ReactJS for
							client side and Laravel for admin side
						</li>
					</ul>
					<Row className='mb-2' style={imageStyle}>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM1}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM11}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM12}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM13}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM14}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM2}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM21}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM22}></Card.Img>
							</Card>
						</Col>
					</Row>
					<p style={clientText}>client side</p>
					<Row className='mb-2' style={imageStyle}>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM3}></Card.Img>
							</Card>
						</Col>
						<Col className='mt-4' sm={12} lg={6}>
							<Card style={imageStyle}>
								<Card.Img src={SIUKM31}></Card.Img>
							</Card>
						</Col>
					</Row>
					<p className='mb-5' style={clientText}>
						admin side
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

export default Siukm;
