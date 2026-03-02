import { useMemo, useState } from 'react';
import { logs } from '../data';

export default function LogsPage() {
  const [modelFilter, setModelFilter] = useState('all');

  const filteredLogs = useMemo(() => {
    if (modelFilter === 'all') {
      return logs;
    }
    return logs.filter((entry) => entry.model === modelFilter);
  }, [modelFilter]);

  return (
    <section className="panel">
      <h2>Prediction Logs</h2>
      <label htmlFor="modelFilter">Filter by model:</label>
      <select id="modelFilter" value={modelFilter} onChange={(event) => setModelFilter(event.target.value)}>
        <option value="all">All Models</option>
        {[...new Set(logs.map((entry) => entry.model))].map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Prediction</th>
            <th>Confidence</th>
            <th>Latency</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.model}</td>
              <td>{entry.prediction}</td>
              <td>{(entry.confidence * 100).toFixed(1)}%</td>
              <td>{entry.latency}ms</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
