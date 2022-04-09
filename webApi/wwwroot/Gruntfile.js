module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            sitecss: {
                options: {
                    banner: ''
                },

                files: {
                    '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/css/one.css': [
                        '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/components/Sidebar/Sidebar.css',
                        '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/components/Home/Home.css',
                        '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/components/Video/Video.css'


                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            my_target: {
                files: {
                    '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/js/one.js': [
                        '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/components/StudentInfo/StudentInfo.js',
                        '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/components/Sidebar/Sidebar.js',
                        '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/components/Home/Home.js',
                        '/Users/sebastianenciso/Projects/webApi/webApi/wwwroot/components/Video/Video.js'



                    ],
                },
            }
        },
        watch: {
            css: {
                files: ["components/**/*.css"],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                },
            },
            js: {
                files: ["components/**/*.js"],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
        },

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);

};
