import 'dotenv/config';
import fs from 'fs';
import http from 'http';
import https from 'https';
import path from 'path';
import url from 'url';
import qs from 'querystring';
import FormData from 'form-data';
import { debug } from 'console';

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
const api = new NeoCities(process.env.NEOCITIES);

const config = JSON.parse(fs.readFileSync('src/_data/config.json', 'utf8'));
const subDir = config['neoCitiesSubdirectory'];

const toUpload = [];
fs.readdir('_site', {recursive: true, withFileTypes: true}, (err, files) => {
    if (err) {
        return console.log('Something went wrong reading the directory: ' + err);
    }
    files.forEach( (file) => {
        if (file.isFile()) {
            const newPath = file.parentPath.replace("_site", subDir);
            toUpload.push({
                name: `${newPath}/${file.name}`,
                path: `${file.parentPath}/${file.name}`
            });
        }
    });
});

api.upload(toUpload, (resp) => {
    if (resp.result == 'success') {
      console.log(`Your site was uploaded! Have a 🍓 day.`);
    } else {
      console.log(`Something went wrong uploading: ${resp}`);
    }
})