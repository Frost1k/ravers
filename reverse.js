// ==UserScript==
// @name        LAMPA ReV Plugin
// @namespace   lampa-reverse
// @description Добавляет кнопку реверса списка в LAMPA
// @version     1.0
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
    // Ждём полной загрузки интерфейса
    function waitForElement(selector, callback) {
        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                callback();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Добавляем кнопку ReV
    function addReverseButton() {
        const controls = document.querySelector('.head__buttons'); // Селектор для контейнера кнопок в LAMPA
        if (!controls) return;

        const btn = document.createElement('div');
        btn.className = 'selector__button'; // Используем стили LAMPA
        btn.innerHTML = '<div class="selector__title">ReV</div>';
        btn.onclick = toggleReverse;

        controls.appendChild(btn);
    }

    // Реверс списка
    function toggleReverse() {
        const list = document.querySelector('.card-list__render'); // Селектор для списка карточек
        if (!list) return;

        const items = Array.from(list.children);
        list.innerHTML = '';
        items.reverse().forEach(item => list.appendChild(item));
    }

    // Инициализация
    waitForElement('.head__buttons', addReverseButton);
})();
