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
          <div className="border border-dark" style={{ background: "#E5E5E5", borderBottom: "1 px solid black" }}>
            <Container>
              <Navbar />
            </Container>
          </div>
      )}
        <Switch>
          <Route path="/journey/:id">
            <DetailJourney />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/add-journey">
            <NewJourney />
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
