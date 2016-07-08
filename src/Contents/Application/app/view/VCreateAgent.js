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
				xtype: "combo",
				width: "100%",
				flex: 1
			}
		];
		
		this.callParent();
		
	}
	
});