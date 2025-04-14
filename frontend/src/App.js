import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./screens/Login/Login";
import Dashboard from "./screens/Dashboard/Dashboard";
import DeviceList from "./screens/DeviceList & others/DevList/List";
import AssignDeviceModal from "./screens/AssignModal/assign";
import Reports from "./screens/Reports/reports";
import Layout from "./Components/layout";
import NetworkList from "./screens/DeviceList & others/NetList/Netlist";
import VersionList from "./screens/DeviceList & others/VerList/Verlist";
import ActivityList from "./screens/DeviceList & others/ActList/Actlist";
import AddMenu from "./screens/AddMenu/Menu/menu";
import AddDevice from "./screens/AddMenu/AddDevice/Adddevice";
import AddNetwork from "./screens/AddMenu/AddNetwork/Addnetwork";
import AddVersion from "./screens/AddMenu/AddVersion/Addversion";
import AddActivity from "./screens/AddMenu/AddActivity/Addactivity";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes WITH Navbar */}
        <Route element={<Layout />}>
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/network" element={<NetworkList />} />
          <Route path="/version" element={<VersionList />} />
          <Route path="/activity" element={<ActivityList />} />
        </Route>

        {/* Routes WITHOUT Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assign" element={<AssignDeviceModal />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/edit" element={<AddMenu />} />
        <Route path="/edit/device" element={<AddDevice />} />
        <Route path="/edit/network" element={<AddNetwork />} />
        <Route path="/edit/version" element={<AddVersion />} />
        <Route path="/edit/activity" element={<AddActivity />} />

        {/* Redirect everything else to login, kinda like error handling */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
