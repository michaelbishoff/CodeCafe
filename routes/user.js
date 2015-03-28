
/*
 * GET users listing.
 */

exports.list = function(req, res){
    res.send({"users":
	      {"Michael", "Celeste", "Kenny", "Edwin", "Izzy"}
	});
};