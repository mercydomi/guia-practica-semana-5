import Header from './components/Header.jsx'
import Dashboard from './components/Dashboard.jsx'
import MetricCard from './components/MetricCard.jsx'
import InfoSection from './components/InfoSection.jsx'
import { libraryMetrics } from './data/libraryMetrics.js'
import './styles/App.css'

function App() {
  const metricCards = libraryMetrics.map((metric) => <MetricCard key={metric.id} {...metric} />)

  return <><Header /><main><section className="hero" id="panel" aria-labelledby="page-title"><p className="eyebrow">Biblioteca universitaria</p><h1 id="page-title">BiblioPanel</h1><p className="hero__description">Consulta un resumen claro de la actividad bibliotecaria del campus.</p><p className="demo-notice" role="note">Datos de demostración: información ficticia para fines académicos.</p></section><Dashboard metrics={libraryMetrics}>{metricCards}</Dashboard><section className="content-section" aria-labelledby="about-title"><div><p className="eyebrow">Visión general</p><h2 id="about-title">Un panel pensado para la comunidad universitaria</h2></div><p>Este prototipo presenta indicadores clave de una biblioteca sin conexión a servicios externos, base de datos ni autenticación.</p></section><div className="info-grid"><InfoSection id="componentes" eyebrow="React" title="Componentes" items={['Header para navegación semántica.', 'Dashboard como contenedor de métricas.', 'MetricCard reutilizable mediante props.']} /><InfoSection id="estilado" eyebrow="Interfaz" title="Estilado" items={['CSS global para la composición de la página.', 'CSS Modules para aislar cada tarjeta.', 'Color de acento recibido por props con estilo inline.']} /><InfoSection id="csr" eyebrow="Renderizado" title="CSR" items={['Vite entrega un HTML inicial con #root.', 'React crea el contenido en el navegador.', 'No se implementa SSR ni hidratación en esta práctica.']} /></div></main><footer className="site-footer"><p>BiblioPanel · Desarrollo de Aplicaciones Web · UNCP</p><p>Datos de demostración</p></footer></>
}

export default App
