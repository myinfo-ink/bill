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

    /**
     * share
     */
    document.querySelector('#share').onclick = function(){
        window.open('https://connect.qq.com/widget/shareqq/iframe_index.html?title=Bill Dong&url=https://bill.myinfo.ink&summary=Bill Dong From Beijing, China.&style=201&width=32&height=32');
    }
})(window, document);
