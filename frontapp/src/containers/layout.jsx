import React from "react";
import Header from "../component/header";
import Pseudo from "../component/pseudo";
import { Container, Row, Col } from "reactstrap";
import {Route,Switch} from "react-router-dom";
import routes from "../routes"
import Jeu1 from "../component/jeu1";
import Jeu2 from "../component/jeu2";
import Jeu3 from "../component/jeu3";

function Layout() {
  return (
    <React-Fragment>
      <Container>
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <Header />
          </Col>
          <Col sm="4"></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs="6" sm="2"></Col>
          <Col xs="6" sm="8">
            <Switch>
                <Route path="/" exact component = {Pseudo}></Route>
                <Route path="/jeu1" component = {Jeu1}></Route>
                <Route path="/jeu2" component = {Jeu2}></Route>
                <Route path="/jeu3" component = {Jeu3}></Route>
            </Switch>
          </Col>
          <Col sm="2"></Col>
        </Row>
      </Container>
    </React-Fragment>
  );
}
export default Layout;
