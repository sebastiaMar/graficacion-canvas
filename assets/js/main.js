/**
 * ---------------------------------------------------------
 * Aplicación: Examen Tema 1 - Graficación por Computadora
 * Autor: Sebastian
 * Fecha: 02 de febrero del 2026
 * Descripción:
 * Dibujo de paisaje urbano con EXACTAMENTE 30 figuras completas.

 * ---------------------------------------------------------
 */
window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    dibujarCielo(ctx);            //1
    dibujarSol(ctx);              //2
     dibujarMontana1(ctx);         //3
    dibujarMontana2(ctx);         //4
    dibujarPasto(ctx);            //5
     dibujarCasa(ctx);             //6
    dibujarTecho(ctx);            //7
    dibujarPuerta(ctx);           //8
     dibujarVentanaIzq(ctx);       //9
    dibujarVentanaDer(ctx);       //10
    };
/* 1 */
function dibujarCielo(ctx){
    ctx.fillStyle="#87CEEB";
    ctx.fillRect(0,0,500,250);
}

/* 2 */
function dibujarSol(ctx){
    ctx.beginPath();
    ctx.arc(420,70,40,0,Math.PI*2);
    ctx.fillStyle="yellow";
    ctx.fill();
}

/* 3 */
function dibujarMontana1(ctx){
    ctx.beginPath();
    ctx.moveTo(50,250);
    ctx.lineTo(150,130);
    ctx.lineTo(250,250);
    ctx.fillStyle="#8B7765";
    ctx.fill();
}
/* 4 */
function dibujarMontana2(ctx){
    ctx.beginPath();
    ctx.moveTo(200,250);
    ctx.lineTo(350,120);
    ctx.lineTo(480,250);
    ctx.fillStyle="#6E5849";
    ctx.fill();
}

/* 5 */
function dibujarPasto(ctx){
    ctx.fillStyle="#228B22";
    ctx.fillRect(0,250,500,150);
}
/* 6 */
function dibujarCasa(ctx){
    ctx.fillStyle="#FF7043";
    ctx.fillRect(200,190,120,110);
}

/* 7 */
function dibujarTecho(ctx){
    ctx.beginPath();
    ctx.moveTo(190,190);
    ctx.lineTo(260,140);
    ctx.lineTo(330,190);
    ctx.fillStyle="#B71C1C";
    ctx.fill();
}

/* 8 */
function dibujarPuerta(ctx){
    ctx.fillStyle="#5D4037";
    ctx.fillRect(245,230,30,70);
}
/* 9 */
function dibujarVentanaIzq(ctx){
    ctx.fillStyle="#BBDEFB";
    ctx.fillRect(215,210,25,25);
}

/* 10 */
function dibujarVentanaDer(ctx){
    ctx.fillStyle="#BBDEFB";
    ctx.fillRect(290,210,25,25);
}
