// ==UserScript==
// @name         OGame Helper
// @namespace    https://github.com/MrBurrBurr
// @version      0.9
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

  const currentStage = 4;
  const stageValue = `stage_${currentStage}`;
  const defence = [
    {
      name: 'rocketLauncher',
      stage_1: 500,
      stage_2: 1000,
      stage_3: 2000,
      stage_4: 3000,
    },
    {
      name: 'laserCannonLight',
      stage_1: 200,
      stage_2: 500,
      stage_3: 1000,
      stage_4: 1500,
    },
    {
      name: 'laserCannonHeavy',
      stage_1: 100,
      stage_2: 200,
      stage_3: 500,
      stage_4: 750,
    },
    {
      name: 'gaussCannon',
      stage_1: 10,
      stage_2: 20,
      stage_3: 50,
      stage_4: 100,
    },
    {
      name: 'plasmaCannon',
      stage_1: 5,
      stage_2: 10,
      stage_3: 25,
      stage_4: 50,
    },
    {
      name: 'ionCannon',
      stage_1: 10,
      stage_2: 50,
      stage_3: 100,
      stage_4: 250,
    },
    {
      name: 'shieldDomeSmall',
      stage_1: 1,
      stage_2: 1,
      stage_3: 1,
      stage_4: 1,
    },
    {
      name: 'shieldDomeLarge',
      stage_1: 0,
      stage_2: 1,
      stage_3: 1,
      stage_4: 1,
    },
    {
      name: 'missileInterceptor',
      stage_1: 20,
      stage_2: 30,
      stage_3: 40,
      stage_4: 50,
    },
  ];
  const facilities = [
    {
      name: 'roboticsFactory',
      defaultValue: 10,
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
      stage_4: 5,
    },
    {
      name: 'naniteFactory',
      defaultValue: 1,
    },
    {
      name: 'allianceDepot',
      stage_1: 0,
      stage_2: 0,
      stage_3: 0,
      stage_4: 0,
    },
    {
      name: 'repairDock',
      stage_1: 0,
      stage_2: 0,
      stage_3: 0,
      stage_4: 0,
    }
  ];

  defence.forEach(def => setShouldBeText(def.name, def[stageValue]));

  facilities.forEach(fac => {
    const value = fac.defaultValue ? fac.defaultValue : fac[stageValue];
    setShouldBeText(fac.name, value)
  });

  function setShouldBeText(className, value) {
    const shouldBeStyling = 'style="color:#6f9fc8;left:5px;text-align:left;background:none;z-index:99;"';
    const element = document.querySelector(`.technology .${className}`);
    const amountElement = document.querySelector(`.technology .${className} > span`);
    const amount = (amountElement) ? amountElement.dataset.value : null;

    if (!element && !amount) return;
    if (amount >= value) element.remove();
    else element.innerHTML = `<span class="amount" ${shouldBeStyling}>${value}</span>${element.innerHTML}`;
  }
})();
