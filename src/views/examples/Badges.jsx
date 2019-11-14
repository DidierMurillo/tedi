import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Row,
  Col
} from "reactstrap";

class Cards extends React.Component {
  render() {
    return (
      <>
        <Card>

          <CardBody>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img
                alt="..."
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                src={require("assets/img/brand/image.jpeg")}
                style={{ width: "140px" }}
              />
            </a>
            <div className="pt-4 text-center">
              <h5 className="h3 title">
                <span className="d-block mb-1">Ryan Tompson</span>
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
      </>
    );
  }
}

export default Cards;
