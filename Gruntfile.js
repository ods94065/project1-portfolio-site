module.exports = function(grunt) {
  var jitGrunt = require('jit-grunt');
  var autoprefixer = require('autoprefixer-core');

  jitGrunt(grunt);

  grunt.initConfig({
    copy: {
      html: {
        files: [
          {expand: true, cwd: 'src/', src: '*.html', dest: 'dest/'}
        ]
      },
      js: {
        files: [
          {expand: true, cwd: 'src/', src: 'js/*.js', dest: 'dest/'}
        ]
      },
      images: {
        files: [
          {expand: true, cwd: 'src/', src: 'images/*.svg', dest: 'dest/'}
        ]
      }
    },
    less: {
      all: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 0
        },
        files: {
          'dest/css/main.css': 'src/less/main.less'
        }
      }
    },
    postcss: {
      options: {
          processors: [
            autoprefixer({ browsers: ['last 2 versions'] }).postcss
          ]
      },
      dist: { src: 'dest/css/main.css' }
    },
    image_resize: {
      project: {
        options: {
          width: 250
        },
        files: [
          {expand: true, cwd: 'src/', src: 'images/{appify,sunflower,bokeh}_crop.jpg', dest: 'dest/'}
        ]
      }
    },
    responsive_images: {
      options: {
        engine: 'im'
      },
      hero: {
        files: [
          {expand: true, cwd: 'src/', src: 'images/golden_gate.jpg', dest: 'dest/'}
        ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'src/less/*.less',
        tasks: ['less', 'postcss']

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
      build: ['dest/']
    }
  });

  grunt.registerTask(
    'default',
    ['copy', 'less', 'postcss', 'image_resize', 'responsive_images', 'watch']
  );
};
