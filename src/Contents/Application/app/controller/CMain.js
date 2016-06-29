App.controller.define('CMain', {

	views: [
		"VMain",
		"VPrincipal"
	],
	
	models: [
	],
	
	init: function()
	{

		this.control({
			"menu>menuitem": {
				click: "Menu_onClick"
			},
			"mainform treepanel#TreePanel": {
				itemclick: "tree_onclick"
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
	tree_onclick: function(p, record, item, index)
	{
		var id=record.data.id;
		var grid=App.get('mainform grid#GridAgents');
		if (id.indexOf('Ksub')>-1) grid.getStore().getProxy().extraParams={
			ksub: id.split('Ksub')[1]
		}; else
		if (id.indexOf('Kuni')>-1) grid.getStore().getProxy().extraParams={
			kuni: id.split('Kuni')[1]
		}; else
		if (id.indexOf('Kets')>-1) grid.getStore().getProxy().extraParams={
			kets: id.split('Kets')[1]
		};
		grid.getStore().load();	
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
