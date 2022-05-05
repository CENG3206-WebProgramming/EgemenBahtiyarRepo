"use strict";

(function () {
    window.addEventListener("load", init);

    function init() {
        let buttons = qs("button");
        let button1 = qs("#button1");
        let button2 = qs("#button2");
        buttons.addEventListener("click", function () {});
        button1.addEventListener("click", click);
        button2.addEventListener(
            "click",
            () => {
                let button2Content = button2.textContent;
                button2.textContent = `${button1.textContent}`;
                button1.textContent = button2Content;
            },
            click
        );
    }

    /**
     * @param {object} e Event -- Event details
     */
    function click(e) {
        console.log("clicked");
    }

    /** ---- Helper Functions  ---- */

    function gen(tagName) {
        return document.createElement(tagName);
    }

    function id(idName) {
        return document.getElementById(idName);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }
})();
