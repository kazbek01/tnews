var btnburger = document.getElementById('btn-burger');
var sbox = document.getElementById('s-box');
var over = document.getElementById('over');
var menu = document.getElementById('menu-fix');
function opennav() {
    menu.style.opacity = '1';
    menu.style.zIndex = '3';
    over.style.opacity = '1';
    over.style.zIndex = '2';
    over.style.backgroundColor = 'rgba(0, 0, 0, 0.54)';
}
function closenav() {
    menu.style.opacity = '0';
    menu.style.zIndex = '-1';
    // menu.style.display = 'none';
    over.style.opacity = '0';
    over.style.zIndex = '-1';
}
function opensearch() {
    sbox.style.opacity = '1';
    sbox.style.display = 'block';
    sbox.style.zIndex = '2';
    over.style.backgroundColor = 'transparent';
    over.style.opacity = '1';
    over.style.zIndex = '1';
}
over.onclick = function () {
    sbox.style.display = 'none';
    over.style.opacity = '0';
    menu.style.opacity = '0';
    menu.style.zIndex = '-1';
    over.style.zIndex = '-1'
    sbox.style.zIndex = '-8';
}