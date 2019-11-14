import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";


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
  Col, 
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [],
          title: "",
          description: ""
        };
    }

    getUsuarios = () => {
        firebase
          .firestore()
          .collection("usuarios")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.setState({
                data: [...this.state.data, doc.data()]
              });
            });
          });
    };

    componentDidMount() {
        this.getUsuarios();
    }

    dataIndex = () => {
        return this.state.data.map(usuario => {
          return (
            <div key={usuario.id}>
              <strong>Title: </strong>
              {usuario.nombre}
            </div>
          );
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // Add a new document with a generated id.
        firebase
          .firestore()
          .collection("usuarios")
          .add({
            usuario: this.state.title,
            nombre: this.state.description
          })
          .then(this.setState({ data: [] })) // Clears the current data
          .then(() => this.getTasks())
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
    };

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };

    dataForm = () => {
        return (
          <form>
            <input
              type="text"
              name="title"
              placeholder="New Task"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Task Description"
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
              {" "}
              Submit{" "}
            </button>
          </form>
        );
    };    


  render() {
    return (
      <>    
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
            <Container fluid>
              <div className="header-body">
                {/* Card stats */}
                <Row>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardImg
                        alt="..."
                        src="http://cdn.shopify.com/s/files/1/2992/2084/articles/shutterstock_605179892_1024x1024.png?v=1536738652"
                        top
                      />
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Science
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                              1 course available
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie" />
                            </div>
                          </Col>
                        </Row>
                      
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}>
                          Go to course
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardImg
                        alt="..."
                        src="http://cdn.shopify.com/s/files/1/2992/2084/articles/shutterstock_605179892_1024x1024.png?v=1536738652"
                        top
                      />
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Science
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                              1 course available
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie" />
                            </div>
                          </Col>
                        </Row>
                      
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}>
                          Go to course
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardImg
                        alt="..."
                        src="http://cdn.shopify.com/s/files/1/2992/2084/articles/shutterstock_605179892_1024x1024.png?v=1536738652"
                        top
                      />
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Science
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                              1 course available
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie" />
                            </div>
                          </Col>
                        </Row>
                      
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}>
                          Go to course
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardImg
                        alt="..."
                        src="http://cdn.shopify.com/s/files/1/2992/2084/articles/shutterstock_605179892_1024x1024.png?v=1536738652"
                        top
                      />
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Science
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                              1 course available
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie" />
                            </div>
                          </Col>
                        </Row>
                      
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}>
                          Go to course
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </>
      );
  }
}

export default Cards;