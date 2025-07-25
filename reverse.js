// reverse_plugin.js
(function() {
    function init() {
        addReverseButton();
    }

    function addReverseButton() {
        const controls = document.querySelector('.controls');
        if (!controls) return;

        const btn = document.createElement('button');
        btn.textContent = '↕ Реверс';
        btn.onclick = toggleReverse;
        controls.appendChild(btn);
    }

    function toggleReverse() {
        const list = document.querySelector('.card-list');
        if (!list) return;

        const items = Array.from(list.children);
        list.innerHTML = '';
        items.reverse().forEach(item => list.appendChild(item));
    }

    // Регистрация плагина
    if (window.LAMPA) {
        LAMPA.registerPlugin('reverse', {
            init: init
        });
    }
})();