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