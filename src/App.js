import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import Privacy from './pages/PrivacyPolicyPage';
import Terms from './pages/TermsConditionsPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsByPage from './pages/ProjectsByUser';
import PledgePage from './pages/PledgePage';
import PledgesPage from './pages/PledgesPage';
import PledgesByPage from './pages/PledgesByUser';
import UserPage from "./pages/UserPage";
import UsersPage from './pages/UsersPage';
import CreateUserPage from './pages/CreateUserPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import CreateProjectPage from './pages/CreateProjectPage';
import EditProjectPage from './pages/EditProjectPage';
import CreatePledgePage from './pages/CreatePledgePage';
import ConfirmPledgePage from './pages/ConfirmPledgePage';
import CreateUpdatePage from './pages/CreateUpdatePage';
import ErrorPage from './pages/ErrorPage';
import UnauthPage from './pages/UnauthPage';
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
          <Route path="/projectsby/:username">
            <ProjectsByPage />
          </Route>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>
          <Route path="/pledgesby/:username">
            <PledgesByPage />
          </Route>
          <Route path="/pledges/:id">
            <PledgePage />
          </Route>
          <Route path="/pledges" exact>
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
          <Route path="/logout">
            <LogoutPage />
          </Route>
          <Route path="/createproject">
            <CreateProjectPage />
          </Route>
          <Route path="/editproject/:id">
            <EditProjectPage />
          </Route>
          <Route path="/createpledge">
            <CreatePledgePage />
          </Route>
          <Route path="/confirmpledge">
            <ConfirmPledgePage />
          </Route>
          <Route path="/createupdate">
            <CreateUpdatePage />
          </Route>
          <Route path="/unauthorised">
            <UnauthPage />
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
