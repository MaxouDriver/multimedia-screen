const bodyParser = require('body-parser');
const si = require('systeminformation');
var cron = require('node-cron')
var app = require('express')();
const cors = require('cors')

app.use(cors())


var http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server);

const port = 1234;

var serverInfos = {
  cpu_speed: -1,
  cpu_temp: -1,
  mem_usage_per: -1,
  disk_usage: -1,
  network: -1
};

cron.schedule('*/2 * * * * *', function(){
  serverInfo(function onSuccess(data){
    io.emit('monitoring-content', { serverInfos: data, for: 'everyone' });
  },function onFailure(err){
    console.log(err);
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

function roundToTwoDecimal(num){
  return Math.round(num * 100) / 100;
}

function serverInfo(successCallBack, failureCallBack){
  var onDataRetreived = function(){
    var finished = true;
    for (var key in serverInfos) {
      if (serverInfos.hasOwnProperty(key) && serverInfos[key] == -1) {
        finished = false;
        break;
      }
    }
    if (finished) {
      successCallBack(serverInfos);
    }
  };
  si.currentLoad().then(data => {
    serverInfos.cpu_speed = roundToTwoDecimal(data.currentload);
    onDataRetreived();
  }).catch(error => failureCallBack(error));

  si.cpuTemperature().then(data => {
    serverInfos.cpu_temp = roundToTwoDecimal(data.main);
    onDataRetreived();
  }).catch(error => failureCallBack(error));

  si.mem().then(data => {
    serverInfos.mem_usage_per = roundToTwoDecimal(data.used * 100 / data.total);
    onDataRetreived();
  }).catch(error => failureCallBack(error));

  
  si.disksIO().then(data => {
    serverInfos.disk_usage = roundToTwoDecimal(data.tIO_sec);
    onDataRetreived();
  }).catch(error => failureCallBack(error));

  si.networkConnections().then(data => {
    serverInfos.network = data;
    onDataRetreived();
  }).catch(error => failureCallBack(error));

}

app.get('/', function (req, res) {
  res.send('Nothing here');
});

app.post('/fullscreen', function (req, res) {
  io.emit('fullscreen ' + req.body.type, {for: 'everyone' });
  res.send({code: 200, message: 'Done'});
});

app.post('/closefullscreen', function (req, res) {
  io.emit('closefullscreen', {for: 'everyone' });
  res.send({code: 200, message: 'Done'});
});

server.listen(port);