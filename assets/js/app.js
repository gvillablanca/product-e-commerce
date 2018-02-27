'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('inicio', 'inicio.html', true),
            new Route('clothes', 'productoFiltro.html'),
            new Route('house', 'productoFiltro.html'),
            new Route('tech', 'productoFiltro.html'),
            new Route('beauty', 'productoFiltro.html'),
            new Route('child', 'productoFiltro.html'),
            new Route('pets', 'productoFiltro.html')
        ]);
    }
    init();

}());
