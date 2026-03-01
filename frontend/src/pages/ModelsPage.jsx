import { Link } from 'react-router-dom';
import { models } from '../data';

export default function ModelsPage() {
  return (
    <section className="panel">
      <h2>Deployed Models</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>Latency</th>
            <th>Volume</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.id}>
              <td><Link to={`/models/${model.id}`}>{model.name}</Link></td>
              <td>{model.accuracy}%</td>
              <td>{model.latency}ms</td>
              <td>{model.volume.toLocaleString()}</td>
              <td>{model.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
