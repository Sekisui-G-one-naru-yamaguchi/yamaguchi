/**----------------------------------------------------------------------*
 * SourceName  ：BaseController
 * CreateDate  ：Mon. 2022/03/20
 * CreateAuthor：Fujitsu
 *-----------------------------------------------------------------------*
 * Copyright(C) FUJITSU LIMITED.
 * All rights reserved.
 *-----------------------------------------------------------------------*
 */
sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
	], function (Controller, History) {
	"use strict";

	return Controller.extend("jp.co.sekisui.yfizp003.controller.Main", {
		/**
		 * routerアクセス
		 * @public
		 * @returns {sap.ui.core.routing.Router} router
		 */
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		/**
		 * view model取得
		 * @public
		 * @param {string} [sName] モデル名
		 * @returns {sap.ui.model.Model} モデル
		 */
		getModel : function (sName) {
			return this.getView().getModel(sName);
		},

		/**
		 * view model設定
		 * @public
		 * @param {sap.ui.model.Model} [oModel] モデル
		 * @param {string} [sName] モデル名
		 * @returns {sap.ui.mvc.View} ビュー
		 */
		setModel : function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
		 * リソース取得
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} リソースモデル
		 */
		getResourceBundle : function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		/**
		 * エントリ－が含まれている場合（ブラウザバック）
		 * エントリーが含まれていない場合（ルートに遷移）
		 *
		 * @public
		 * @param {string} [sRoute] ルート名
		 * @param {object} [mData] ルートパラメータ※必要なければ不要
		 */
		myNavBack : function(sRoute, mData) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				// 履歴に以前のエントリーが含まれている場合
				window.history.go(-1);
			} else {
				// 上記以外の場合
				var bReplace = true;
				this.getRouter().navTo(sRoute, mData, bReplace);
			}
		}
	});
});