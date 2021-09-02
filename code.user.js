// ==UserScript==
// @name         OGame Helper
// @namespace    https://github.com/MrBurrBurr
// @version      0.1
// @description  see you in space, cowboys!
// @author       FREDERICK
// @match        https://*.ogame.gameforge.com/*
// @icon         https://www.google.com/s2/favicons?domain=lobby.ogame.gameforge.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/MrBurrBurr/OGame-Helper/master/code.user.js
// @updateURL    https://raw.githubusercontent.com/MrBurrBurr/OGame-Helper/master/code.user.js
// ==/UserScript==

(function() {
    'use strict';

    const RLShouldBe = 2000;
    const LLShouldBe = 1000;
    const HLShouldBe = 500;
    const GCShouldBe = 50;
    const PTShouldBe = 25;
    const ICShouldBe = 100;
    const AMShouldBe = 50;

    setShouldBeText('rocketLauncher', RLShouldBe);
    setShouldBeText('laserCannonLight', LLShouldBe);
    setShouldBeText('laserCannonHeavy', HLShouldBe);
    setShouldBeText('gaussCannon', GCShouldBe);
    setShouldBeText('plasmaCannon', PTShouldBe);
    setShouldBeText('ionCannon', ICShouldBe);
    setShouldBeText('missileInterceptor', AMShouldBe);

    function setShouldBeText(className, value) {
        const shouldBeStyling = 'style="color:#6f9fc8;bottom:5px;left:15px;position:absolute;z-index:99;"';
        const element = document.getElementsByClassName(className)[0];
        if (element) element.innerHTML = `<p ${shouldBeStyling}>${value}</p>${element.innerHTML}`;
    }
})();
