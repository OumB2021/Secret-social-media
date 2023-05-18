import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <main>
        <Container>
          <Routes>
            <Route path="/login" Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
