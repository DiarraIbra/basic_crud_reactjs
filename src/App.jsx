import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//importation des composants
import ClientList from "./components/ClientList";
import CreateClient from "./components/CreateClient";
import ClientDetails from "./components/ClientsDetail";
import UpdateClient from "./components/UpdateClient";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/clients" replace />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/clients/create" element={<CreateClient />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="/clients/:id/update" element={<UpdateClient />} />
      </Routes>
    </Router>
  );
};
export default App;
