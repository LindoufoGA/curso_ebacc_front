module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "dist/css/main.css": "src/css/main.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          "dist/script/main.min.js": "src/script/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("default", ["less", "uglify"]);
};
