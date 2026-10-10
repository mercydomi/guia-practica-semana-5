import MetricCard from './MetricCard.jsx'
/** @param {{ metrics: Array<{id: string, label: string, value: string, description: string, icon: string, color: string}>, children?: React.ReactNode }} props */
function Dashboard({ metrics, children }) { const cards = metrics.map((metric) => <MetricCard key={metric.id} {...metric} />); return <section className="dashboard" aria-labelledby="metrics-title"><div className="section-heading"><div><p className="eyebrow">Resumen del día</p><h2 id="metrics-title">Indicadores de biblioteca</h2></div><p className="section-heading__note">Actualización simulada · Octubre 2026</p></div><div className="metrics-grid">{children ?? cards}</div></section> }
export default Dashboard
