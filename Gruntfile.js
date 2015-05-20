module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            js: ["public/css/unificado.concat.css",'public/css/unificado.css', "public/js/unificado.js"]
        },
        concat: {
            css: {
                src: [
                    'public/css/*.css'
                ],
                dest: 'public/css/unificado.concat.css'
            },
            js: {
                src: [
                    'public/js/*.js'
                ],
                dest: 'public/js/unificado.js'
            }
        },
        cssmin: {
            css: {
                src: 'public/css/unificado.concat.css',
                dest: 'public/css/unificado.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'public/js/unificado.js' : ['public/js/unificado.js']
                }
            }
        },
        watch: {
            files: ['public/css/*.css', 'public/js/*.js'],
            tasks: ['clean', 'concat', 'cssmin', 'uglify'],
            options: {
                spawn: false
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['clean', 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};