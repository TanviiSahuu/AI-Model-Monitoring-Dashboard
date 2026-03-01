import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/models', label: 'Models' },
  { path: '/alerts', label: 'Alerts' },
  { path: '/logs', label: 'Logs' },
  { path: '/settings', label: 'Settings' }
];

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to="/" className="brand">ModelOps</Link>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="main-area">
        <header className="topbar">
          <h1>AI Model Monitoring Dashboard</h1>
          <div className="topbar-actions">
            <button type="button">🔔 Notifications</button>
            <button type="button">👤 Data Team</button>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
