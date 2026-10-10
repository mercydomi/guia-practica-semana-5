import styles from './MetricCard.module.css'
/** @param {{label: string, value: string, description: string, icon: string, color: string}} props */
function MetricCard({ label, value, description, icon, color }) { return <article className={styles.card} style={{ '--accent-color': color }}><div className={styles.topLine}><span className={styles.icon} aria-hidden="true">{icon}</span><span className={styles.status}>Demostración</span></div><p className={styles.label}>{label}</p><p className={styles.value}>{value}</p><p className={styles.description}>{description}</p></article> }
export default MetricCard
