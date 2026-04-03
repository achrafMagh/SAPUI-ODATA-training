sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("ZG_DISPLAY_SALES.controller.View1", {
		onInit() {
			const oData = {
				student : {
					name : "Achraf",
					phone : "22 222 222"
				}
			};
			
			
			const oModel1 = new JSONModel(oData);
			this.getView().setModel(oModel1 , "studentModel");
		},
		onPress: function (evt) {
			var msg = 'Hello button';
			MessageToast.show(msg); 
		}

	});
});
