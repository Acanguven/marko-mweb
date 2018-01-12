const template = require('./template.marko');

const handler = (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.marko(template, {
    title: 'test',
    userResolver: (cb) => {
      setTimeout(() => {
        console.log('resolved');
        cb(null, {
          name: 'Cihad'
        });
      }, 1500);
    }
  })
};

module.exports = {
  handler,
  method: 'get',
  path: '/'
};