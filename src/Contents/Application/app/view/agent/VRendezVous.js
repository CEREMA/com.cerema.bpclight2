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
            boxLabel: 'Agent occupant un poste à risque'
        },
        {
            xtype: "checkboxfield",
            width: "100%",
            boxLabel: 'Dossier demandé'
        },
        {
            xtype: "checkboxfield",
            width: "100%",
            boxLabel: 'Dossier reçu'
        }
		];
		this.callParent();
	}
});