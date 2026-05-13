import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import "./Header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            sticky="top"
            expanded={expanded}
            className="custom-navbar"
        >
            <Container>

                {/* LOGO */}
                <Navbar.Brand
                    as={HashLink}
                    smooth
                    to="/#home"
                    className="navbar-brand-custom"
                    onClick={() => setExpanded(false)}
                >
                    <span className="brand-highlight">
                        Secure
                    </span>

                    <span className="brand-text">
                        Bridge Outsourcing
                    </span>
                </Navbar.Brand>

                {/* CUSTOM TOGGLE BUTTON */}
                <button
                    className="mobile-toggle-btn d-lg-none"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? (
                        <IoClose size={30} />
                    ) : (
                        <HiOutlineMenuAlt3 size={30} />
                    )}
                </button>

                {/* MENU */}
                <Navbar.Collapse id="basic-navbar-nav">

                    {/* CENTER MENU */}
                    <Nav className="ms-auto align-items-lg-center navbar-menu">

                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/#home"
                            className="nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/#verticals"
                            className="nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            Our Verticals
                        </Nav.Link>

                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/#services"
                            className="nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            Services
                        </Nav.Link>

                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/#about-us"
                            className="nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            About Us
                        </Nav.Link>

                       

                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/#contact-form"
                            className="nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            Contact Us
                        </Nav.Link>


                         <Nav.Link
                            as={HashLink}
                            smooth
                            to="/#faq"
                            className="nav-link-custom me-4"
                            onClick={() => setExpanded(false)}
                        >
                            FAQ's
                        </Nav.Link>


                    </Nav>

                    {/* RIGHT SIDE BUTTON */}
                    <div className="d-flex justify-content-lg-end justify-content-center mt-4 mt-lg-0">
                        <Button
                            className="contact-btn"
                            onClick={() => setExpanded(false)}
                        >
                            Get Verified Leads
                        </Button>
                    </div>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;