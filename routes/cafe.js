/*
 * GET home page.
 */
exports.index = function(req, res){
    console.log(req.body.code);
    if (req.body.code == ""){
      res.render('cafe', { });
    }
    else {
    var python = require('child_process').spawn(
    'python',
    // second argument is array of parameters, e.g.:                       
     ["public/scripts/execute.py", req.body.code]
     );

 var output = "";
 python.stdout.on('data', function(data){ output += data });
 python.on('close', function(code){
     if (code !== 0) {  return res.send(500, code); }

 // Splits the output into compiler errors, stdout, and stderr          
 output = output.split('~');

 res.render('cafe', { title: "Run", code: output[0], compileInfo: output[1], stdout: output[2], stderr: output[3] });
  });
    }
};

exports.post = function(req, res){
  var python = require('child_process').spawn(
    'python',
    // second argument is array of parameters, e.g.:                       
     ["public/scripts/execute.py", req.body.code]
     );

 var output = "";
 python.stdout.on('data', function(data){ output += data });
 python.on('close', function(code){
     if (code !== 0) {  return res.send(500, code); }

 // Splits the output into compiler errors, stdout, and stderr          
 output = output.split('~');

 res.render('cafe', { title: "Run", code: output[0], compileInfo: output[1], stdout: output[2], stderr: output[3] });
  });

};