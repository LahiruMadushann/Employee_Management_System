import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
      <div>
          <Router>
                  <HeaderComponent />
                  <div className="container">
                      <Routes>
                          <Route exact path="/" element={<ListEmployeeComponent />}></Route>
                          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
                          <Route path="/add-employee" element={<CreateEmployeeComponent />}></Route>
                          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />}></Route>
                          <Route path="/view-employee/:id" element={<ViewEmployeeComponent />}></Route>
                      </Routes>
                  </div>
                  <FooterComponent />
          </Router>
      </div>

  );
}

export default App;
