import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login/Login';
import Dashboard from './screens/Dashboard/Dashboard';
import DeviceList from './screens/DeviceList & others/DevList/List';
import Edit from './screens/EditDevice/edit';
import AssignDeviceModal from './screens/AssignModal/assign';
import Reports from './screens/Reports/reports';
import Layout from './Components/layout';
import NetworkList from './screens/DeviceList & others/NetList/Netlist';
import VersionList from './screens/DeviceList & others/VerList/Verlist';
import ActivityList from './screens/DeviceList & others/ActList/Actlist';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes WITH Navbar */}
        <Route element={<Layout />}>
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/network" element={<NetworkList />} />
          <Route path="/activity" element={<VersionList />} />
          <Route path="/version" element={<ActivityList />} />
        </Route>

        {/* Routes WITHOUT Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/assign" element={<AssignDeviceModal />} />
        <Route path="/reports" element={<Reports />} />

        {/* Redirect everything else to login, kinda like error handling */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
