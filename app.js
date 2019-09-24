const
  express = require('express'),
  app = express(),
  shell = require('shelljs'),
  path = require('path'),
  signVerification = require('./containers/signVerification');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/control/:project/:type', (request, response) => {
  try{
    const nodeApi = (request, response) => {
      let project = request.params.project;
      let type = request.params.type;
      let projectDir = path.join(__dirname,'..', project , 'Gulp');

      switch(type) {
        case 'start' :
          // // Session start
          shell.exec(`screen -dmSL ${project} gulp --cwd ${projectDir}`);
          response.status(201).json({'text': `Start \`${project}\``});
          response.end();
          break;
        case 'stop' :
          // Session drop
          shell.exec(`screen -X -S ${project} quit`);
          response.status(201).json({'text': `Stop \`${project}\``});
          response.end();
          break;
        default :
          break;
      }
    };

    signVerification(response, request, nodeApi);
  } catch ( err ) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end();
  }
});

app.listen(8080, '127.0.0.1');