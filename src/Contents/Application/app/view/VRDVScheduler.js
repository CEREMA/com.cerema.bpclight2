App.view.define('VRDVScheduler', {
    extend: "Ext.window.Window",
    alias: 'widget.VRDVScheduler',
    initComponent: function() {
        this.width = 1024;
        this.height = 660;
        
        this.title="Agenda Médecin de prévention";
        
        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
            '->',
            {
                text: "Enregistrer",
                itemId: "record"
            }
        ];

        this.tbar = [
        {
                xtype: "combo",
                itemId: "selectMonth",
				width: 100,
				editable:false,
                store: App.store.create({
                    fields: [
                        "id",
                        "month"
                    ],
                    data: [{
                        id: 0,
                        month: "Janvier"
                    }, {
                        id: 1,
                        month: "Février"
                    }, {
                        id: 2,
                        month: "Mars"
                    }, {
                        id: 3,
                        month: "Avril"
                    }, {
                        id: 4,
                        month: "Mai"
                    }, {
                        id: 5,
                        month: "Juin"
                    }, {
                        id: 6,
                        month: "Juillet"
                    }, {
                        id: 7,
                        month: "Aout"
                    }, {
                        id: 8,
                        month: "Septembre"
                    }, {
                        id: 9,
                        month: "Octobre"
                    }, {
                        id: 10,
                        month: "Novembre"
                    }, {
                        id: 11,
                        month: "Décembre"
                    }]
                }),
                displayField: "month",
                valueField: "id"
            }, {			
                 xtype: "combo",
                 itemId: "selectAnnee",
				 width: 70,
				 editable: false,
                 displayField: "year",
                 valueField: "year",
				 store: App.store.create({
                    fields: [
                        "year"
                    ],
                    data: []
                })
            },
            '->',
            {
                text: '<',
                itemId: "previous"
            },
            {
                text: '>',
                itemId: "next"
            }
        ];
		
        this.defaults = {
            split: true
        };

        this.items = [
			{
				xtype: "schedulergrid",
				flex: 1,
				width: "100%",
			    startDate     : new Date(),
				endDate       : new Date(),
				startTime     : 8,
				endTime       : 18,
				columns     : [
					
				],
			    enableEventDragDrop: true,
                allowOverlap: true,                
                resourceStore : App.store.create({data:[{Id:'D',Name:'Docteur'}]},'resources'),
                
				eventStore    : App.store.create({data:[]},'events'),
                
				style         : 'border: 1px solid #d0d0d0;',

				showTodayLine : true,
				viewPreset   : 'week',
				mode                 : 'calendar',
				eventResizeHandles   : 'end',
				snapToIncrement      : true,
				highlightCurrentTime : true
                
			}
		];

        this.callParent();
    }
});