App.view.define('agent.VFormation', {
    alias: "widget.TFormation",
    extend: "Ext.Panel",
    initComponent: function() {
        this.title = "Formation";
        this.layout = "vbox";
        this.border = false;
        this.bodyStyle="background-color:red";
        this.height="100%";
        this.items = [
            {
                layout: "hbox",
                border: false,
                width: "100%",
				xtype: "panel",
				itemId: "UpFormation",			
                items: [

                    {
                        xtype: "combo",
						editable: false,
                        itemId: "cbo1",
                        margin: {
                            top: 10,
                            left: 10,
							right: 10
                        },
                        fieldLabel: "Type formation prévention sécurité",
                        labelAlign: "top",
                        labelWidth: 200,
                        flex: 1,
                        displayField: "Libelle",
                        valueField: "id_formation",

                        store: App.store.create('App.Formation.getAll',{
							autoLoad: true
						})

                    }
                ]
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: 'Session',
                margin: {
                    top: 10,
                    left: 10

                },
                defaultType: 'radiofield',
                items: [{
                    boxLabel: 'Initial',
                    name: 'topping',
                    inputValue: '1',
                    itemId: 'radiofield1'
                }, {
                    boxLabel: 'Recyclage',
                    name: 'topping',
                    inputValue: '2',
                    checked: true,
                    itemId: 'radiofield2'
                }]
            }, {
                    xtype: "datefield",
                    itemId: "date",
                    labelAlign: "left",
                    margin: {
                        top: 10,
                        left: 10
                    },
                    width: 200,
                    fieldLabel: 'Date'
            }, 
            {
                layout: "hbox",
                border: false,
                width: "100%",
                items: [{
					xtype: "textarea",
					width: 21,
					height: 21,
					hidden: true,
					itemId: "Formation_document"
				},
				{
					flex: 1,
					border: false
				},
				{
                    xtype: "panel",
                    itemId: "organisme",
					width: 50,
					height: 50,
					baseCls: "Upload",
                    margin: {
                        top: 10,
                        left: 10,
						right: 10
                    },
					padding: 10,
					plugins:[{
						ptype: "filedrop",
						readType: "DataURL"
					}]
                } ]
            }, {
                layout: "hbox",
                border: false,
                width: "100%",
				padding: 10,
                items: [{
					flex: 1,
					border: false
				},{
                    xtype: "button",
                    itemId: "ajouter",
                    text: "Ajouter"
                }
                ]
            }, {

                html: "kfsdfjklsdfj",
                flex: 1
                    }


        ];
        this.callParent();
    }
});