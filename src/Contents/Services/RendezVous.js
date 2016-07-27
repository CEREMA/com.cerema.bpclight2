RendezVous = {
    getAll: function(o,cb) {
        RendezVous.using('db').model('bpclight','select * from medic_rdv',cb);
    }
};

module.exports=RendezVous;