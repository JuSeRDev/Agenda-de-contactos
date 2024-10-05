# Agenda de Contactos por Terminal

Una aplicación de consola que permite gestionar una agenda de contactos. Los usuarios pueden agregar, buscar, actualizar y eliminar contactos, asegurando que los números de teléfono ingresados sean válidos.

## Tabla de contenido
1. [Características](#características)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Explicación del código](#explicación-del-código)
5. [Créditos](#créditos)
6. [Agradecimientos](#agradecimientos)

## Características
- Agregar nuevos contactos con nombre y número de teléfono.
- Buscar contactos existentes.
- Actualizar información de contactos.
- Eliminar contactos.
- Validación de números de teléfono para asegurar que son numéricos y tienen un formato adecuado.

## Tecnologías utilizadas
- Node.js
- JavaScript
- Terminal

## Estructura del proyecto

```bash
agenda-contactos/
├── index.js
````
## Explicación del código

Este código crea una agenda de contactos por terminal que permite a los usuarios gestionar sus contactos de manera efectiva. Utiliza `Node.js` y `JavaScript` para implementar la funcionalidad. La aplicación comienza solicitando al usuario que elija una opción del menú, que incluye agregar, buscar, actualizar y eliminar contactos. 

Cada contacto se almacena en un `Map`, donde la clave es el nombre del contacto y el valor es el número de teléfono. Al agregar un contacto, el programa valida que el número de teléfono tenga exactamente 10 dígitos y sea numérico. Se utilizan funciones específicas para cada operación, garantizando que la lógica esté separada y sea fácil de seguir. 

La aplicación también permite al usuario visualizar todos los contactos existentes en formato de tabla, mejorando la experiencia de usuario al hacer más fácil la gestión de información.

## Créditos

El reto fue propuesto por [MoureDev](https://github.com/mouredev). El desarrollo e implementación fue realizado por **Sebastián Rodríguez**. Puedes encontrar más retos en el [repositorio de MoureDev](https://github.com/mouredev/roadmap-retos-programacion).

## Agradecimientos

Agradezco a [MoureDev](https://github.com/mouredev) por proporcionar este reto, así como a la comunidad de desarrolladores que comparte sus conocimientos y experiencias, lo que me ha ayudado a mejorar mis habilidades en desarrollo web.
