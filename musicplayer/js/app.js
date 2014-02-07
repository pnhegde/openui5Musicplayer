sap.ui.localResources("view");
sap.ui.localResources("model");
sap.ui.localResources("app");

jQuery.sap.require("app.Component");

//create app Component and place at dom element with id = root
 var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader",{logoff: function(){
 	this.setUserName("");
 	this.setDisplayLogoff(false);

 }}); 

                oAppHeader.setLogoSrc("img/Music_player_logo.png");
                oAppHeader.setLogoText("Phaneendra Hegde: Demo App OpenUI5");

                //configure the welcome area
                oAppHeader.setDisplayWelcome(true);
                oAppHeader.setUserName("Phaneendra");

                //configure the log off area
                oAppHeader.setDisplayLogoff(true);
                oAppHeader.placeAt('root');
new sap.ui.core.ComponentContainer({
    name: "app"
}).placeAt('root');