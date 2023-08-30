import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const Products = () => {
  return (
    <div className="products-view">
      <div className="product-sec">
        <h1>Go somewhere</h1>
        <p>Let's go on an adventure</p>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="feature-sec">
              <a href="#" className="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00016 13.3335C10.9457 13.3335 13.3335 10.9457 13.3335 8.00016C13.3335 5.05464 10.9457 2.66683 8.00016 2.66683C5.05464 2.66683 2.66683 5.05464 2.66683 8.00016C2.66683 10.9457 5.05464 13.3335 8.00016 13.3335ZM8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z"
                  />
                  <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714 4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335 7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683 6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145 9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893 11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z" />
                </svg>
                Featured
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00016 13.3335C10.9457 13.3335 13.3335 10.9457 13.3335 8.00016C13.3335 5.05464 10.9457 2.66683 8.00016 2.66683C5.05464 2.66683 2.66683 5.05464 2.66683 8.00016C2.66683 10.9457 5.05464 13.3335 8.00016 13.3335ZM8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z"
                  />
                  <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714 4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335 7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683 6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145 9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893 11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z" />
                </svg>
                Family-friendly
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00016 13.3335C10.9457 13.3335 13.3335 10.9457 13.3335 8.00016C13.3335 5.05464 10.9457 2.66683 8.00016 2.66683C5.05464 2.66683 2.66683 5.05464 2.66683 8.00016C2.66683 10.9457 5.05464 13.3335 8.00016 13.3335ZM8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z"
                  />
                  <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714 4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335 7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683 6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145 9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893 11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z" />
                </svg>
                On sale
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00016 13.3335C10.9457 13.3335 13.3335 10.9457 13.3335 8.00016C13.3335 5.05464 10.9457 2.66683 8.00016 2.66683C5.05464 2.66683 2.66683 5.05464 2.66683 8.00016C2.66683 10.9457 5.05464 13.3335 8.00016 13.3335ZM8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z"
                  />
                  <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714 4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335 7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683 6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145 9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893 11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z" />
                </svg>
                Sub nav
              </a>
            </div>
            <select className="form-control mb-3 select-drp feature-slt">
              <option>Featured</option>
              <option>Family-friendly</option>
              <option>On sale</option>
              <option>Sub nav</option>
            </select>
          </Col>
          <Col xs={12} md={6} lg={3} className="d-inline ms-auto">
            <select className="form-control select-drp">
              <option>Recently added</option>
              <option>Family-friendly</option>
              <option>On sale</option>
              <option>Sub nav</option>
            </select>
          </Col>
        </Row>
        <Container fluid className="products-container">
          <Row className="flex-wrap card-items">
            <Col md={6} lg={3} className="item">
              <div className="card">
                <img src="./images/card-img-1.png" alt="Card Img" />
                <div className="content">
                  <Row className="mx-0 pb-3 mb-3 border-bottom">
                    <Col xs={8} className="p-0">
                      <div className="title">
                        <p>The grand Resort</p>
                        <span>Yasminfurt</span>
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end p-0">
                      <div className="price-box">
                        <p>$356</p>
                        <p>$267</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <div className="date-sec">
                        <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="rating-sec">
                        <img src="./images/icons/star.svg" alt="Rating Icon" />
                        <span>4.8</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="item">
              <div className="card">
                <img src="./images/card-img-1.png" alt="Card Img" />
                <div className="content">
                  <Row className="mx-0 pb-3 mb-3 border-bottom">
                    <Col xs={8} className="p-0">
                      <div className="title">
                        <p>The grand Resort</p>
                        <span>Yasminfurt</span>
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end p-0">
                      <div className="price-box">
                        <p>$356</p>
                        <p>$267</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <div className="date-sec">
                        <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="rating-sec">
                        <img src="./images/icons/star.svg" alt="Rating Icon" />
                        <span>4.8</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="item">
              <div className="card">
                <img src="./images/card-img-1.png" alt="Card Img" />
                <div className="content">
                  <Row className="mx-0 pb-3 mb-3 border-bottom">
                    <Col xs={8} className="p-0">
                      <div className="title">
                        <p>The grand Resort</p>
                        <span>Yasminfurt</span>
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end p-0">
                      <div className="price-box">
                        <p>$356</p>
                        <p>$267</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <div className="date-sec">
                        <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="rating-sec">
                        <img src="./images/icons/star.svg" alt="Rating Icon" />
                        <span>4.8</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="item">
              <div className="card">
                <img src="./images/card-img-1.png" alt="Card Img" />
                <div className="content">
                  <Row className="mx-0 pb-3 mb-3 border-bottom">
                    <Col xs={8} className="p-0">
                      <div className="title">
                        <p>The grand Resort</p>
                        <span>Yasminfurt</span>
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end p-0">
                      <div className="price-box">
                        <p>$356</p>
                        <p>$267</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <div className="date-sec">
                        <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="rating-sec">
                        <img src="./images/icons/star.svg" alt="Rating Icon" />
                        <span>4.8</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="item">
              <div className="card">
                <img src="./images/card-img-1.png" alt="Card Img" />
                <div className="content">
                  <Row className="mx-0 pb-3 mb-3 border-bottom">
                    <Col xs={8} className="p-0">
                      <div className="title">
                        <p>The grand Resort</p>
                        <span>Yasminfurt</span>
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end p-0">
                      <div className="price-box">
                        <p>$356</p>
                        <p>$267</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <div className="date-sec">
                        <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="rating-sec">
                        <img src="./images/icons/star.svg" alt="Rating Icon" />
                        <span>4.8</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="item">
              <div className="card">
                <img src="./images/card-img-1.png" alt="Card Img" />
                <div className="content">
                  <Row className="mx-0 pb-3 mb-3 border-bottom">
                    <Col xs={8} className="p-0">
                      <div className="title">
                        <p>The grand Resort</p>
                        <span>Yasminfurt</span>
                      </div>
                    </Col>
                    <Col className="d-flex flex-column align-items-end p-0">
                      <div className="price-box">
                        <p>$356</p>
                        <p>$267</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={8}>
                      <div className="date-sec">
                        <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="rating-sec">
                        <img src="./images/icons/star.svg" alt="Rating Icon" />
                        <span>4.8</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center">
          <Button variant="outline-dark" className="theme-btn">
            View all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
