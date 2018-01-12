const template = require('./template.marko');

const handler = (req, res) => {
  template.render({
    title: 'test'
  });
};

module.exports = {
  handler,
  method: 'get',
  path: '/'
};