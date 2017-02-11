<p align="center">
  <a href="https://desarrollowebnodejs.github.io/">
    <img alt="fizzvr" src="https://github.com/desarrollowebnodejs/desarrollowebnodejs.github.io/blob/master/tile-wide.png?raw=true" width="500">
  </a>
</p>

<p align="center">
	Desarrollo Web NodeJS • Quito Ecuador
</p>

<p align="center">
  <a href="https://desarrollowebnodejs.github.io"><img alt="Website" src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg"></a>
  <a href="https://travis-ci.org/DesarrolloWebNodeJS/desarrollowebnodejs.github.io"><img alt="Build Status" src="https://travis-ci.org/DesarrolloWebNodeJS/desarrollowebnodejs.github.io.svg?branch=master"></a>
  <a href="http://gruntjs.com/"><img alt="Construido con Grunt" src="https://cdn.gruntjs.com/builtwith.svg"></a>

</p>


---


### Requisitos

- [Ruby](https://www.ruby-lang.org/es/downloads/) con la gema [Bundler](http://bundler.io/) 
	
	```
	ruby -v
	# Verifica Ruby
	gem install bundler
	# Instala la gema bundler
	```

- [NodeJS](https://nodejs.org/es/) con el paquete [Bower](https://bower.io/) y [Grunt](http://gruntjs.com/)

	```
	# Verifica NodeJS
	node -v
	# Bower administra las dependencias del lado cliente
	npm install -g bower
	# Grunt corredor de tareas
	npm install -g grunt-cli
	```

### Desarrollo

1.  Clonar este repositorio

	```bash
	git clone https://github.com/DesarrolloWebNodeJS/desarrollowebnodejs.github.io.git
	cd desarrollowebnodejs.github.io
	```

1.  Instalar dependencias de Ruby y NodeJS

    ```bash
	bundle install
	npm install
	```
+Nota: Si tienes [Yarn](https://yarnpkg.com/), puedes correr con el comando `yarn`, este proyecto incluye el archivo yarn.lock para asegurar las dependencias.


1. Correr el servidor local

	```
	npm start
	```

1. Hackeando en [http://localhost:3004/](http://localhost:3004/)

### Licencia

MIT
