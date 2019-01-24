# Code-Repository

WikiCode es un repositorio online de fragmentos de código (funciones, bucles de ordenado, etc) de diferentes lenguajes de programación.
La idea de la aplicación es acceder a un listado de códigos o funciones y encontrar rápidamente (por medio de un ordenamiento por lenguaje/fecha y una búsqueda por texto) el código deseado.


# Tecnologías utilizadas

* NodeJS
		+ Express
		+ Mongoose
		+ Nodemoon
		+ Body-parser
		
* MongoDb

* AngularJS

* Bootstrap

* Canvas (HTML 5)


# Instrucciones para desplegar la aplicación
``` 
	* Instalar MongoDB en c:\

	* Crear carpeta data > db en C:\

	* Instalar NodeJS y dependencias (npm install express, npm install body-parser, npm install nodemoon, npm install mongoose)

	* Iniciar CMD y dirigirte a C:\MongoDB\Server\3.4\bin

	* Lanzar el comando mongod (Comprobar que la última línea indica: I NETWORK [] waiting for connections on port 27017

	* Iniciar otra pantalla de CMD y dirigirnos a la carpeta del proyecto (Es preferible que esté en un sitio accesible, como C:\ o el Escritorio)

	* Ejecutar npm install (Instalará los paquetes y plugins definidos en package.json)

	* Ejecutar npm start (Se ejecutará el Script definido en package.json, que reinicia el servidor cada vez que se realiza un cambio en el archivo server.js)

	* Abrir navegador y dirigirnos a "localhost:3000" (o puerto definido en server.js)

	* Utilizar la aplicación.
  
  ```
