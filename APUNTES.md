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

**Ranking de rutas**

Se refiere a cuando dos rutas tienen el mismo nombre, react router debe priorizar una y lo hace en base a la especificidad de esta. Por ejemplo la ruta /videos/:id podría recibir en el wild card una palabra que sea igual a otra de las rutas (videos/nuevo), en este caso se va a desplegar la menos ambigua. 

# Autenticación de usuarios 

**Qué es Redux**

Redux es un manejador para el estado de tu aplicación. Está diseñado como un almacén predecible, centralizado, flexible y fácil de debuggear.

Para entender qué es Redux, primero necesitamos saber a qué nos referimos con el estado de una aplicación, y cómo manejamos tradicionalmente este estado, con base en esta información, iremos destacando las características y beneficios del uso de Redux.

De acuerdo a la Wikipedia, decimos que un sistema es “stateful” o que tiene un estado, cuando está diseñado para recordar eventos e interacciones de usuario, a esta información recolectada en base a la interacción del usuario con el sistema, se le conoce como el estado. En una aplicación web, podemos por ejemplo recordar si el usuario ya inició sesión o no, si envió un formulario o no, si completó un proceso de bienvenida o no, en qué lugar hizo clic, si cargó una lista de recursos, si hizo una búsqueda, entre muchas otras cosas.

El protocolo base para la web, el protocolo HTTP es stateless, por lo que podemos decir que es un sistema que NO está diseñado para recordar interacciones previas. Cada petición y comunicación es independiente de la otra. Entonces ¿cómo recuerdan la información las aplicaciones web?

El esquema tradicional de manejo de estado en una aplicación web, está basado en cookies. Estas cookies se envían junto con cada petición que se hace al servidor, por lo que es un buen recurso para comunicar y almacenar información del estado de una aplicación. Es a través del esquema de cookies que una aplicación puede recordar si ya visitaste previamente una página, si ya iniciaste sesión, si modificaste una configuración, etc. Es decir, almacena el estado.

Dado que en una aplicación con routing en el cliente, la página se recarga y actualiza localmente, las aplicaciones con routing en el cliente suelen utilizar mecanismos distintos para el almacén del estado.

Para hacer la idea del estado, más tangible, imagina que tienes una estructura JSON global, y que toda la información que deseas comunicar entre tu aplicación, se guarda en este JSON. Ahí guardarías si el usuario ya inició sesión, qué usuario es, si cargo una lista de recursos, si hizo una búsqueda, si uso algunos filtros, si quiere usar dark mode o light mode, etc. Esta estructura se comparte entre todas las piezas de tu aplicación, y la llamamos el estado.

Redux es eso, un almacén centralizado de la información que va produciendo el usuario al interactuar con el sistema.

Para manejar la información de la aplicación, Redux propone un flujo que tienen que seguir los cambios sobre el estado, cuyo propósito es el de hacer estos cambios directos, predecibles, y que si algo falla, sea fácil identificar en dónde ocurrió este cambio o fallo.

En resumen Redux se puede describir como un conjunto de dos cosas: Un almacén centralizado para el estado de la aplicación, y una arquitectura que define cómo fluye la información en la aplicación.

Continuemos.

**Flujo de cambios en Redux**

Imagen vía: https://redux.js.org/tutorials/essentials/part-1-overview-concepts

Redux propone un esquema para el flujo de información como el que se muestra en pantalla. Veamos poco a poco cómo van pasando los cambios.

La información se encuentra almacenada en el State, esta información se comparte directamente con la interfaz, para que nuestros componentes puedan usarla y mostrarla al usuario.

Cuando el usuario, mientras interactúa con la vista, produce una modificación al state, el state anuncia este cambio al almacén a través de una operación a la que en Redux, se conoce como dispatch. Para anunciar el cambio, se envía un objeto que describe el cambio que queremos hacer, ejemplo: Agregar 10 a mi cuenta de banco.

Una vez que esta solicitud de cambio llega al almacén, Redux hace pasar esta solicitud a través de lo que se conocen como reducers. Mismas que podemos percibir como funciones que modifican el estado.

Cada reducer es una función distinta, diseñada para responder a cierto cambio. Por ejemplo, habrá un reducer para agregar 10 a mi cuenta, y uno distinto para substraer 10 a mi cuenta.

Los reducers alteran al estado, y cuando esto sucede, el estado lo comunica a la vista para que la interfaz se actualice.

De este diagrama podemos concluir algunas cosas importantes que nos ayudarán entender Redux. Aunque redux almacena la información y la comparte con todos, la vista no puede modificar directamente esta información, sólo puede leerla.

Los reducers, son funciones que modifican el state, cualquier modificación al state debe hacerse única y exclusivamente en un reducer.

Para comunicar un cambio a los reducers, se usan objetos a los que llamamos Actions, que describen el cambio a realizar. Estos objetos se envían al store a través de un proceso de nombre dispatch.

