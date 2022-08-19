import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/layouts";

import {
  Dashboard,
  AutoCenters,
  Forms,
  Resources,
  Dispatch,
  Groups,
  Report,
  FinanceSheet,
  Settings,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/auto-centers" element={<AutoCenters />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/report" element={<Report />} />
        <Route path="/finance-sheet" element={<FinanceSheet />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
