App.view.define('VCreateAgent', {

    extend: 'Ext.window.Window',
    alias: 'widget.createAgent',
    initComponent: function	() {
		
		this.width = 430;
        this.height = 610;
        this.title = "Nouvel agent";

        this.layout = "hbox";
		
		this.bodyStyle="background-color: white";

        this.bbar = [
            '->', {
                text: 'Enregistrer',
				itemId: "Record"
            }, {
                text: 'Quitter',
				itemId: "Exit"
            }
        ];		
        
		this.defaults = {
            split: true
        };	
		
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