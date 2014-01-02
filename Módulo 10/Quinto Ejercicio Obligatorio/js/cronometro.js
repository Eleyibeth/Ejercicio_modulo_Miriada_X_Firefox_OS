$(function () {
    localStorage.c = localStorage.c || '0.0';
    localStorage.t = localStorage.t || '';
    var t, cl = $('#crono');
    var enMarcha = false;
    function incr() {
        localStorage.c = +localStorage.c + 0.1
    }
    ;
    function mostrar() {
        cl.html((+localStorage.c).toFixed(1))
    }
    ;
    function arrancar() {
        t = setInterval(function () {
            incr();
            mostrar()
        }, 100);
        enMarcha = true;
        $('#cambiar').html('Parar')
    }
    ;
    function parar() {
        clearInterval(t);
        t = undefined;
        $('#cambiar').html('Continuar');
        localStorage.t += $('#crono').html() + ';';
        rellernarLista();
        enMarcha = false
    }
    ;
    function cambiar() {
        if (!t)
            arrancar();
        else
            parar()
    }
    function rellernarLista() {
        var list = localStorage.t;
        listTiempos = list.split(';');
        var t1 = '';
        for (var i = listTiempos.length - 1; i >= 0; i--) {
            if (listTiempos[i].length > 0)
                t1 += '<li>' + listTiempos[i] + ' segundos</li>'
        }
        ;
        $('#tiempos').html(t1)
    }
    function inicializar() {
        if (enMarcha === false) {
            localStorage.c = '0.0';
            localStorage.t = '';
            mostrar();
            $('#cambiar').html('Arrancar');
            rellernarLista()
        }
    }
    $('#cambiar').on('click', cambiar);
    $('#inicializar').on('click', inicializar);
    $('body').on('tap', cambiar);
    $('body').on('swipe', inicializar)
})