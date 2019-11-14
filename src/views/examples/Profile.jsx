
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

import UserHeader from "components/Headers/UserHeader.jsx";
import Badges from "./Badges.jsx";

class Profile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/image.jpeg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">1</span>
                          <span className="description">Courses Completed</span>
                        </div>
                        <div>
                          <span className="heading">2</span>
                          <span className="description">Hours in courses</span>
                        </div>
                        <div>
                          <span className="heading">1</span>
                          <span className="description">Badges</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Didier Murillo
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Tegucigalpa, Honduras
                    </div>
              
                    <div>
                      <i className="ni education_hat mr-2" />
                      UNITEC
                    </div>
                    <hr className="my-4" />
                    <p>
                      BADGES AND LEVESL GO HERE
                    </p>
                    <Card>
                      <CardBody>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                            src={require("assets/img/badges/medal.png")}
                            style={{ width: "140px" }}
                          />
                        </a>
                        <div className="pt-4 text-center">
                          <h5 className="h3 title">
                            <span className="d-block mb-1">For your fisrt course!</span>
                            <small className="h4 font-weight-light text-muted">
                              Web Developer
                            </small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="twitter"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fab fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="facebook"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fab fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="dribbble"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fab fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                            src={require("assets/img/badges/trophy.png")}
                            style={{ width: "140px" }}
                          />
                        </a>
                        <div className="pt-4 text-center">
                          <h5 className="h3 title">
                            <span className="d-block mb-1">Wow you achived 10 hours!</span>
                            <small className="h4 font-weight-light text-muted">
                              Web Developer
                            </small>
                          </h5>
                          <div className="mt-3">
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="twitter"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fab fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="facebook"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fab fa-facebook" />
                            </Button>
                            <Button
                              className="btn-icon-only rounded-circle"
                              color="dribbble"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="fab fa-dribbble" />
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
              
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="didier.murillo"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="didier.murillo@unitec.edu"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Didier"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Murillo"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                                        <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Student"
                          rows="4"
                          defaultValue="Student"
                          type="textarea"
                        />
                      </FormGroup>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
