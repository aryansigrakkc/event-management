
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './components/Login';
import MainLayout from "./components/MainLayout";
import About from "./components/About";
import Home from "./components/Home";
import EventCategory from "./components/EventCategory";

function App() {
  return (
   <>
   <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/eventcategory" element={<EventCategory />} />
          {/* <Route
            exact
            path="/dashboard"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          /> */}
         

          </Routes>
      </Router>
   </>
  );
}

export default App;
