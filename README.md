![](https://github.com/UDDBootcamp/7M_FULLSTACK_M6_PROY/blob/master/images/banner.png)

# Proyecto 6: Aplicación Backend con Autenticación

## Índice
1. [¿Qué construirás?](#1-qué-construirás)
2. [Objetivos](#2-objetivos)
3. [Requisitos](#3-requisitos)
4. [Instalación y configuración](#4-instalación-y-configuración)
5. [Implementación de la solución con Swagger](#5-implementación-de-la-solución-con-swagger)
6. [Contacto](#6-contacto)

------------

## 1. ¿Qué construirás?
Construirás una aplicación backend que maneja la autenticación y autorización de usuarios. La aplicación debe incluir un modelo de usuario y un modelo de Producto que puede ser cualquier elemento que desees enlazar con el usuario.

Los modelos deben estar relacionados entre sí a través de MongoDB y la aplicación debe permitir las operaciones CRUD en los "productos".

En este proyecto, te enfrentarás a dos tareas principales:

- Crearás una aplicación backend con funciones de autenticación y autorización utilizando tecnologías como JWT (JSON Web Tokens). Esta aplicación te permitirá entender y experimentar la importancia de la seguridad en las aplicaciones web, así como también la manera en la que diferentes herramientas pueden ser utilizadas para implementar mecanismos de autenticación en los servidores.

- La aplicación deberá estar estructurada de tal manera que incluya dos modelos principales, uno para el Usuario y otro para cualquier Producto o elemento que desees enlazar a ese usuario. Estos productos pueden ser cualquier cosa, desde compras y artículos creados por el usuario hasta listas de tareas pendientes. La intención de esta estructura es que ambos modelos estén interrelacionados a través de MongoDB, la base de datos que has estado aprendiendo en las últimas semanas. Usarás Mongoose como ORM para facilitar esta interacción.

Además de lo anterior, estarás utilizando OPENAPI y Swagger para el proceso de documentación, de manera opcional.

Finalmente, la entrega del proyecto se realizará a través de render.com, enfocándonos únicamente en el servicio web. Para el despliegue de la base de datos, usarás MongoDB Atlas.

Para el modelo del producto o elemento, deberás implementar el proceso de CRUD (Crear, Leer, Actualizar, Borrar) al desarrollar los servicios. Para esto, usarás express.js y cors, y deberás estructurar tus carpetas con controladores, modelos y rutas. También aplicarás dotenv para el manejo de las variables de entorno.

En caso de que lo necesites, puedes crear otro modelo adicional.

A continuación, se te compartirá los siguientes endpoints.

### Endpoints para Usuario:
| Descripción del Endpoint | Método | Endpoint | Ejemplo. Caso de uso. |
| :------------: | :------------: | :------------: | :------------: |
| Registrar un usuario | POST | /api/user/register | Como usuario, quiero registrarme en la plataforma proporcionando mi nombre, correo electrónico y una contraseña. |
| Iniciar sesión de usuario | POST | /api/user/login | Como usuario, quiero iniciar sesión en la plataforma utilizando mi correo electrónico y contraseña para acceder a mis productos. |
| Verificar el token del usuario | GET | /api/user/verifytoken | Como usuario, quiero que mi sesión se mantenga abierta y que la plataforma recuerde mi estado de inicio de sesión. |
| Actualizar información del usuario | PUT | /api/user/update | Como usuario, quiero actualizar mi información de perfil, como mi nombre, correo electrónico y contraseña. |

**Nota: Se agregaron los endpoints create, readall, readone y delete.* 

### Endpoints para Producto:
| Descripción del Endpoint | Método | Endpoint | Ejemplo. Caso de uso. |
| :------------: | :------------: | :------------: | :------------: |
| Crear un producto | POST | /api/product/create | Como vendedor, quiero agregar un nuevo producto a mi catálogo proporcionando detalles como el nombre del producto, descripción y precio. |
| Leer todos los productos | GET | /api/product/readall | Como comprador, quiero ver todos los productos disponibles en el catálogo para poder seleccionar uno para comprar. |
| Leer un producto específico | GET | /api/product/readone/:id | Como comprador, quiero ver los detalles de un producto específico utilizando su ID para decidir si quiero comprarlo. |
| Actualizar un producto | PUT | /api/product/update/:id | Como vendedor, quiero actualizar los detalles de un producto específico, como su nombre, descripción y precio. |
| Eliminar un producto | DELETE | /api/product/delete/:id | Como vendedor, quiero eliminar un producto específico de mi catálogo cuando ya no esté disponible para la venta. |


------------



## 2. Objetivos
Los objetivos principales de este proyecto son:

- Comprender y aplicar conceptos de autenticación y autorización en una aplicación backend.
- Practicar y afianzar tu conocimiento en MongoDB y Mongoose.
- Aplicar las operaciones CRUD en la creación de servicios.
- Entender y utilizar OPENAPI y Swagger para documentar tus servicios.
- Desarrollar una aplicación completa utilizando Node.js, y complementarla con herramientas como express.js, cors y dotenv.
- Utilizar MongoDB Atlas para el despliegue de la base de datos y render.com para la entrega del proyecto.


------------



## 3. Requisitos
Usa esta lista para saber los requisitos mínimos del proyecto:

### GENERAL
 - Realizarse de manera individual
 
### ARQUITECTURA DE CARPETAS
-  Crear una arquitectura de carpetas y archivos, clara

### APLICACIÓN DE SERVICIOS CRUD
- Implementar autenticación y autorización en tu aplicación.
- Crear dos modelos, uno para el Usuario y otro para el Producto.
- Implementar operaciones CRUD para el modelo del Producto.
- Utilizar MongoDB y Mongoose para gestionar la base de datos.

### CONTROL DE VERSIONES
- Crear un repositorio en GitHub y subir el proyecto al mismo.

### ENTREGA A TIEMPO
- Entregar a tiempo el proyecto.

### DOCUMENTACIÓN DE LA API (OPCIONAL)
- Documentar todos los endpoints utilizando Swagger y OpenAPI

### DESPLIEGUE (OPCIONAL)
- Crear una URL de producción para este proyecto, a través de render.com

------------

## 4. Instalación y configuración
- Clona este repositorio: (https://github.com/TomasWielandt/Proyecto-6.git)
- Sitúate en la carpeta de "proyecto-6".
```
$ cd proyecto-6
```
- Instala las dependencias
```
$ npm install
```
- Asegúrate de tener un archivo .env con las variables de entorno.
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/<nombre_de_base_de_datos>
SECRET=<secret>
URL_BASE=/api
SALT=10
```
- Levanta el proyecto:
```
npm run dev
```

------------


## 5. Implementación de la solución con Swagger
Una vez que el proyecto haya cumplido con la instalación, abre en tu navegador localhost:3000/api-docs o ingresa al siguiente enlace: https://proyecto-6-x1zq.onrender.com/api-docs
[![principal.png](https://i.postimg.cc/44t7d1XP/principal.png)](https://postimg.cc/K4GvpBk3)

### 1. Registrarse
Has click en **AUTH** y selecciona **Registrar un nuevo usuario**. Presiona el botón **Try it out** en el costado derecho, ingresa los datos del usuario como se muestra a continuación (name, username, password y active) y luego has click en **Execute**.
[![registrar.png](https://i.postimg.cc/d0tNQ1dR/registrar.png)](https://postimg.cc/XrmkQnsX)
*Nota: Active es opcional. Si no se coloca, se creará por defecto como false y no podrás hacer inicio de sesión.

Deberás de obtener un resultado como el siguiente:
[![registrar-resultado.png](https://i.postimg.cc/3R2vPjRt/registrar-resultado.png)](https://postimg.cc/BLQbFK2F)

### 2. Iniciar sesión
Seleccionar la pestaña **Iniciar sesión**, hacer click en **Try it out**, colocar tu username y tu clave y clickear **Execute**.
[![login.png](https://i.postimg.cc/rsKLDjrJ/login.png)](https://postimg.cc/q6VFY8Qh)

Como resultado creará un token que te permitirá acceder a los otros endpoints.
[![login-resultado.png](https://i.postimg.cc/pdrNGk0t/login-resultado.png)](https://postimg.cc/TKzHhjMk)

A continuación deberás copiar el token e ingresar a la pestaña **Authorize** que se encuentra en la esquina superior derecha de la página. Luego pegar el token donde indica **Value:** y hacer click en **Authorize**.
[![authorize.png](https://i.postimg.cc/J75LhyHv/authorize.png)](https://postimg.cc/pyr7GLZJ)

Deberás de obtener una respuesta como la siguiente:
[![authorize-resultado.png](https://i.postimg.cc/8kH2SqqV/authorize-resultado.png)](https://postimg.cc/G947PSLM)

En caso de no autorizar el token, se te negará el acceso a los siguientes endpoints.
[![acceso-no-autorizado.png](https://i.postimg.cc/c4z51ZhP/acceso-no-autorizado.png)](https://postimg.cc/6ydhzkDh)

### 3. Verificar token
Seleccionar la pestaña **Verificar token**, hacer click en **Try it out** y luego en **Execute**. Deberia mostrarte los datos del usuario anteriormente registrado menos la clave por motivos de seguridad.
[![verify-token.png](https://i.postimg.cc/fRK5P9y7/verify-token.png)](https://postimg.cc/HrrQcjQj)

### 4. Crear un nuevo usuario
Has click en **USER** y selecciona **Registrar un nuevo usuario**. Presiona el botón **Try it out**, ingresa los datos del nuevo usuario y luego has click en **Execute**.

### 5. Obtener lista de usuarios
Seleccionar la pestaña **Obtener usuarios**, hacer click en **Try it out** y luego en **Execute**. Deberás de obtener un listado de todos los usuarios registrados en la base de datos.
[![readall.png](https://i.postimg.cc/j5mrJ9rj/readall.png)](https://postimg.cc/BLTzrmbW)

### 6. Obtener un usuario
Seleccionar la pestaña **Obtener usuario** y has click en **Try it out**. Luego ingresa el ID de usuario que deseas buscar y presiona **Execute**.
[![readone.png](https://i.postimg.cc/KjnNFkG5/readone.png)](https://postimg.cc/dZVdj0T7)

Obtendrás lo siguiente:
[![readone-resultado.png](https://i.postimg.cc/kMxF2SCQ/readone-resultado.png)](https://postimg.cc/F1HJq77z)

### 7. Actualizar un usuario
Seleccionar la pestaña **Actualizar un usuario** y has click en **Try it out**. Luego ingresa el ID de usuario que deseas actualizar, escribe los datos que desas actualizar y presiona **Execute**.
[![update.png](https://i.postimg.cc/SsQqc85n/update.png)](https://postimg.cc/DWNtTW7h)

Obtendrás lo siguiente:
[![update-resultado.png](https://i.postimg.cc/C16yD2k2/update-resultado.png)](https://postimg.cc/ZB3DzVfP)

### 8. Eliminar un usuario
Seleccionar la pestaña **Eliminar un usuario** y has click en **Try it out**. Luego ingresa el ID de usuario que deseas eliminar y presiona **Execute**.
[![delete.png](https://i.postimg.cc/287s73Qv/delete.png)](https://postimg.cc/CzdrFh6L)

Obtendrás esto:
[![delete-resultado.png](https://i.postimg.cc/J0c2xdkm/delete-resultado.png)](https://postimg.cc/ZvnHKHHD)

### 9. Productos
Los endpoints para productos funcionan de la misma manera que usuarios, con la diferencia de que al crear un producto tienes que ingresar name, description (opcional), price y stock. Haces click en la pestaña Product y apareceran los endpoints (create, readall, readone, update y delete).
[![products.png](https://i.postimg.cc/XYyw0BsB/products.png)](https://postimg.cc/rDMd1sXq)

## 6. Contacto

Tomás Wielandt<br>
twielandt16@gmail.com
