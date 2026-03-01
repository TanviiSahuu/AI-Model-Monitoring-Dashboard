import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart
} from 'recharts';
import KpiCard from '../components/KpiCard';
import { accuracyTrend, alerts, kpis } from '../data';

export default function DashboardPage() {
  return (
    <section className="dashboard-grid">
      <div className="kpi-grid">
        <KpiCard label="Current Accuracy" value={kpis.accuracy} unit="%" trend="▼ 0.7% vs last hour" />
        <KpiCard label="System Latency" value={kpis.latency} unit="ms" trend="▲ 12ms vs baseline" />
        <KpiCard label="Prediction Volume" value={kpis.volume.toLocaleString()} trend="▲ 2.3% since morning" />
        <KpiCard label="Data Drift" value={kpis.drift} unit="%" trend="▲ 1.1% this afternoon" />
      </div>

      <div className="chart-grid">
        <article className="panel">
          <h3>Accuracy Over Time</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={accuracyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[90, 97]} />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#1f6feb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </article>

        <article className="panel">
          <h3>Prediction Throughput</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={accuracyTrend.map((point, index) => ({ ...point, requests: 800 + index * 120 }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="requests" stroke="#2da44e" fill="#7ee787" />
            </AreaChart>
          </ResponsiveContainer>
        </article>
      </div>

      <article className="panel">
        <h3>Live Alerts</h3>
        <ul className="alerts-list">
          {alerts.map((alert) => (
            <li key={alert.id} className={`alert ${alert.severity}`}>
              <strong>{alert.severity.toUpperCase()}</strong>
              <span>{alert.message}</span>
              <small>{alert.timestamp}</small>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
