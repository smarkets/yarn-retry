var yarn_retry = require('../');
var expect            = require('chai').expect;

function Fail3TimesCommand(command) {
  this.times = 0;
  this.command = command;
}

Fail3TimesCommand.prototype.toString = function() {
  if(this.times < 3) {
    this.times++;
    return this.command;
  }
  return 'echo peace and love';
};

describe('npm-install-retry', function () {

  function testRetries(command) {
    it('should retry after "' + command + '" failed', function (done) {
      yarn_retry(new Fail3TimesCommand(command), '', { wait: 0, attempts: 10 }, function (err, result) {
        if (err) return done(err);
        expect(result.times).to.eql(4);
        done();
      });
    });
  }

  testRetries('echo An unexpected error occurred: "https://registry.yarnpkg.com/@private/ngffwd-node-processes/-/ngffwd-node-processes-1.0.123.tgz: unexpected end of file".');
  testRetries('echo An unexpected error occurred: "https://registry.yarnpkg.com/@private/ngffwd-node-processes/-/ngffwd-node-processes-1.0.123.tgz: Request failed \\"404 Not Found\\"".');
});
