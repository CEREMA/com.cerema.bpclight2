Temptation = {
	search: function(str,cb)
	{
		var db=Temptation.using('db');
		db.query('temptation',"SELECT MATRI matri, NOMPRE nompre, datouv FROM HopeMpl Hm where YEAR(datouv)>=YEAR(GetDate()) and datclo='1900-01-01' order by datouv desc",cb);
	}
};

module.exports = Temptation;