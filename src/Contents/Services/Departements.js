
Departements = {
	getAll: function(o,cb) {
		var db=Departements.using('db');
		if (o.kets) 
			db.model('bpclight','select * from unites where archive=0 and kets='+o.kets,cb);
		else
			db.model('bpclight','select * from unites where archive=0',cb);
	}
}

module.exports = Departements;
