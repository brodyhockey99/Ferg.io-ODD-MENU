// ==UserScript==
// @name         Venge.io HACKS 1.0.27 UNLIMTIED AMMO INF JUMP AUTO KILL TELEPORT AIMBOT ESP TIMESCALE
// @version      1.2
// @description  Venge.io HACKS
// @author       MetaHuman, MetaRobotHacks
// @match        https://venge.io/
// @grant        none
// @run-at       document-start
// @namespace https://greasyfork.org/users/662462
// @downloadURL https://update.greasyfork.org/scripts/406377/Vengeio%20HACKS%201027%20UNLIMTIED%20AMMO%20INF%20JUMP%20AUTO%20KILL%20TELEPORT%20AIMBOT%20ESP%20TIMESCALE.user.js
// @updateURL https://update.greasyfork.org/scripts/406377/Vengeio%20HACKS%201027%20UNLIMTIED%20AMMO%20INF%20JUMP%20AUTO%20KILL%20TELEPORT%20AIMBOT%20ESP%20TIMESCALE.meta.js
// ==/UserScript==

var Hack = function() {
	this.settings = {
		infAmmo: false,
		infJump: false,
		autoKill: false,
		speedMlt: 0,
        esp: true,
        aimbot: false,
        timeScale: 0
	};
	this.hooks = {
		network: null,
		movement: null,
		anticheat: null
	};

	this.setupHooks = function() {
		this.waitForProp("Movement").then(this.hookMovement).catch(e => console.log(e));
		this.waitForProp("NetworkManager").then(this.hookNetwork).catch(e => console.log(e));
		this.waitForProp("VengeGuard").then(this.hookAnticheat).catch(e => console.log(e));
		this.waitForProp("Label").then(this.hookLabel).catch(e => console.log(e));
	};

	this.setupBinds = function() {
		window.addEventListener("keydown", (e) => {
            switch(e.keyCode) {
                case 190: // PERIOD
                    this.settings.autoKill = !this.settings.autoKill;
                    this.hooks.network.app.fire("Chat:Message", "Hacks", "Kill on Respawn - " + (this.settings.autoKill?"Enabled":"Disabled"), !0)
                    break;
                case 188: // COMMA
                    this.settings.infAmmo = !this.settings.infAmmo;
                    this.hooks.network.app.fire("Chat:Message", "Hacks", "Infinite Ammo - " + (this.settings.infAmmo?"Enabled":"Disabled"), !0)
                    break;
                case 186: // SEMI COL
                    this.settings.aimbot = !this.settings.aimbot;
                    this.hooks.network.app.fire("Chat:Message", "Hacks", "Aimbot - " + (this.settings.aimbot?"Enabled":"Disabled"), !0)
                    break;
                case 222: // QUOTE
                    this.settings.infJump = !this.settings.infJump;
                    this.hooks.network.app.fire("Chat:Message", "Hacks", "Infinite Jump - " + (this.settings.infJump?"Enabled":"Disabled"), !0)
                    break;
                case 191: // SLASH
                    this.settings.speedMlt++;
