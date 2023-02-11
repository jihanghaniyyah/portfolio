import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiUserFill, RiFile2Fill } from 'react-icons/ri';

export default function NavigationBar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='light'>
			<Container>
				<Navbar.Brand href='/'>
					<img src='../../logo.svg' width={40} height={40} alt='Navigation Bar Logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav style={{ fontWeight: '600' }}>
						<Nav.Link href='/works'>
							<RiFile2Fill /> Projects
						</Nav.Link>
						<Nav.Link eventKey={2} href='/resume'>
							<RiUserFill /> Resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
