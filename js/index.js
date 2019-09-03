document.querySelector('h2').onmouseover = function() {
    document.querySelector('#card').style.opacity = '1';
}

document.querySelector('h2').onmouseout = function() {
    document.querySelector('#card').style.opacity = '0';
}
