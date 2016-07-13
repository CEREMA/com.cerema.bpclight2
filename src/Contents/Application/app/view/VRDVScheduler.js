App.view.define('VRDVScheduler', {
    extend: "Ext.window.Window",
    alias: 'widget.TRDVScheduler',
    initComponent: function() {
        this.width = 1024;
        this.height = 660;

        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
        ];

        this.tbar = [
        ];
		
        this.defaults = {
            split: true
        };

        this.items = [
			{
				xtype: "schedulergrid",
				flex: 1,
				width: "100%",
			    startDate     : new Date(2016, 5, 1),
				endDate       : new Date(2016, 5, 7),
				startTime     : 6,
				endTime       : 19,
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