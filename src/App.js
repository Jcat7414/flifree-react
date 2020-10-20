import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/createproject">
            <CreateProjectPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
