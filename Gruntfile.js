module.exports = function(grunt) {
  var jitGrunt = require('jit-grunt');
  var autoprefixer = require('autoprefixer-core');

  jitGrunt(grunt);

  grunt.initConfig({
    copy: {
      html: {
        files: [
          {expand: true, cwd: 'src/', src: '*.html', dest: 'build/'}
        ]
      },
      js: {
        files: [
          {expand: true, cwd: 'src/', src: 'js/*.js', dest: 'build/'}
        ]
      },
      images: {
        files: [
          {expand: true, cwd: 'src/', src: 'images/*.svg', dest: 'build/'}
        ]
      }
    },
    postcss: {
      options: {
          processors: [
            autoprefixer({ browsers: ['last 2 versions'] })
          ]
      },
      dist: { src: 'src/css/main.css', dest: 'build/css/main.css' }
    },
    image_resize: {
      project: {
        options: {
          width: 250
        },
        files: [
          {expand: true, cwd: 'src/', src: 'images/{appify,sunflower,bokeh}_crop.jpg', dest: 'build/'}
        ]
      }
    },
    responsive_images: {
      options: {
        engine: 'im'
      },
      hero: {
        files: [
          {expand: true, cwd: 'src/', src: 'images/golden_gate.jpg', dest: 'build/'}
        ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'src/css/*.css',
        tasks: ['postcss']

      },
      html: {
        files: 'src/**/*.{html,js,svg}',
        tasks: ['copy']
      },
      jpeg: {
        files: 'src/**/*.jpg',
        tasks: ['image_resize', 'responsive_images']
      }
    },
    clean: {
      build: ['build/']
    }
  });

  grunt.registerTask(
    'default',
    ['copy', 'postcss', 'image_resize', 'responsive_images', 'watch']
  );
};
