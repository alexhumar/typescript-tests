Cosas a tener en cuenta:

- El archivo package.json se crea ejecutando npm init sobre el directorio raiz del proyecto.

- El archivo tsconfig.json se crea ejecutando tsc --init sobre el directorio raiz del proyecto.

- Se instalo la libreria lodash, mediante el comando npm install lodash --save. El save es para que se creen los archivos en la carpeta node_modules.

- Debido a que las funciones de lodash estan implementadas en JavaScript, y como JavaScript no tiene informacion de tipos, no es posible a priori usar intellisense (autocompletado) y comprobacion de tipos en compilacion una vez que importamos la libreria. Para eso, hay que instalar algo que se denomina como type definitions. Esto se maneja asi para no reimplementar nuevamente lodash en typescript. Por el contrario, se declara la api de la libreria pero en forma tipada. Se instala mediante el comando npm install @types/lodash.

- Si uso export el codigo es tomado como un modulo. Esto quiere decir que el codigo se ejecuta con un alcance propio. O sea que todo lo que sea declarado fuera del modulo hay que importarlo para poder usarlo.

- Namespaces are simply named JavaScript objects in the global namespace... Just like namespaces, modules can contain both code and declarations. The main difference is that modules declare their dependencies....