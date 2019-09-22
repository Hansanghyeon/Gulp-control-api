const
  express = require('express'),
  app = express(),
  shell = require('shelljs'),
  path = require('path');

app.get('/control', (request, response) => {
  let project = request.params.project;
  let type = request.params.type;
  let proejctDir = path.join(__dirname,'..', project , 'Gulp');

  switch(type) {
    case 'start' :
      // // Session start
      shell.exec(`screen -dmSL ${proejct} gulp --cwd ${proejctDir}`);
      break;
    case 'stop' :
      // Session drop
      shell.exec(`screen -X -S ${project} quit`);
      break;
    default :
      break;
  }
});

app.listen(3000);