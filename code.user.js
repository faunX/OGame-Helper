// ==UserScript==
// @name         OGame Helper
// @namespace    https://github.com/MrBurrBurr
// @version      0.3
// @description  see you in space, cowboys!
// @author       FREDERICK
// @match        https://*.ogame.gameforge.com/*
// @icon         https://www.google.com/s2/favicons?domain=lobby.ogame.gameforge.com
// @grant        none
// @downloadURL  https://github.com/MrBurrBurr/OGame-Helper/raw/main/code.user.js
// @updateURL    https://github.com/MrBurrBurr/OGame-Helper/raw/main/code.user.js
// ==/UserScript==

(function() {
    'use strict';

    const currentStage = 3;
	const stageValue = `stage_${currentStage}`;
    const defence = [
        {
            name: 'rocketLauncher',
            stage_1: 500,
            stage_2: 1000,
            stage_3: 2000,
        },
        {
            name: 'laserCannonLight',
            stage_1: 200,
            stage_2: 500,
            stage_3: 1000,
        },
        {
            name: 'laserCannonHeavy',
            stage_1: 100,
            stage_2: 200,
            stage_3: 500,
        },
        {
            name: 'gaussCannon',
            stage_1: 10,
            stage_2: 20,
            stage_3: 50,
        },
        {
            name: 'plasmaCannon',
            stage_1: 5,
            stage_2: 10,
            stage_3: 25,
        },
        {
            name: 'ionCannon',
            stage_1: 10,
            stage_2: 50,
            stage_3: 100,
        },
        {
            name: 'missileInterceptor',
            stage_1: 10,
            stage_2: 20,
            stage_3: 50,
        }
    ];
    const facilities = [
        {
            name: 'roboticsFactory',
            defaultValue: 8,
        },
        {
            name: 'shipyard',
            defaultValue: 8,
        },
        {
            name: 'missileSilo',
			defaultValue: null,
            stage_1: 2,
            stage_2: 3,
            stage_3: 4,
        }
    ];

    defence.forEach(def => setShouldBeText(def.name, def[stageValue]));
    facilities.forEach(fac => {
		const value = fac.defaultValue ? fac.defaultValue : fac[stageValue];
		setShouldBeText(fac.name, value)
	});

    function setShouldBeText(className, value) {
        const shouldBeStyling = 'style="color:#6f9fc8;bottom:5px;left:15px;position:absolute;z-index:99;"';
        const element = document.getElementsByClassName(`technology ${className}`)[0];
        if (element) element.innerHTML = `<p ${shouldBeStyling}>${value}</p>${element.innerHTML}`;
    }
})();
