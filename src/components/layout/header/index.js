import React from "react";
import "./header.css"
import logo from "../../../assets/images/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import metamash from "../../../assets/images/metamase.png"

const Header = () => {
	return (
		<>
			<div className="body_header">
				<Container>
					<div className="row mt-2">
						<div className="col-lg-4 col-md-4 col-sm-4 mt-3 d-flex ">
							<img
								src={logo}
								width="40"
								height="40"
								className="d-inline-block align-top mx-2"
								alt="React Bootstrap logo"
							/>
							<div className="logo_heading"><Navbar.Brand href="/" className="text-white  logo_heading">AGOV DAO</Navbar.Brand></div>
							</div>
						<div className="col-lg-8 col-md-8 col-sm-8   d-flex justify-content-end">
							<Navbar expand="lg" className="navbar">
								<Navbar.Toggle aria-controls="basic-navbar-nav " />
								<Navbar.Collapse id="basic-navbar-nav " >
									<Nav className="me-auto  navbar-nav  ">
										<Nav.Link href="#home" className="text-light navbar_link mt-1">AGOV-ETH</Nav.Link>
										<Nav.Link href="#link" className="text-light navbar_link mt-1">AGOV DAO</Nav.Link>
										<Nav.Link href="#link" className="text-light navbar_link mt-1">ClUBRARE</Nav.Link>
										<button type="button" class="btn btn-light">
											<img
												src={metamash}
												width="20"
												height="20"
												className="d-inline-block align-top mx-2 p-0"
												alt="React Bootstrap logo"
											/>
											<span className="px-1 meta_mask">ADD TO METAMASK</span>	</button>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}
export default Header