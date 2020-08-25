import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import NewJourney from './pages/NewJourney'
import Navbar from './components/Navbar/Navbar'
import BG from "./img/bg.png";
import {Container, Jumbotron} from 'react-bootstrap'
import Caption from './components/Caption/Caption'
import Profile from './pages/Profile'
import DetailJourney from './pages/DetailJourney'
import Bookmark from './pages/Bookmark'
import PrivateRoute from './helpers/PrivateRote'

function App() {
  return (
    <>
    <Router>
      {!localStorage.getItem('token') ? 
        (
          <Jumbotron
            fluid
            style={{
              backgroundImage: `url(${BG})`,
              height: "470px",
              left: "0px",
            }}
          >
            <Container>
              <Navbar />
              <Caption />
            </Container>
          </Jumbotron>
        ) : (
          <div className="border-bottom" style={{ background: "#F1F1F1" }}>
            <Container>
              <Navbar />
            </Container>
          </div>
        //   <Jumbotron
        //   fluid
        //   style={{
        //     backgroundImage: `background: "#E5E5E5"`,
        //     height: "30px",
        //   }}
        // >
        //   <Container>
        //     <Navbar />
        //   </Container>
        // </Jumbotron>
      )}
        <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/bookmark" component={Bookmark} />
          <PrivateRoute path="/add-journey" component={NewJourney} />
          <Route path="/journey/:id">
            <DetailJourney />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
