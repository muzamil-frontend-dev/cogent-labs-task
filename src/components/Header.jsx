import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col xs={4} md={6} className="d-flex align-items-center">
            <img src="./images/logo.png" alt="App Logo" className="me-4" />
            <div className="traveler-menu">
              <span>Travelers</span>
              <img src="./images/icons/chevron-down.svg" alt="Dropdown Icon" />
            </div>
          </Col>
          <Col xs={8} md={6}>
            <div className="d-flex justify-content-end align-items-center">
              <a href="#" variant="outline-dark" className="header-link">
                Support
              </a>
              <a href="#" variant="outline-dark" className="header-link">
                <img
                  src="./images/icons/globe.svg"
                  alt="Language Icon"
                  className="me-2"
                />
                Language
              </a>
              <Button variant="outline-dark" className="theme-btn header-btn">
                List your property
              </Button>
              <div className="header-item">
                <img
                  src="./images/icons/notification.svg"
                  alt="Notifications"
                />

                <div className="status"></div>
              </div>
              <div className="header-item user-profile">
                <img src="./images/avatar.png" alt="Profile Pic" />
              </div>
              <div className="header-item toggle-menu">
                <img src="./images/icons/bars.svg" alt="Toggle Menu" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
