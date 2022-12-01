/**----------------------------------------------------------------------*
 * SourceName  ：Main.Controller
 * CreateDate  ：Mon. 2022/03/20
 * CreateAuthor：Fujitsu
 *-----------------------------------------------------------------------*
 * Copyright(C) FUJITSU LIMITED.
 * All rights reserved.
 *-----------------------------------------------------------------------*
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
		"use strict";

		return Controller.extend("jp.co.sekisui.yfizp003.controller.Main", {

            /**
             * [固定] onInit：初期イベント
             * @param {Event} oEvent イベントオブジェクト
             * @return なし
             */
            onInit: function (Event) {
                // Model のメタデータがロード後に、メソッドをコールバックする。
                this.getOwnerComponent().getModel().metadataLoaded().then(this._metadataLoaded.bind(this));
            },

            /**
             * [固定] _metadataLoaded：メタデータの読み込みイベント
             * @param {Event} oEvent イベントオブジェクト
             * @return なし
             */
            _metadataLoaded: function (Event) {
                //初期処理の業務ロジックを追加する。
            },

            /**
             * [固定] onBeforeRendering：画面表示前イベント
             * @param {Event} oEvent イベントオブジェクト
             * @return なし
             */
            onBeforeRendering: function (Event) {
                //画面表示前イベントを追加する。
            },

            /**
             * [固定] EventTitle：画面表示後イベント
             * @param {Event} oEvent イベントオブジェクト
             * @return なし
             */
            onAfterRendering: function (oEvent) {
                //画面表示後イベントを追加する。
            },

            /**
             * [固定] EventTitle：画面終了後イベント
             * @param {Event} oEvent イベントオブジェクト
             * @return なし
             */
            onExit: function (oEvent) {
                //ビューにバインドされていないコントロールを削除する。
            }, 

            /**
             *  [固定] DataReceivedイベント
             * @param {Event} oEvent イベントオブジェクト
             * @return なし
             */
            onDataReceived: function (oEvent) {  
                  //データ読み込み後のイベントを追加する。
            },

            /**
             *  [固定] onBeforeRebindTable：テーブルにバインド前処理
             * @param {sap.ui.base.Event} oEvent イベント
             * @return なし
             */
            onBeforeRebindTable: function (oEvent) {
                 //データ加工処理が必要なら、ここに処理を追記する
            },

            //■イベント処理

            //---------------------------------------------------------------------
            //［任意］個別イベント
            //---------------------------------------------------------------------

		});
	});
