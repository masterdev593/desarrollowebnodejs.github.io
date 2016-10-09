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
            '* <%= leerJson.name %> v<%= leerJson.version %>\n' +
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
                    {
                        expand: true,
                        flatten: true,
                        src: ["bower_components/bootstrap/dist/css/bootstrap.min.css",
                          "bower_components/bootstrap/dist/css/bootstrap.min.css.map"],
                        dest: 'act/bs4/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: "bower_components/bootstrap/dist/js/bootstrap.min.js",
                        dest: "act/bs4/"
                    },
                    {
                        expand: true,
                        flatten: true,
                        src:["bower_components/jquery/dist/jquery.min.js",
                             "bower_components/jquery/dist/jquery.min.map"],
                        dest: "act/jquery/"
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: "bower_components/tether/dist/js/tether.min.js",
                        dest: "act/tether/"
                    }




                ]
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
                    port: 3003
                }
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
        },
       // tarea de distribucion CSS
        csso: {
           main: {
               options: {
                    banner: '<%= estandarte %>'
                },
                files: {
                  'act/vr/vr1.min.css': ['css/vr1.css']
                }
            }
        }
    });
// distribucion de los activos
grunt.registerTask("distribuir-activos", ['copy:activos']);
// corriendo localmente
grunt.registerTask("server", ['browserSync', 'exec:build']);
// distribucion JS y CSS
grunt.registerTask('construir-bienes', ['csso']);
// tarea por default
grunt.registerTask('default', ['dist-activos']);
};
