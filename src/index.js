import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ 
    apiVersion: '2006-03-01',
    accessKeyId: "boce001",
    secretAccessKey: "boce001",
    region:"US",
    endpoint: "http://eos-ningbo-1.cmecloud.cn",
});
/*
const params = {
    Bucket: "onest-boce"
};
*/

const command = new ListObjectsCommand({Bucket: "onest-boce"});


client.send(command).then(
  (data) => {
    console.log(data)
  },
  (error) => {
    console.log("error")
    console.log(error)
  }
);

