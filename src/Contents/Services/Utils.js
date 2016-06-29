Utils = {
	getVille: function(o,cb) {
		var db=Utils.using('db');
		db.model('bpclight','select Id, Code,concat(Ville, " (",Code,")") Ville from postal where Code like "'+o.Code+'%"',cb);
	}
};

module.exports=Utils;