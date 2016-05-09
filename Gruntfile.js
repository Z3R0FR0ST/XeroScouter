module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["build/public/css"]
        },
        files: {

        }
      },
      production: {
        options: {
          paths: ["build/public/css"],
          cleancss: true
        },
        files: {

        }
      }
    },
    coffee: {
      development: {
        files: {

        }
      },
      production: {
        files: {

        }
      }
    },
    typescript: {
      development: {
        files: {

        }
      },
      production: {
        files: {

        }
      }
    },
    uglify: {
      development: {

      },
      production: {
        files: {

        }
      }
    },
    clean: {
      development: [
        'build/public/css/*.css',
        'build/public/js/*.js',
        '!build/public/css/*.min.css',
        '!build/public/js/*.min.js'
      ],
      production: [
        'build/public/css/*.min.css',
        'build/public/js/*.min.js'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-typescript');

  grunt.registerTask('default', [ 'clean:development', 'coffee:development', 'typescript:development', 'less:development']);
  grunt.registerTask('production', ['clean:production', 'coffee:production', 'typescript:production', 'uglify:production', 'less:production']);

};
