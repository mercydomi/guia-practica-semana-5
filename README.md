# BiblioPanel

SPA demostrativa para una biblioteca universitaria, creada con React, JavaScript y Vite para la Guía Práctica Semana 05 de Desarrollo de Aplicaciones Web (UNCP).

## Instalación y ejecución

```powershell
npm.cmd install
npm.cmd run dev
```

Validación:

```powershell
npm.cmd run build
npm.cmd run lint
```

## Arquitectura

- `App`: coordina la vista.
- `Header`: navegación interna semántica.
- `Dashboard`: recibe las métricas y compone las tarjetas.
- `MetricCard`: recibe props y utiliza CSS Modules.
- `InfoSection`: contenido informativo reutilizable.
- `src/data/libraryMetrics.js`: datos ficticios estructurados.

Las props fluyen del padre al hijo y no se modifican. Las listas usan claves estables. `Dashboard` acepta `children` para composición anidada. La composición general usa CSS global; `MetricCard.module.css` aísla los estilos de cada tarjeta y el acento se entrega con una variable CSS inline.

## CSR y datos

Vite entrega el HTML inicial con `#root`; React renderiza el panel en el navegador con `createRoot`. Es CSR, no SSR ni hidratación. Todos los valores son **Datos de demostración**: no hay backend, autenticación, base de datos ni integración externa.
