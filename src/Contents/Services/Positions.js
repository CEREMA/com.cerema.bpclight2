Positions={
	getAll: function(o,cb)
	{
		var db=Positions.using('db');
		db.model('bpclight','select * from position',cb);
	}
};

module.exports = Positions;