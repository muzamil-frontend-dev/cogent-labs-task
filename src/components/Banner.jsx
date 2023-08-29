import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner-img">
      <div className="banner-txt">
        <h1>Air, sleep, dream</h1>
        <p>Find and book a great experience.</p>
        <Button>Start your Search</Button>
      </div>
      <div className="search-box">
        <div className="tab-sec">
          <a href="#" className="active">
            Stays
          </a>
          <a href="#">Flights</a>
          <a href="#">Cars</a>
          <a href="#">Things to do</a>
        </div>
        <div className="tab-content">
          <Row>
            <Col className="search-type location">
              <img src="./images/icons/location.svg" alt="Location Icon" />
              <div className="search-input">
                <label>Location</label>
                <input type="text" placeholder="Where are you going?" />
              </div>
            </Col>
            <Col className="search-type check-in">
              <img src="./images/icons/calendar.svg" alt="Calendar Icon" />
              <div className="search-input">
                <label>Check in</label>
                <input type="text" placeholder="Add date" />
              </div>
            </Col>
            <Col className="search-type check-out">
              <img src="./images/icons/calendar.svg" alt="Calendar Icon" />
              <div className="search-input">
                <label>Check out</label>
                <input type="text" placeholder="Add date" />
              </div>
            </Col>
            <Col className="search-type travelers">
              <img src="./images/icons/user.svg" alt="User Icon" />
              <div className="search-input">
                <label>Travelers</label>
                <input type="text" placeholder="Add guests" />
              </div>
            </Col>
            <Button className="search-btn">
              <img src="./images/icons/search.svg" alt="Search Icon" />
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Banner;
