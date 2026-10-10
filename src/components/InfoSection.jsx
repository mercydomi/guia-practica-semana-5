/** @param {{id: string, eyebrow: string, title: string, items: string[]}} props */
function InfoSection({ id, eyebrow, title, items }) { return <section className="info-card" id={id} aria-labelledby={`${id}-title`}><p className="eyebrow">{eyebrow}</p><h2 id={`${id}-title`}>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section> }
export default InfoSection
