#! /usr/bin/env node

console.log('NToolbelt');
var cm = process.argv[2]
var param = process.argv[3]
if(!cm) {
  console.log('usage: nt push - git push latest changes to origin repo');
}

if(cm=="push") {
  var exec = require('child_process').exec;
  param = param || "-"
  var child = exec('echo "git commit";git add .;git commit -am "'+param+'";git push origin master', function(err, stdout, stderr) {
    console.log(stdout);
  });  
}