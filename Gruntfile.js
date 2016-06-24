module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Listing Tasks
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Copies templates and assets from dependencies and/or src
    copy: {

      fsaStyleSass: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/stylesheets',
        dest: '_sass'
      },

      fsaStyleImg: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/img',
        dest: 'img'
      },

      fsaStyleFonts: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/fonts',
        dest: 'fonts'
      },

    },

    // Watches files for changes and run relevant tasks
    watch: {
      css: {
        files: [
          '_site/css/*.css',
          '_site/css/**/*.css',
        ],
        tasks: ['postcss'],
        options: { nospawn: true }
      },
    },

    // Make our HTML files perfectly formatted and humanly scannable
    prettify: {
      options: {
        config: '.prettifyrc'
      },
      all: {
        expand: true,
        cwd: 'src/',
        ext: '.html',
        src: ['*.html'],
        dest: '_site/'
      },
    },

    // PostCSS, primarily to autoprefix
    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: '_site/css' // ...to the specified directory
        },
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('postcss-quantity-queries')(), // do things like .asdf:at-least(4) {} ; https://github.com/pascalduez/postcss-quantity-queries
          require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
          // require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: '_site/css//*.css'
      }
    },

  });

  // Register Tasks
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('build', [
    'copy',
  ]);

  grunt.registerTask('lint', 'scsslint');
  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
