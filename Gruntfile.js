/*
* fizzvr Gruntfile
*
* Desarrollo Web NodeJS • Quito Ecuador
*
* Copyright (c) 2016 Vladimir Rodríguez <fizzvr@gmail.com> 
* Bajo licencia MIT (https://github.com/fizzvr/fizzvr.github.io/blob/master/LICENCIA)
* Para contacto y soporte: https://fizzvr.github.io
*/

module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
require('time-grunt')(grunt);
    grunt.initConfig({
        // metadatos
        leerJson: grunt.file.readJSON('package.json'),
        estandarte: '/*\n' +
            '* <%= leerJson.name %>\n' +
            '*\n' +
            '* <%= leerJson.description %>\n' +
            '*\n' +
            '* Copyright (c) 2016 <%= leerJson.author %> \n' +
            '* Bajo licencia MIT (https://github.com/fizzvr/fizzvr.github.io/blob/master/LICENCIA)\n' + 
            '* Para contacto y soporte: <%= leerJson.homepage %>\n' +
            '* <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n' +                       
            '*/\n\n',
        copy: {
            activos: {
                files: [
                    // Copy from bootstrap source directly flex enabled.
                    {
                        expand: true,
                        flatten: true,
                        src: ["bower_components/bootstrap/css/bootstrap.scss"],
                        dest: 'act/css/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ["bower_components/bootstrap/dist/js/bootstrap.min.js",
                            "bower_components/jquery/dist/jquery.min.js",
                            "bower_components/jquery/dist/jquery.min.map",
                            "bower_components/tether/dist/js/tether.min.js",
                            "bower_components/particles.js/dist/particles.min.js"],
                        dest: "act/js/" 
                    }
                ]
            }
        },
        // tarea de distribucion CSS
        csso: {
           main: {
               options: {
                    banner: '<%= estandarte %>'
                },
                files: {
                  'act/css/vr1.min.css': ['css/vr1.css'],
                  'act/css/vr404.min.css' : ['css/vr404.css']
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '_site/**/*.*'
                    ]
                },
                options: {
                    notify: false,
                    watchTask: true,
                    server: '_site/',
                    port: 3004
                }
            }
        },
        exec: {
            build: {
            cmd: 'bundle exec jekyll build --watch'
            },
            server: {
            cmd: 'bundle exec jekyll serve'
            },
            deploy: {
            cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
            }
          },
        //--------------------
        // DISTRIBUIR[JS&CSS]
		// tarea de distribucion JS
        //--------------------
        uglify: {
            main: {
                // task options
                options: {
                    banner: '/*\n'+
                   '* <%= leerJson.name %> - <%= leerJson.url %>\n' +
                   '*\n' +
                   '* Copyright (c) 2016 <%= leerJson.author %> \n' +
                   '* bajo licencia MIT \n' +
                   '* Para todos los detalles y documentación: \n' +
                   '* <%= leerJson.homepage %> \n' +
                   '* <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n' +
                   '*/\n\n',
                    preserveComments: 'some'
                },
                files: {
                    'jvr/vr1.min.js': ['src/public/js/jvr1.js']
                }
            }
        }
    });
// distribucion de los activos
grunt.registerTask("construir-bienes", ['csso']);
// corriendo localmente
grunt.registerTask("desarrollo", ['browserSync', 'exec:build']);
// distribucion JS y CSS
grunt.registerTask("distribuir-activos", ['copy:activos', 'construir-bienes']);
// tarea por default
grunt.registerTask('default', ['distribuir-activos']);
};
