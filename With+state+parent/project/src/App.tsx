import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Logs from './pages/Logs';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar />
          <Routes>
            <Route path="/logs" element={<Logs />} />
            <Route path="*" element={<Navigate to="/logs" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;