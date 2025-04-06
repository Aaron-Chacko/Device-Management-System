import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login/Login'; // Adjust the path if needed
import Dashboard from './screens/Dashboard/Dashboard'; // Adjust the path if needed
import DeviceList from './screens/DeviceList/List';
import Edit from './screens/EditDevice/edit';
import AssignDeviceModal from './screens/AssignModal/assign';
import Reports from './screens/Reports/reports';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Adjust the path if needed */}
        <Route path="/devices" element={<DeviceList />} /> {/* Adjust the path if needed */}
        <Route path="/edit" element={<Edit />} /> {/* Adjust the path if needed */}
        <Route path="/assign" element={<AssignDeviceModal />} /> {/* Adjust the path if needed */}
        <Route path="/reports" element={<Reports />} /> {/* Adjust the path if needed */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
