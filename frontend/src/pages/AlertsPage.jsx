import { alerts } from '../data';

export default function AlertsPage() {
  return (
    <section className="panel">
      <h2>Alerts</h2>
      <ul className="alerts-list">
        {alerts.map((alert) => (
          <li key={alert.id} className={`alert ${alert.severity}`}>
            <strong>{alert.severity.toUpperCase()}</strong>
            <span>{alert.message}</span>
            <small>{alert.timestamp}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
