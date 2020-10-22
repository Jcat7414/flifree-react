import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import About from './pages/AboutPage';
import Privacy from './pages/PrivacyPolicyPage';
import Terms from './pages/TermsConditionsPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from './pages/ProjectsPage';
import PledgePage from './pages/PledgePage';
import PledgesPage from './pages/PledgesPage';
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";
import CreateUserPage from "./pages/CreateUserPage";
import LoginPage from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';
import ErrorPage from './pages/ErrorPage';

import Footer from './components/Nav/Footer';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/pledges">
            <PledgePage />
          </Route>
          <Route path="/pledges/:id">
            <PledgesPage />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/createuser">
            <CreateUserPage />
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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
