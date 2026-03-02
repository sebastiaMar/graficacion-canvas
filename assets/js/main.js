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
    dibujarArbol(ctx, 80);        //11
    dibujarArbol(ctx, 140);       //12
    dibujarArbol(ctx, 200);       //13
    dibujarNube(ctx, 100, 80);    //14
    dibujarNube(ctx, 300, 60);    //15
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
/* 11-13 */
function dibujarArbol(ctx,x){
    ctx.fillStyle="#8B4513";
    ctx.fillRect(x,230,20,60);
    ctx.beginPath();
    ctx.arc(x+10,210,30,0,Math.PI*2);
    ctx.fillStyle="green";
    ctx.fill();
}

/* 14-15 */
function dibujarNube(ctx,x,y){
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(x,y,20,0,Math.PI*2);
    ctx.arc(x+25,y,20,0,Math.PI*2);
    ctx.arc(x+50,y,20,0,Math.PI*2);
    ctx.fill();
}