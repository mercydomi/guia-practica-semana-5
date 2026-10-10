const navigation = [{ href: '#panel', label: 'Panel' }, { href: '#componentes', label: 'Componentes' }, { href: '#estilado', label: 'Estilado' }, { href: '#csr', label: 'CSR' }]
function Header() { return <header className="site-header"><a className="brand" href="#panel" aria-label="BiblioPanel: volver al inicio"><span className="brand__mark" aria-hidden="true">B</span><span>BiblioPanel</span></a><nav aria-label="Navegación principal"><ul className="main-nav">{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></nav></header> }
export default Header
