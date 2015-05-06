module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            dist: {
                src: './index.html', dest: 'dist/index.html'
            },
            img: {
                src: 'img/bg-shade.png', dest: 'dist/img/bg-shade.png'
            },
            favicon: {
                src: 'img/favicon.png', dest: 'dist/img/favicon.png'
            },
            app: {
                src: 'wp-blog', dest: 'dist/wp-blog'
            },
            ng: {
                src: 'js/angular2.dev.js', dest: 'dist/js/angular2.dev.js'
            }
        },

        less: {
           dist: {
                files: [
                    {expand: true, cwd: 'css', src: ['*.less'], dest: 'css', ext: '.css'}
                ],
                options: {
                    compress: true, // compressing
                    sourceMap: false
                }
            }
        },

        'useminPrepare': {
            options: {
                dest: 'dist'
            },
            html: 'index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        clean: {
            build: ['dist'],
            temp: ['.tmp']
        }

    });

    grunt.registerTask('default', ['concurrent:dev']);
    grunt.registerTask('build', ['clean:build', 'less:dist', 'copy:dist', 'copy:img', 'copy:favicon', 'copy:app', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'clean:temp']);
};