Usualmente un reducer está diseñado para responder a cierto tipo de Actions, cuando el Action enviado, corresponde a un reducer, se produce un cambio en el state.

Continuemos.

**Terminología en Redux**

Redux define una serie de términos que describen algunos de los elementos y algunas operaciones involucradas en el flujo de información. Veamos cuáles son.

Hablamos del store, como una referencia al state de nuestra aplicación, es decir la información, más los reducers que pueden modificar el state. Es decir que el store es la información, y las funciones para modificar el store.

Cuando queremos comunicar una modificación desde la vista al store, usamos una operación de nombre dispatch. Por lo que también podemos decir que para comunicarnos con el store debemos usar dispatch.

La operación dispatch, recibe y envía un objeto que describe los cambios que queremos hacer, a estos objetos descriptores de cambios los llamamos Actions, o acciones.

La estructura de estas Actions se ve de la siguiente manera

{
  type: “users/signIn”,
  payload: { email: “urielcodigofacilito.com”  }
}
Todos los actions contienen una propiedad type, que identifica el tipo de evento que se realizará. Opcionalmente, pueden incluir una propiedad payload, en caso de que neceisten enviar información para que se realice el cambio. En este ejemplo tenemos una modificación correspondiente al login de un usuario, junto con el usuario que ingresó.

Cuando el store recibe un action para realizar un cambio, envía este objeto a los reducers del store, a las funciones que realizan los cambios. Las funciones reducers, usualmente evalúan la propiedad type de la action, para definir si harán una modificación, o dejarán pasar el cambio. Normalmente, sólo un reducer aplica modificaciones para cada tipo distinto de action que existe.

Los reducers se caracterizan por ser funciones puras, es decir, funciones que no producen efectos secundarios y manejan estructuras inmutables. Esto quiere decir que dentro de un reducer, no puedes hacer peticiones AJAX, usar timers, intervalos, o modificar variables externas al reducer, ya que todas estas operaciones se considera que producen efectos secundarios.

Alternativamente puedes pensar en las funciones puras como funciones que, si son llamadas con los mismos argumentos, siempre producen los mismos resultados. Cuando involucramos valores externos a la función en su operación, no podemos asegurar que la función siempre retorne el mismo resultado, por lo que ya no se consideran funciones puras.

El state en Redux también es inmutable, es decir, no se puede modificar. Para ser actualizado, el state debe ser reemplazado completamente. Internamente React y Redux podrán detectar cuáles han sido los cambios en el nuevo reemplazo, para actualizar la UI.

En términos prácticos podemos decir que aunque los reducers son funciones que modifican el estado, en realidad estas funciones lo reemplazan. De hecho, cualquier cosas que retorna un reducer se usa para sustituir el state.

Es común que en una aplicación grande, el state se subdivida en porciones, delegando a cada división del state, un reducer distinto. A estas divisiones las llamamos slices. En un state como el siguiente:

{
  user: {}
  videos: []
}
Podemos tener una serie de reducers para user, y otro grupo de reducers para videos.

Por último, usualmente escucharás hablar de action creators. Estas son funciones que retornan objetos action, que describen un cambio. Se implementa este concepto, para evitar escribir los objetos action en cada componente, haciendo más fácil que modifiquemos las acciones, y evitando posibles bugs al generar estos objetos de cambio.

¡Y listo! Ahora que ya conocemos cuáles son los conceptos al hablar de Redux, continuemos en la implementación.

**Instalar y configurar redux**

npm install redux react-redux @reduxjs/toolkit

crtl shift + p -> organiza el código y la indentación

**Redux devtools**

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es

Redux DevTools -> Instalar extención de google chrome

**Redux Thunks**

Los thunks son estados con operaciones asyncronas, reduxjs tools puede agregar thunks a su cartera de reducers y ejecutar acciones según el estado de la promesa que se configure en el thunk (createAsyncThunk)

**Registro de usuarios**

npm install axios

se indica la palabra reservada await para esperar a que la promesa se resuelva y luego asignar el resultado a la variable, si no se indica, se asigna la promesa como objeto a la variable

API SERVICE

repositorio:
https://github.com/codigofacilito/videos-api

https://api.video/

**Inicio de sesión**

npm install react-hook-form

El hook react-hook-form toma los datos enviados en el formulario y los envía a la función que recibe como parámetro

**Cerrar sesión**

&& -> es usado para mostrar el elemento de la derecha si lo que recibe en la izquierda es truthy

**Persistencia de datos**

npm install redux-persist

**blacklist y whiteList redux-persist**

Son propiedades que nos permiten indicar que se guarda y que no se guarda en el storage de persistencia de datos.

# Styled components

**CSS in JS [React Single Page Apps]**

