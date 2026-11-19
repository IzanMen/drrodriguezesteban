(function () {
  var jq = document.createElement('script');
  jq.src = 'https://www.nuclisoftware.es/js/jquery-2.2.3.min.js';
  jq.onload = function () {
    var jQuery223 = jQuery.noConflict(true);
    window.$ = jQuery223;
    var br = document.createElement('script');
    br.src = 'https://www.nuclisoftware.es/js/botonReservas.js';
    br.onload = function () {
      jQuery223(document).on('click', '[data-cita-id]', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $b = jQuery223(this);
        var id = $b.attr('data-cita-id');
        var lang = $b.attr('data-lang') || 'es';
        if (typeof abrirCitaOnline === 'function') abrirCitaOnline(id, lang);
        else console.warn('[Nucli] abrirCitaOnline no disponible');
      });
    };
    document.body.appendChild(br);
  };
  document.head.appendChild(jq);
})();
