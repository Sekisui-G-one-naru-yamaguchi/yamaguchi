/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jp/co/sekisui/yfizp003/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
