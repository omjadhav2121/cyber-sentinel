import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Navbar';
import Dashboard from './Pages/Dashboard'; // Import the Dashboard component
import ScanDetails from './Pages/ScanDeatails'; // Import the ScanDetails component
import Scans from './Pages/Scans'; // Import the Scans component
import UserControl from './Pages/UserControl'; // Import the UserControl component
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
     <div className='display'>
     <div className="app">
        <Sidebar />
        </div>
        <div className="content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/scan-details" component={ScanDetails} />
            <Route path="/scans" component={Scans} />
            <Route path="/user-control" component={UserControl} />
          </Switch>
        </div>
     </div>
      
    </Router>
  );
};

export default App;