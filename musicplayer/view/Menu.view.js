sap.ui.jsview("view.Menu", {

    getControllerName: function() {
        return "view.Menu";
    },

    createContent: function(oController) {

        var oListTemplate = new sap.m.StandardListItem({
            title: "{title}",
            icon: "{icon}",
            description: "{description}",
            type: sap.m.ListType.Navigation,
            customData: new sap.ui.core.CustomData({
                key: "targetPage",
                value: "{targetPage}"
            })
        });

        var oList = new sap.m.List({
            selectionChange: oController.doNavOnSelect,
            mode: sap.m.ListMode.SingleSelectMaster
        });
        oList.bindAggregation("items", "/Menu", oListTemplate);


        return new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentLeft: [new sap.m.Image("mp3Logo", {
                    src: "img/MusicPlayer.png",
                    width: "40px",
                    height: "40px"
                })],
                contentMiddle: [ new sap.m.Text({
                    text: "{i18n>WELCOME_TITLE}"
                })]
            }),
            content: [oList],
            footer: new sap.m.Bar({
                contentMiddle: [new sap.m.Link("myproLink", {
                    text: "© Phaneendra Hegde - 2014",
                    href: "http://pnhegde.in/"
                })]
            })
        });
    }

});