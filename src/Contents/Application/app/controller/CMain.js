App.controller.define('CMain', {

	views: [
		"VMain"
	],
	
	models: [
	],
	
	init: function()
	{

		this.control({
			"menu>menuitem": {
				click: "Menu_onClick"
			}
		});
		
		App.init('VMain',this.onLoad);
		
	},
	Menu_onClick: function(p)
	{
		if (p.itemId) {
			Ext.Msg.alert('Status', 'Click event on '+p.itemId);
		};			
	},
	onLoad: function()
	{

		App.loadAPI("http://maps.google.com/maps/api/js?sensor=false&callback=GMap");
		// update
		/*App.Update.actif(-1,function(err,response) {
		});
		App.Update.position(-1,function(err,response) {
		});*/
		Auth.login(function(x) {
			console.log(x);
			if (x.profiles.indexOf('SRH')>-1) Ext.getCmp('MNU_VM').show();
		});

	}
	
	
});
