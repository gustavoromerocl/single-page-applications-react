# Routing en el cliente 

**Router del cliente**

Para comprender cómo funciona el proceso de ruteo en el cliente, primero debemos entender qué pasa cuando enviamos una solicitud a un servidor, para que esté nos entregue la respuesta que queremos.

En un sitio web sin dinamismo, tenemos múltiples archivos HTML, cada uno de ellos con una ruta correspondiente de acceso, misma que usualmente es igual a la ubicación del archivo en el servidor. El servidor tiene el trabajo de darle lectura a la ruta, y buscar el archivo correspondiente. A este proceso lo llamamos ruteo, y es la forma más básica de ruteo que existe.

En una aplicación web, el proceso de ruteo lo hace un lenguaje de programación, usualmente apoyado de un archivo en el que se definen las rutas, junto con las estructuras de código que darán respuesta a cada ruta, usualmente una función.

Cuando el servidor recibe una petición, el servicio encargado del ruteo, carga el archivo con las rutas definidas, busca la ruta recibida y delega a la función correspondiente el darle respuesta a la solicitud, la función produce la vista, y los links a los archivos necesarios para cargar la página.

la respuesta a la ruta. Este es el ruteo al que usualmente conocemos como server side routing, o ruteo en el servidor. Es el más común y el más tradicional.

Existen algunas deficiencias al routing en el servidor, como por ejemplo, que aunque dos páginas de rutas distintas, usen el mismo archivo de estilos, ambas páginas deben de volver a solicitarlo y volver a cargarlo. En cada navegación entre rutas, el navegador pausa mientras carga la nueva vista, y la despliega. Haciendo que el sitio sea inusable durante estos segundos.

Para mejorar la experiencia de usuario, se produce este concepto de routing desde el cliente, que es, traer toda la lógica de ruteo del server, hacia el cliente. Tal como en el caso del ruteo en el servidor, en el cliente, se define un archivo con las rutas de la aplicación, y qué función se encargará de responder, en el caso de React, es un componente el que se muestra para cada ruta.

Este proceso implica que sea el lenguaje del cliente, JavaScript, quien implemente la lógica necesaria para actualizar la página. Misma que puede verse de una de las dos siguientes formas:

La primera, que se cargue un archivo JavaScript que incluya todas las funciones para actualizar la página. Que al cambiar la página, se use este archivo JavaScript para actualizar la página misma, y sólo se carguen los nuevos recursos solicitados como imágenes, videos, etc.

La segunda, que se cargue una porción de JavaScript por página, y que cuando se navegue hacia otra ruta, se realice una petición AJAX al servidor, para traer otra porción de JavaScript que actualice la página. Todo esto sin recargar la página. A este proceso se le llama code splitting, porque dividimos el código por páginas.

De entre las dos estrategias, la de code splitting suele ser la mejor, porque evita que desde la primera página que visites, descargues todo el código de la aplicación completa. Por otro lado, la estrategia de code splitting, implica que debes tener una estrategia y una herramienta para separar tu código. Webpack puede hacer esto por ti.

Una de las grandes ventajas que nos ofrece el routing en el cliente, es la posibilidad de recargar la página por porciones, en lugar de hacerlo completamente. Esto entre otras cosas nos permite guardar el estado de los elementos que no se actualizan, y únicamente modificar lo que sí. Además de que permite que el usuario pueda continuar interactuando con el sitio, aún cuando una parte esté cargando.

Entre las desventajas del routing en el cliente tenemos que, puede romper la funcionalidad de la página si se deshabilita JavaScript, normalmente, estas tecnologías no están diseñadas para trabajar junto con lectores de pantalla u otras herramientas de accesiblidad. Esta práctica también puede ser más difícil de mantener, porque gran parte de la funcionalidad que el protocolo HTTP y el funcionamiento de la web, dan por defecto, tiene que implementarse desde 0 en el router del cliente.

Si tu aplicación se puede beneficiar de la experiencia mejorada del router en el cliente, y tienen el equipo para solventar las deficiencias, es una gran elección. Continuemos.

**Configurar react-router v6**

https://reactrouter.com/docs/en/v6/getting-started/installation

npm install react-router-dom@6

**Definir rutas y links de navegacion**

Las rutas del lado del cliente son el corazón de las SPA, ya que realizan actualizaciones en la web app con javascript sin hacer peticiones al servidor.

**Rutas anidadas**

Anidar rutas para evitar repetir el path inicial es posible mediante el componente "Route". Además es posible hacer algo similar al block content o bloques de contenido con el componente "Outlet", que carga la vista de las otras rutas por debajo del componente principal.
 
**Navegación con javascript**

En esta oportunidad revisamos el hook useNavigate y tambien el componente "Navigate" para redireccionar a otra vista dentro de la app.

**Leyendo los parametros**

Para leer los parametros enviados a través del path, usamos el hook useParams(). el el ejemplo lo usamos para imprimir el parametro guardado en el wildcard(:id). Además, revisamos el envío de información a través de los params, los cuales pudimos leer con la propiedad search del hook useLocation(). Sin embargo para poder imprimir la información es necesario usar la clase URLSearchsParams.