import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { models } from '../data';

export default function ModelDetailPage() {
  const { modelId } = useParams();
  const model = models.find((item) => item.id === modelId);

  const trend = useMemo(
    () => [
      { at: 'Mon', value: model?.accuracy - 1.2 || 91 },
      { at: 'Tue', value: model?.accuracy - 0.9 || 91.5 },
      { at: 'Wed', value: model?.accuracy - 0.7 || 92 },
      { at: 'Thu', value: model?.accuracy - 0.3 || 92.7 },
      { at: 'Fri', value: model?.accuracy || 93.2 }
    ],
    [model]
  );

  if (!model) {
    return <section className="panel">Model not found.</section>;
  }

  return (
    <section className="dashboard-grid">
      <article className="panel">
        <h2>{model.name}</h2>
        <p><strong>Accuracy:</strong> {model.accuracy}%</p>
        <p><strong>Latency:</strong> {model.latency}ms</p>
        <p><strong>Prediction Volume:</strong> {model.volume.toLocaleString()}</p>
        <p><strong>Status:</strong> {model.status}</p>
      </article>

      <article className="panel">
        <h3>Weekly Accuracy Trend</h3>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={trend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="at" />
            <YAxis domain={[85, 100]} />
            <Tooltip />
            <Line dataKey="value" stroke="#8250df" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </article>
    </section>
  );
}
