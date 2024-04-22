import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import About from './components/About';
import CompanyList from './components/CompanyList';
import CompanyRegistration from './components/CompanyRegistration';
import ViewCompanyList from './components/ViewCompanyList';
import UpdateCompanyList from './components/updateCompanyList';
import EventList from './components/EventList';
import EventRegistration from './components/EventRegistration';
import ViewEvent from './components/ViewEvent';
import UpdateEvent from './components/UpdateEvent';
import UserRegistration from './components/UserRegistration';
import ListOfUser from './components/ListOfUser';
import ViewEventList from './components/ViewEventList';

function App() {
  return (
 <>


<Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
           <Route
            exact
            path="/companylist"
            element={
              <MainLayout>
                <CompanyList  />
              </MainLayout>
            }
          />
           <Route
            exact
            path="/companyregistration"
            element={
              <MainLayout>
                <CompanyRegistration  />
              </MainLayout>
            }
          />
            <Route
            exact
            path="/viewcompanylist/:id"
            element={
              <MainLayout>
                <ViewCompanyList  />
              </MainLayout>
            }
          />
            <Route
            exact
            path="/updatecompanylist/:id"
            element={
              <MainLayout>
                <UpdateCompanyList  />
              </MainLayout>
            }
          />
           <Route
            exact
            path="/eventlist"
            element={
              <MainLayout>
                <EventList  />
              </MainLayout>
            }
          />
           <Route
            exact
            path="/eventregistration"
            element={
              <MainLayout>
                <EventRegistration  />
              </MainLayout>
            }
          />

<Route
            exact
            path="/viewevent/:id"
            element={
              <MainLayout>
                <ViewEvent  />
              </MainLayout>
            }
          />

<Route
            exact
            path="/updateevent/:id"
            element={
              <MainLayout>
                <UpdateEvent  />
              </MainLayout>
            }
          />
<Route
            exact
            path="/userregistration"
            element={
              <MainLayout>
                <UserRegistration  />
              </MainLayout>
            }
          />
<Route
            exact
            path="/listofuser"
            element={
              <MainLayout>
                <ListOfUser  />
              </MainLayout>
            }
          />
<Route
            exact
            path="/vieweventList/:id"
            element={
              <MainLayout>
                <ViewEventList  />
              </MainLayout>
            }
          />
          
          </Routes>
      </Router>
 </>
  );
}

export default App;
