App.view.define('agent.VRendezVous', {
	alias: "widget.TRendezVous",
	extend: "Ext.Panel",
	initComponent: function()
	{
		this.title="Visites médicales";
		this.layout="vbox";
        this.height="100%";
		this.border=false;
		this.items = [
        {
            html: "<div class=redtext>L’identification d’un poste à risque doit être validée par le conseiller prévention <br>et le médecin de prévention</div>",
            padding: 10,
            border: false
        },
        {
            xtype: "checkboxfield",
            width: "100%",
            padding: 10,
            boxLabel: 'Agent occupant un poste à risque'
        },
        {
            xtype: "checkboxfield",
            width: "100%",
            padding: 10,
            boxLabel: 'Dossier demandé'
        },
        {
            xtype: "checkboxfield",
            width: "100%",
            padding: 10,
            boxLabel: 'Dossier reçu'
        },
        {
            xtype: "grid",
            width: "100%",
            height: 420,
            tbar: [
            {
                text: "Ajouter",
                itemId: "add_rdv"
            }
            ],
            plugins: [Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToMoveEditor: 1,
                autoCancel: false
            })],
            columns:[
                {
                    header: "Nature visite",
					dataIndex: "nature",
                    editor: {
                        xtype: 'combo',
                        allowBlank: false,
                        store: App.store.create('bpclight://vm_natures'),
                        displayField: "nature",
                        valueField: "kvm_natures",
                        wdith: "100%"
                    },
                    flex: 1
                },
                {
                    header: "Date visite",
					dataIndex: "dateVisite",
                    width: 100
                },
                {
                    header: "Heure visite",
					dataIndex: "heureVisite",
                    width: 100
                },
                {
                    header: "Résultat",
					dataIndex: "resultat",
                    editor: {
                        xtype: 'combo',
                        allowBlank: false,
                        store: App.store.create('bpclight://vm_resultats'),
                        displayField: "resultat",
                        valueField: "kvm_resultats",
                        wdith: "100%"
                    },
                    renderer: function(val, meta, record, rindex, cindex, store) {
                        console.log(val);
                        console.log(meta);
                        console.log(record);
                        console.log(rindex);
                        console.log(store);
                        /*var indx = comboStore.find('value', val);
                        return idx !== -1 ? comboStore.getAt(idx).get('label');*/
                    },
                    flex: 1
                }
            ],
            store: App.store.create({fields:["nature","dateVisite","resultat","dateFin"],data:[{nature:"yes",dateVisite: "fjsldkfjls"}]})
        }
		];
		this.callParent();
	}
});