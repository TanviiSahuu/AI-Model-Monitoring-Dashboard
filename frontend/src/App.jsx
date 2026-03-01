import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import ModelsPage from './pages/ModelsPage';
import ModelDetailPage from './pages/ModelDetailPage';
import AlertsPage from './pages/AlertsPage';
import LogsPage from './pages/LogsPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/models/:modelId" element={<ModelDetailPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
}
