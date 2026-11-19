# drrodriguezesteban.es

Proyecto Astro reconstruido a partir del build de producción recuperado.

## Comandos

```sh
npm install
npm run dev
npm run build
npm run check:parity
```

Los HTML recuperados de la raíz y de cada carpeta de ruta son la fuente
canónica. Astro los emite sin modificar su marcado, espacios, metadatos ni
scripts. Los recursos originales se exponen desde `public/` y la compilación se
genera en `dist/`.

`npm run check:parity` compara cada archivo generado con el build recuperado y
falla si cambia un solo byte.

## Reserva online de Nucli

Los botones con `data-cita-id` abren la agenda de Nucli para el centro
`620bd35218cbcfc149d46d8296ff5fe8-1`. El cargador común está en
`nucli-reservas.js` y se incluye al final de todas las páginas. Carga la
jQuery 2.2.3 aislada y el módulo `botonReservas.js` desde Nucli.
