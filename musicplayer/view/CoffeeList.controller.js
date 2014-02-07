sap.ui.controller("view.CoffeeList", {
    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("model/songs.json"));
    },
	playMusic: function() {
		var player = new sap.ui.ux3.OverlayContainer({openButtonVisible:false});

		   var htmlplayer = new sap.ui.core.HTML({
                content: '<iframe src="http://localhost/musicplayerhtml/index.html" scrolling="no" seamless="seamless" width="326px" height="162px"  > </iframe>'/*'<div class="player">'+
    '<div class="pl"></div>'+
    '<div class="title"></div>'+
    '<div class="artist"></div>'+
    '<div class="cover"></div>'+
    '<div class="controls">'+
        '<div class="play"></div>'+
        '<div class="pause"></div>'+
        '<div class="rew"></div>'+
        '<div class="fwd"></div>'+
    '</div>'+
    '<div class="volume"></div>'+
    '<div class="tracker"></div>'+
'</div>'+
'<ul class="playlist hidden">'+
    '<li audiourl="data/01.mp3" cover="data/cover1.jpg" artist="Artist 1">01.mp3</li>'+
    '<li audiourl="data/02.mp3" cover="data/cover2.jpg" artist="Artist 2">02.mp3</li>'+
    '<li audiourl="data/03.mp3" cover="data/cover3.jpg" artist="Artist 3">03.mp3</li>'+
    '<li audiourl="data/04.mp3" cover="data/cover4.jpg" artist="Artist 4">04.mp3</li>'+
    '<li audiourl="data/05.mp3" cover="data/cover5.jpg" artist="Artist 5">05.mp3</li>'+
    '<li audiourl="data/06.mp3" cover="data/cover6.jpg" artist="Artist 6">06.mp3</li>'+
    '<li audiourl="data/07.mp3" cover="data/cover7.jpg" artist="Artist 7">07.mp3</li>'+
'</ul>'*/
        });

		player.addStyleClass('playerpopup');

		player.addContent(htmlplayer);
		if(!player.isOpen()){
			player.open();
		}
	},
	showLoginBox: function() {
		var oOverlayContainer = new sap.ui.ux3.OverlayContainer({openButtonVisible:false, close:function(evt){ $('.loginpopup').remove();}});
		oOverlayContainer.addStyleClass('loginpopup');
		var oLayout = new sap.ui.commons.layout.AbsoluteLayout({width:"340px",height:"150px"});
		oLayout.addStyleClass("CustomStyle"); //Add some additional styling for the border
		var oLabel = new sap.ui.commons.Label({text:"User Name"});
		var oNameInput = new sap.ui.commons.TextField({width:"190px"});
		oLabel.setLabelFor(oNameInput);
		oLayout.addContent(oLabel, {right:"248px",top:"20px"});
		oLayout.addContent(oNameInput, {left:"110px",top:"20px"});

		oLabel = new sap.ui.commons.Label({text:"Password"});
		oPWInput = new sap.ui.commons.PasswordField({width:"190px"});
		oLabel.setLabelFor(oPWInput);
		oLayout.addContent(oLabel, {right:"248px",top:"62px"});
		oLayout.addContent(oPWInput, {left:"110px",top:"62px"});

		var oLoginButton = new sap.ui.commons.Button({text:"Login",width:"133px"});
		oLoginButton.attachPress(function(){alert("Login with user name '"+oNameInput.getValue()+"' and password '"+oPWInput.getValue()+"'.")});
		oLayout.addContent(oLoginButton, {left:"110px",top:"104px"});

		oOverlayContainer.addContent(oLayout);		
		if(!oOverlayContainer.isOpen()){
			oOverlayContainer.open();
		}
	}
   
});