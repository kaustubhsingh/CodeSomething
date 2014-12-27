var casper = require('casper').create({ verbose: true, logLevel: "debug", waitTimeout: 6000});



// casper.thenOpen('http://phantomjs.org', function() {
//     this.echo('URL is ' + this.getCurrentUrl());
//     this.echo(this.getTitle());
// });



casper.start('', function() {
  this.echo('URL is ' + this.getCurrentUrl());
  this.echo(this.getTitle());


});



casper.run();
