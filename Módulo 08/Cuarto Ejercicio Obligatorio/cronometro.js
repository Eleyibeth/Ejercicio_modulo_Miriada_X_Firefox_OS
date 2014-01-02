$(function(){
	localStorage.c = (localStorage.c || "0.0");
	var t = $("#crono");
	var cl = $("#crono");
	function incr(){ localStorage.c = +localStorage.c +0.1; };
	function mostrar(){ cl.html((+localStorage.c).toFixed(1)); };
	function arrancar(){ t=setInterval(function(){incr(); mostrar()}, 100);
							$("cambiar").html("Parar");};
	function parar(){clearInterval(t); t=undefined; $("cambiar").html("Arrnacar");};

	$("#cambiar").on('click', cambiar);
	$("#inicializar").on('click', function(){ localStorage.c="0.0"; mostrar();});
});