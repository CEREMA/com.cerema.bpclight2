App.view.define('VCreateAgent', {

    extend: 'Ext.window.Window',

initComponent: function()
	{
		this.title="Situation";
		this.layout="vbox";
		this.border=false;
		this.width = 430;
        this.height = 610;
        this.title = "Nouvel agent";
		this.bodyStyle="background-color: white";
		this.items = [
			{
				html: '<div style="font-weight: bold;padding:5px">1. Typologie du nouvel agent</div>',
				border: false,
				height: 40,
				width: "100%",
				padding: 5
			},
		];
		this.callParent();
	}	
	
});