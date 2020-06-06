var canvas = document.getElementById("canvas");
let mover = document.getElementById("canvas");
let velocidad = 50;
let mTop = 0;
let mLeft =0;

var c = canvas.getContext("2d");
///colores
var el_color = ["white"];
c.fillStyle = el_color;
var fontSize=+0;


function pintarReloj(){
c.beginPath();
c.fillRect(0,0,canvas.width, canvas.height);
c.fill();

var now = new Date();
h=now.getHours();
m = now.getMinutes();
s = now.getSeconds();
ampm= (h<12? 'AM':'PM');
//Hace que la hora no sea de 24h
h = (h % 12);
h = addLeadingZeroWhenNecessary(h);
m = addLeadingZeroWhenNecessary(m);
s = addLeadingZeroWhenNecessary(s);

var clockText =
h + ':' +
m + ':' +
s + ':' + ampm,
x = 10,
y = 60;
c.fillText (clockText, x, y);
c.strokeText (clockText, x, y);

}
function addLeadingZeroWhenNecessary(s) {
return (s < 10 ? '0' : '') + s;
}

window.addEventListener("load", inicializar, false);
function inicializar() {
  //guarda una referencia al input type="color" en una variable
  input_color = document.querySelector("[type='color']");
  //define el valor predeterminado del input type="color"
  input_color.value = el_color;
  pintarReloj();
  input_color.addEventListener("input", actualizar, false);
  input_color.select();
}
function actualizar(event) {
  // detecta el nuevo color 
  el_color = event.target.value;
  // actualiza el relleno del rectángulo
  c.strokeStyle = el_color;
  // y lo vuelve a dibujar en el canvas
 
	pintarReloj();
	setInterval(pintarReloj,1000);
  }

 
        // funcion para aumentar la fuente
        function zoomIn() {


			document.getElementById('canvas').style.font = '90px';



        }
 
        // funcion para disminuir la fuente
        function zoomOut() {
			document.getElementById('canvas').style.font = '30px';

		}


document.addEventListener("keydown",function(e){
	if (e.keyCode == "39") {
		moverDerecha();

	}
	if (e.keyCode == "37") {
		moverIzquierda();

	}
	if (e.keyCode == "38") {
		moverArriba();

	}
	if (e.keyCode == "40") {
		moverAbajo();

	}
})
function moverDerecha(){
	mLeft += velocidad;
	canvas.style.marginLeft = mLeft +"px";

}
function moverIzquierda(){
	mLeft -= velocidad;
	canvas.style.marginLeft = mLeft +"px";
}
function moverArriba(){
	mTop -= velocidad;
	canvas.style.marginTop = mTop +"px";
}
function moverAbajo(){
	mTop += velocidad;
	canvas.style.marginTop = mTop +"px";
}