import dotenvFlow from 'dotenv-flow';
import fs from 'fs';
import http from 'http';
import https from 'https';
import path from 'path';
import url from 'url';
import qs from 'querystring';
import FormData from 'form-data';
import { jsonc } from 'jsonc';

dotenvFlow.config();

// forked from https://github.com/neocities/neocities-node 🙇‍♀️
function NeoCities(key, opts) {
  this.key = key
  this.opts = opts || {}
  this.url = url.parse(this.opts.url || 'https://neocities.org')
  this.client = this.url.protocol == 'https:' ? https : http
}

NeoCities.prototype.get = function(method, args, callback) {
  var path = '/api/'+method

  if(args)
    path += '?'+qs.stringify(args)

  var request = this.client.request({
    method: 'get',
    host: this.url.hostname,
    port: this.url.port,
    path: path,
    headers: {Authorization: "Bearer " + this.key}
  }, function(res) {
    var body = ''

    res.on('data', function (chunk) {
      body += chunk
    })

    res.on('end', function() {
      var resObj = JSON.parse(body)
      callback(resObj)
    })
  })
  request.end()
}

NeoCities.prototype.info = function(sitename, callback) {
  var args = null
  if(typeof sitename == 'function')
    callback = sitename
  else if(typeof sitename == 'string')
    args = {sitename: sitename}

  this.get('info', args, callback)
}

NeoCities.prototype.post = function(method, args, callback) {
    var form = new FormData()
    var i
  
    for(i=0;i<args.length;i++)
      form.append(args[i].name, args[i].value)

    const post = {
      method: 'post',
      host: this.url.hostname,
      port: this.url.port,
      path: '/api/'+method,
      headers: form.getHeaders(),
    }

    post.headers.Authorization = "Bearer " + this.key;
  
    var request = this.client.request(post, function(res) {
      var body = ''
  
      res.on('data', function (chunk) {
        body += chunk
      })
  
      res.on('end', function() {
        var resObj = JSON.parse(body)
        callback(resObj)
      })
    })
  
    form.pipe(request)
}

NeoCities.prototype.upload = function(files, callback) {
  var args = []
  var i

  for(i=0;i<files.length;i++)
    args.push({name: files[i].name, value: fs.createReadStream(files[i].path)})

  this.post('upload', args, callback)
}

// let's rock!
if (process.env.NEOCITIES_API) {
  const api = new NeoCities(process.env.NEOCITIES_API);
  const config = jsonc.parse(fs.readFileSync('src/_data/config.jsonc', 'utf8'));
  const subDir = config.siteSubDir;

  const toUpload = [];
  fs.readdir('_site', {recursive: true, withFileTypes: true}, (err, files) => {
      if (err) {
          return console.log('Something went wrong reading the directory: ' + err);
      }
      files.forEach( (file) => {
          if (file.isFile()) {
              const newName = path.normalize(`${file.parentPath.replace("_site", subDir)}/${file.name}`).replace(/\\/g, '/');
              const newPath = path.normalize(`${file.parentPath}/${file.name}`).replace(/\\/g, '/');
              if (newName == '/index.html') {
                toUpload.push({
                    name: newName,
                    path: newPath
                });
              } else {
                toUpload.unshift({
                  name: newName,
                  path: newPath
              });
              }
            }
          });
      const uploadBatches = [];
      while (toUpload.length) {
        uploadBatches.push(toUpload.splice(0,100));
      }

      if (uploadBatches.length > 1) {
        console.log(`You've got a big site (>100 files), uploading in ${uploadBatches.length} batches...`)
      } else {
        console.log("Uploading site...")
      }

      uploadBatches.forEach( (batch) => {
        setTimeout(() => {
          api.upload(batch, (resp) => {
            if (resp.result == 'success') {
              console.log(`Upload complete! Have a 🍓 day.`);
            } else {
              console.log(`Something went wrong uploading: ${Object.values(resp)}`);
            }
          })
        }, 1000);
      });
    });
  


} else if (process.env.NEOCITIES_API == "ABCD1234") {
  throw new Error(`ERROR: Did you set your API key correctly? Check the user guide.`);
} else {
  throw new Error(`ERROR: Something went really wrong. Your API key was not found.`);
}