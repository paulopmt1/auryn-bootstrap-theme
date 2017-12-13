module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        clean: {
            dist: {
                cwd: '/',
                src: ['dist']
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
             files: {
                    'dist/auryn-bootstrap-theme.min.css': ['dist/auryn-bootstrap-theme.css']
               }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/auryn-bootstrap-theme.css': 'source/main-imports.scss',
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['clean', 'sass', 'cssmin'])
}