CSS in JS es el concepto que describe a distintas estrategias que buscan solucionar algunos problemas de integración de CSS con aplicaciones de JavaScript, usando una combinación de JavaScript y CSS, para redactar los estilos, en archivos de JavaScript.

En aplicaciones de React, las estrategias de CSS in JS son principalmente útiles, especialmente porque CSS no fue diseñado con una arquitectura de componentes en mente, como la que usan las aplicaciones de React.

Recordemos que la parte central de las aplicaciones de React son los componentes. Los componentes encapsulan toda la funcionalidad en elementos con los que podemos ir construyendo la aplicación, como si fueran piezas de lego.

El problema de CSS con los componentes es que, CSS es de scope global. Por lo que una misma clase podría repetirse entre dos componentes y cada uno alterar el estilo del otro. CSS no nos permite encapsular los estilos de una funcionalidad en un componente, sin asegurarnos que estos estilos puedan colisionar con otros elementos.

Para solucionar eso, las estrategias de CSS in JS suelen ofrecer formas de modularizar CSS, estrategias para evitar el scope global, entre otros. Todo esto a través de JavaScript.

Las desventajas del enfoque de CSS in JS, son varias, por un lado, delegamos funcionalidad que CSS nos da por defecto, a JavaScript para que nosotros o una librería lo programemos, este intercambio puede producir bugs en nuestros diseños. Por otro lado, las estrategias de CSS in JS suelen eliminar los beneficios de la cascada de CSS, no entraré en mucho detalle al respecto porque requeriría un nivel de comprensión intermedio de lo que es la cascada en CSS.

Por ahora es importante recordar que estas estrategias viene con ciertos defectos, y que deben usarse en escenarios donde los beneficios de integrar CSS en JavaScript, han sido detectados y están bien definidos.

Continuemos.

**Fundamentos y configuracion de styled components**

https://styled-components.com/

npm install styled-components

Es una librería que asigna estilos mediante tags templates y de forma interna realiza la conversión y asignación de los estilos a las etiquetas.

**Tabajando con props**

Es posible pasar porps a nuestras etiquetas, para definir sobre el estilo dependiendo de si es truthy o falsy 

**Extendiendo estilos de otros componentes**

Para realizarlo styles posee un método del mismo nombre que recibe como parametro el componente base desde el que se construira uno nuevo. EL componente que se recibe puede ser un creado por styled components u otro proveniente desde otra fuente, como en el ejemplo que decoramos el componente link de react router dom

**Props y atributos**

Las ṕrops de lso componentes base se conservan y pueden utilizar en los atributos de las eqtiquetas, styled components ofrece dentro de su sintaxis el método attrs que recibe las props y las asigna a los atributos en una función

**Nesting**

Al igual como otros pre-procesadores como SAAS, styled component puede anidar los estilos usando el operador ampersan:

& selector{ styles: attrr}

de la misma forma se puede usar operadores como hover, after, etc. Tambien cuenta con un condicional como se aprecia en el ejemplo: .class &{} en este caso, el ampersan se asigan despues del selector y solo si la etiquieta padre tiene la clase indicada se aplican los estilos.

**Bloques reusables de CSS**

Al igual que los @mixins de saas, es posible definir un bloque de estilso y reutilizarlos en otros componentes. Para ello se utiliza el helper css de styled components.


**Configurando un tema**

Es posible definir un tema para alojar todos los estilos principales del layout de nuestra app en un mismo archivo, para ello styled components nos otorga un provider llamado ThemeProvider, el cual le hace wrapper a la app para entregar los estilos a los componentes que esten dentro del tag.

**Layout de la app**

El layout es el template base sobre el que se cargará la app, ene ste caso mediante la propiedad grid-template-rows alineamos el nav y footer

**Botones del vídeo**

npm install react-svg

**Formulario de inicio de sesión**

Los componentes funcionales no pueden recibir referencias, por este motivo es que la referencia se llama directamente desde el input a traves de las props

**Mostrar navegación y footer condicionalmente**

Podemos usar react router para sobrescribir el componente segun la ruta. También podemos validar que el usuario este iniciado en el store de redux para desplegar la información

# Deploy a producción

**Media queries con styled components**

Es posible definir con js los breakpoints para desplegar nuestra app en distintos dispositivos y usarlo con styeld components.

**Manejo de variables de entorno**

npm install env-cmd 

- Crear archivo .env para desarrollo y produccion
- modificar la configuracion de la api
- modificar el script del package.json para start y build
- Agregar o modificar de gitignore las variables de entorno
- Instalar ngrok para servir la apirest

**Generar el build**

Ejecutar:

- npm run build
- acceder a carpeta build y ejecutar el servidor de node static
- se modifica ruta base

**Deploy a firebase hosting**

- abrir la consola de firebase desde la pagina oficial y crear un nuevo poryecto
- npm install -g firebase-tools
- firebase login
- firebase init
- firebase deploy
