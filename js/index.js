(function(window, document) {
    var isForceOpenCard = false;

    document.querySelector('h2').onmouseover = function() {
        document.querySelector('#card').style.opacity = '1';
    }

    document.querySelector('h2').onmouseout = function() {
        if (!isForceOpenCard) {
            document.querySelector('#card').style.opacity = '0';
        }
    }

    document.querySelector('h2').onclick = function() {
        setTimeout(function(){
            document.querySelector('#card').style.opacity = '1';
            isForceOpenCard = true;
        }, 0)
    }

    window.onclick = function() {
        document.querySelector('#card').style.opacity = '0';
        isForceOpenCard = false;
    }
})(window, document);
