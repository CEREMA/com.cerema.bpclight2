App.view.define('agent.VRendezVous', {
	alias: "widget.TRendezVous",
	extend: "Ext.Panel",
	initComponent: function()
	{
		this.title="Visites médicales";
		this.layout="vbox";
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
            flex: 1,
            tbar: [
            {
                text: "Ajouter",
                itemId: "add_rdv"
            }
            ],
            columns:[
                {
                    header: "Nature visite",
					dataIndex: "nature",
                    width: 100
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
                    flex: 1
                }
            ],
            store: App.store.create({fields:[],data:[]})
        }
		];
		this.callParent();
	}
});