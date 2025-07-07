# Propuesta_Login
Este trabajo tiene como proposito mostrar un login que sea funcional despues de hacer el formulario de registro 

---

## Descripción del Proyecto

- **Login (index.html):**  
  Permite a los usuarios ingresar su usuario y contraseña para acceder.  
  Incluye opción para "Recuérdame" y mensaje de error si los datos no coinciden.  
  En caso de éxito, redirige a una URL (personalizable).

- **Registro (Registro.html):**  
  Los usuarios pueden crear una cuenta, validando usuario único y coincidencia de contraseñas.  
  Si el registro es exitoso, redirige al login y guarda los datos en localStorage.

- **Almacenamiento local:**  
  Los datos de usuario (nombre, correo, contraseña) se guardan en `localStorage` como un array de objetos JSON.

- **Bootstrap & Bootstrap Icons:**  
  Diseño responsivo y elegante.

---

## Guía de Uso Rápido

1. Clona o descarga este repositorio.
2. Abre `index.html` para probar el login.
3. Si no tienes cuenta, haz clic en **"Regístrate aquí"** para crear una nueva.
4. El sistema validará los datos y te permitirá acceder o mostrará mensajes de error si corresponde.

---

## Ejemplo de Uso

### Registro de Usuario

- Ingresa nombre de usuario, correo y contraseña (dos veces).
- Debes aceptar los términos y condiciones.
- El usuario debe ser único y las contraseñas coincidir.

### Inicio de Sesión

- Ingresa tu usuario y contraseña registrados.
- Si son correctos, verás un mensaje de bienvenida y serás redirigido.
- Si no coinciden, aparece un mensaje de error.

---

## Capturas de Pantalla

### Login  
![Login](./Captura%20de%20pantalla%202025-07-07%20083851.png)

### Registro  
![Registro](./Captura%20de%20pantalla%202025-07-07%20084038.png)



---
## Explicacion code 
```html

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Página de Inicio de Sesión</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/login.css">
</head>
<body>
  <div class="login-container">
    <div class="profile-icon">
      <i class="bi bi-person-circle"></i>
    </div>
    <h3 class="text-center mb-3">Iniciar Sesión</h3>
    <form id="loginForm">
      <div class="mb-3 input-group">
        <span class="input-group-text"><i class="bi bi-person"></i></span>
        <input type="text" id="usuario" class="form-control" placeholder="Nombre de usuario" required>
      </div>
      <div class="mb-2 input-group">
        <span class="input-group-text"><i class="bi bi-lock"></i></span>
        <input type="password" id="contrasena" class="form-control" placeholder="Contraseña" required>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="remember">
          <label class="form-check-label" for="remember">Recuérdame</label>
        </div>
        <a href="#" class="text-decoration-none small" style="color:#17a2b8;">¿Olvidaste tu contraseña?</a>
      </div>
      <button type="submit" class="btn btn-info w-100 mb-2">Entrar</button>
      <div class="text-center mb-2">
        <span>¿No tienes cuenta? <a href="Registro.html">Regístrate aquí</a></span>
      </div>
      <div class="text-center text-muted mb-2">o</div>
      <button type="button" class="btn btn-google">
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google"> Continuar con Google
      </button>
    </form>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/login.js"></script>
</body>
</html>


```
## Propiedades y Funciones Utilizadas

### Propiedades HTML/CSS

- **Bootstrap:**  
  Uso de clases como `container`, `form-control`, `btn`, `input-group`, `mb-3`, `text-center`, `w-100`, entre otras, para lograr un diseño moderno y responsivo.
- **Atributos HTML:**  
  - `type="text"` y `type="password"` para los campos de usuario y contraseña.
  - `required` para asegurar que los campos sean obligatorios.
  - `placeholder` para mostrar texto guía en los campos de entrada.
  - `href` en enlaces para navegación (registro y recuperación de contraseña).
- **Íconos:**  
  - Implementación de Bootstrap Icons, por ejemplo: `bi bi-person`, `bi bi-lock`.
- **Estilos personalizados:**  
  - Uso de la clase `login-container` definida en el archivo `login.css` para estilizar el contenedor del formulario.

---

### Funciones JavaScript

- **addEventListener('submit')**  
  Captura el evento de envío del formulario y previene el comportamiento por defecto.
- **getElementById()**  
  Obtiene los valores ingresados en los campos de usuario y contraseña.
- **localStorage.getItem() / setItem()**  
  Recupera y almacena los usuarios en el almacenamiento local del navegador.
- **Array.find()**  
  Busca si el usuario y la contraseña ingresados coinciden con algún usuario registrado.
- **alert()**  
  Muestra mensajes de bienvenida o de error al usuario según corresponda.
- **window.location.href**  
  Redirige al usuario en caso de inicio de sesión exitoso.

---




```js
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();

  let usuario = document.getElementById('usuario').value.trim();
  let contrasena = document.getElementById('contrasena').value;

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  let userEncontrado = usuarios.find(u => u.usuario === usuario && u.pass === contrasena);

  if(userEncontrado){
    alert("¡Bienvenido, " + usuario + "!");
    window.location.href = "https://www.facebook.com/josemanuecristales";
  }else{
    alert("Usuario o contraseña incorrectos.");
  }
});

```
-------
