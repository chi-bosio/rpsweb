# RPS Web

RPS Web es una aplicación basada en el juego de Piedra, Papel o Tijera (Rock, Paper, Scissors) que permite a los usuarios jugar de manera interactiva a través de una interfaz web.

## Características Principales

- **Juego interactivo**: Los usuarios pueden seleccionar entre Piedra, Papel o Tijera para competir contra la computadora.
- **Puntuaciones**: El sistema mantiene un registro de las victorias y derrotas durante la sesión.
- **Diseño minimalista**: La interfaz está diseñada para ser sencilla e intuitiva.
- **Recarga en caliente**: Durante el desarrollo, la aplicación utiliza Air para facilitar cambios rápidos.

## Tecnologías Utilizadas

- **Lenguaje**: Go
- **Framework web**: net/http
- **Frontend**: HTML, CSS, JavaScript

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- Go (v1.18 o superior)
- Git

Opcional:

- Air (para recarga en caliente durante el desarrollo)

## Instalación y Configuración

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/chi-bosio/rpsweb.git
   cd rpsweb
   ```

2. **Inicializar el módulo de Go**
   Si no lo has hecho ya, inicializa el módulo de Go:

   ```bash
   go mod init rpsweb
   go mod tidy
   ```

3. **Ejecutar el servidor**
   Puedes iniciar la aplicación con el siguiente comando:

   ```bash
   go run main.go
   ```

4. **Acceder a la aplicación**
   Abre tu navegador y visita `http://localhost:8080`.

## Uso de Air para Desarrollo

Si deseas utilizar Air para recarga en caliente durante el desarrollo:

1. Instala Air (si no lo tienes):

   ```bash
   go install github.com/cosmtrek/air@latest
   ```

2. Ejecuta Air:
   ```bash
   air
   ```

Esto recargará automáticamente el servidor al detectar cambios en el código.

## Estructura del Proyecto

```
.
├── handlers        # Lógica de los controladores
├── static          # Archivos estáticos como CSS y JS
├── templates       # Archivos HTML
├── rps             # Lógica del juego
├── tmp             # Archivos temporales
├── .air.toml       # Configuración para Air
├── main.go         # Punto de entrada de la aplicación
└── go.mod          # Dependencias del proyecto
```

## Mejoras Futuras

- Agregar más modos de juego (por ejemplo, Mejor de 3).
- Implementar una versión multijugador.
- Guardar puntuaciones en una base de datos.
- Mejorar el diseño y la experiencia del usuario.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Autor

**Chiara Bosio**  
[GitHub](https://github.com/chi-bosio) - [LinkedIn](https://www.linkedin.com/in/chiara-bosio-078b9717b/)
