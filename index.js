 AWS = require('aws-sdk');
const fs = require('fs');
cconstonst path = require('path');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "AKIARSVFORJPIA3TFH4N",
    secretAccessKey: "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"
  });

var s3 = new AWS.S3();
var filePath = "./data/file.txt";

//configuring parameters
var params = {
  Bucket: 'labvanguardi6',
  Body : fs.createReadStream(filePath),
  Key : "folder/"+Date.now()+"_"+path.basename(filePath)
};

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});