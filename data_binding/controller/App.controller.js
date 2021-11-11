sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/library"
    ], function (Controller, mobileLibrary) {
    "use strict";

    return Controller.extend("sap.ui.demo.data_binding.controller.App", {
        formatMail: function (sFirstName, sLastName) {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            return mobileLibrary.URLHelper.normalizeEmail(
                sFirstName + "." + sLastName + "@redrocket.gov",
                oBundle.getText("mailSubject", [sFirstName]),
                oBundle.getText("mailBody"));
        }
    });
});
