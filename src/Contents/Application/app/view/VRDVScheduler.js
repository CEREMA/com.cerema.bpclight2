App.view.define('VRDVScheduler', {
    extend: "Ext.window.Window",
    alias: 'widget.VRDVScheduler',
    initComponent: function() {
        this.width = 1024;
        this.height = 660;

        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
        ];

            tbar: [
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
				
                resourceStore : App.resourcestore.create({
					data:[        
							{ Id : 'r0', Name : 'Unassigned', Color : '#000' }
						 ]
				}),
                
				eventStore    : App.eventstore.create({
					fields:[],
					data:[]
				}),
                
				style         : 'border: 1px solid #d0d0d0;',

				showTodayLine : true,
    			calendarColumnClass : 'App.column.Day',
				calendarViewPreset   : 'week',
				mode                 : 'calendar',
				eventResizeHandles   : 'end',
				eventBodyTemplate    : '{Name}',
				snapToIncrement      : true,
				highlightCurrentTime : true,
				calendarTimeAxisCfg  : {
        			height : 30
    			}
                
			}
		];

        this.callParent();
    }
});