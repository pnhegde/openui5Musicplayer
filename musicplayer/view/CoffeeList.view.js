sap.ui.jsview("view.CoffeeList", {

    getControllerName: function() {
        return "view.CoffeeList";
    },

    createContent: function(oController) {
        var oListTemplate = new sap.m.ObjectListItem({
            title: "{name}",
            icon: "{cover}",
            intro: "{description}",
            number: "{fans}",
            numberUnit: "Fans",
            type: 'Active',
            tooltip: "Click here to play ! ",
            activeIcon: "img/MusicPlayer.png",
            attributes: [new sap.m.ObjectAttribute({text : "{artist}"})],
            press: [oController.playMusic, oController]
        });
        var oLayout = new sap.ui.commons.layout.AbsoluteLayout({width:"540px",height:"50px"});
        oLayout.addContent(oListTemplate)

        var oList = new sap.m.List({});
        oList.bindAggregation("items", "/Songs", oListTemplate);


        return new sap.m.Page({
            title: "Playlist",
            content: [oList],
            headerContent: [new sap.m.Button ("loginButton",{
                    text: "Login",press: oController.showLoginBox
                })],
            footer: new sap.m.Bar({})
        });
    }

});