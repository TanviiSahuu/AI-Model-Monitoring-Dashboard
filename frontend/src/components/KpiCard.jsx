export default function KpiCard({ label, value, unit, trend }) {
  return (
    <article className="kpi-card">
      <p>{label}</p>
      <h3>
        {value}
        {unit ? <span>{unit}</span> : null}
      </h3>
      <small>{trend}</small>
    </article>
  );
}
