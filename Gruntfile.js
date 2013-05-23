module.exports = function(grunt) {

  grunt.initConfig({
    pkg: "<json:package.json>",
    meta: {
      banner: "/**\n" +
              "* <%= pkg.name %>\n" +
              " * <%= pkg.description %>\n" +
              " *\n" +
              " * @author Ted Benson and Sarah Scodel\n" +
              " * @copyright MIT CSAIL Haystack Group <%= grunt.template.today('yyyy') %>\n" +
              " * @license <%= pkg.licenses[0].type %> <<%= pkg.licenses[0].url %>>\n" +
              " * @link <%= pkg.homepage %>\n" +
              " * @module <%= pkg.name %>\n" +
              " * @version <%= pkg.version %>\n" +
              " */\n"
    },
    concat: {
      scraper: {
        src: [
          "src/fragments/prefix._js",
          "src/scraper.js",
          "src/fragments/postfix._js",
          "src/main.js"
        ],
        dest: "release/wordpress-theme-downloader.js"
      }
    },
    jshint: {
      files: ['grunt.js', 'src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint', 'concat']);
};
