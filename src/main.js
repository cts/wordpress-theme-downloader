/*
 * Scrapes Wordpress Theme .zip files from the directory.
 */

fs = require('fs');
path = require('path');
optimist = require('optimist');

printLine = function(line) {
  process.stdout.write(line + "\n");
};

printError = function(line) {
  process.stderr.write(line + "\n");
};

BANNER = "Usage: scrape-themes zip|meta <IntoDirectory>";

exports.run = function() {
  var argv = optimist.usage(BANNER).argv;
  if (argv._.length < 2) {
    optimist.showHelp();
    return false;
  }
  
  var scrapeWhat = argv._[0];
  var workspaceDirectory = argv._[1];

  if ((scrapeWhat == 'zip') || (scrapeWhat == 'meta')) {
    // Create the Workspace directory if it doesn't exist
    if (! fs.existsSync(workspaceDirectory)) {
      fs.mkdirSync(workspaceDirectory);
    }
    var scraper = new Jailbreak.Scraper.WordpressOrgScraper(scrapeWhat, workspaceDirectory);
    scraper.scrape();
  } else {
    optimist.showHelp();
  }
};

