module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var lessCreateConfig = function (context, block) {
        var cfg = {files: []},
            outfile = path.join(context.outDir, block.dest),
            filesDef = {};

        filesDef.dest = outfile;
        filesDef.src = [];

        context.inFiles.forEach(function (inFile) {
            filesDef.src.push(path.join(context.inDir, inFile));
        });

        cfg.files.push(filesDef);
        context.outFiles = [block.dest];
        return cfg;
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            dist: {
                src: './index.html', dest: 'dist/index.html'
            },
            img: {
                expand: true, src: ['img/**'], dest: 'dist'
            },
            fonts: {
                expand: true, flatten:true, src: ['bower_components/font-awesome/fonts/**'], dest: 'dist/fonts'
            },
            app: {
                expand: true, src: ['wp-blog/**'], dest: 'dist'
            }
        },

        less: {
            dev: {
                files: [
                    {expand: true, cwd: 'css', src: ['*.less'], dest: 'css', ext: '.css'}
                ],
                options: {
                    compress: false,
                    sourceMap: false
                }
            },
           dist: {
                files: [
                    {expand: true, cwd: 'css', src: ['*.less'], dest: 'dist/css', ext: '.css'}
                ],
                options: {
                    compress: true,
                    sourceMap: false
                }
            }
        },

        'useminPrepare': {
            html: 'index.html',
            options: {
                dest: 'dist'
            }
        },

        usemin: {
            html: ['dist/index.html']
        },

        clean: {
            build: ['dist'],
            temp: ['.tmp', 'tmp']
        }

    });

    grunt.registerTask('build', ['clean:build', 'copy:dist', 'copy:img','copy:fonts', 'copy:app', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin','clean:temp']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('less', ['less:dist']);
};
